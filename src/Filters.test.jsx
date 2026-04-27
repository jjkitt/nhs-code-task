import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('filters tasks by category', async () => {
  localStorage.clear();

  render(<App />);

  const input = screen.getByRole('textbox');
  const select = screen.getByRole('combobox');
  const addButton = screen.getByRole('button', { name: /add/i });

  //add a work task
  fireEvent.change(input, { target: { value: 'Work Task' } });
  fireEvent.change(select, { target: { value: 'Work' } });
  fireEvent.click(addButton);

  //add a home task
  fireEvent.change(input, { target: { value: 'Home Task' } });
  fireEvent.change(select, { target: { value: 'Home' } });
  fireEvent.click(addButton);

  //click the work filter button
  const workFilterButton = screen.getByRole('button', { name: /work/i });
  fireEvent.click(workFilterButton);

  // check only the work task is displayed
  expect(screen.getByText('Work Task')).toBeInTheDocument();
  expect(screen.queryByText('Home Task')).not.toBeInTheDocument();

});