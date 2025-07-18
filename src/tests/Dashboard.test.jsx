import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/Dashboard';

test('renders audit form and placeholder', () => {
  render(<Dashboard />);
  expect(screen.getByText(/Start by entering a website URL/i)).toBeInTheDocument();
  expect(screen.getByRole('form')).toBeInTheDocument();
});