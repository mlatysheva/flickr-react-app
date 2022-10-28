import { render, screen } from '@testing-library/react';
import Error from './Error';
import { MemoryRouter } from 'react-router-dom';

test('renders text', () => {
  render(
    <MemoryRouter>
      <Error />
    </MemoryRouter>);
  const text = screen.getByText(/The requested page does not exist/i);
  expect(text).toBeInTheDocument();
});

test('renders Error', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Error />
    </MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});