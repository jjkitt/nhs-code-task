//Empty Task List test
import { render, screen } from '@testing-library/react';
import App from './App';

test('shows empty state when no tasks exist', () => {
  render(<App />);
  expect(screen.getByText(/No tasks yet/i)).toBeInTheDocument();
});