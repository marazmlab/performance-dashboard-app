import { renderHook, act } from '@testing-library/react';
import { usePageAudit } from '../hooks/usePageAudit';
import * as api from '../utils/api';

jest.mock('../utils/api');

test('uses cache for repeated audits', async () => {
  const fakeData = { lighthouseResult: { audits: {}, categories: { performance: { score: 1 } } } };
  api.fetchPageSpeedData.mockResolvedValueOnce(fakeData);

  const { result } = renderHook(() => usePageAudit());

  // first call from API
  await act(async () => {
    await result.current.handleAudit('https://example.com', 'test-key');
  });

  // second call - should be from
  api.fetchPageSpeedData.mockClear();
  await act(async () => {
    await result.current.handleAudit('https://example.com', 'test-key');
  });

  expect(api.fetchPageSpeedData).not.toHaveBeenCalled();
});