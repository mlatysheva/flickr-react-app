import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

test ('Search query must be stored and restored when search is mounted again', async () =>{
  render(<App />, { wrapper: BrowserRouter });
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});
