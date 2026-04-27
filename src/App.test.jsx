import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('add a new task and display it in the list', () => {
  render(<App />);

  //Find input, select, button
  const input = screen.getByRole('textbox');
  const select = screen.getByRole('combobox');
  const button = screen.getByRole('button', { name: /add/i });

  //Add task title
  fireEvent.change(input, { target: { value: 'Send Email' } });

  //Select category
  fireEvent.change(select, { target: { value: 'Work' } });

  //Click add
  fireEvent.click(button);

  //Check task appears
  expect(screen.getByText('Send Email')).toBeInTheDocument();
});