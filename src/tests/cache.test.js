import { renderHook, act } from '@testing-library/react';
import { usePageAudit } from '../hooks/usePageAudit';
import * as api from '../utils/api';

jest.mock('../utils/api');

beforeAll(() => {
  window.alert = jest.fn();
});

test('uses cache for repeated audits', async () => {
  const fakeData = {
    lighthouseResult: {
      audits: {
        'largest-contentful-paint': { displayValue: '1.2s' },
        'first-contentful-paint': { displayValue: '0.8s' },
        'interactive': { displayValue: '2.0s' },
        'cumulative-layout-shift': { displayValue: '0.01' }
      },
      categories: {
        performance: { score: 1 }
      }
    }
  };

  api.fetchPageData.mockResolvedValueOnce(fakeData);

  const { result } = renderHook(() => usePageAudit());

  // first call from API
  await act(async () => {
    await result.current.handleAudit('https://example.com', 'test-key');
  });

  // second call - should be from cache
  api.fetchPageData.mockClear();
  await act(async () => {
    await result.current.handleAudit('https://example.com', 'test-key');
  });

  expect(api.fetchPageData).not.toHaveBeenCalled();
});