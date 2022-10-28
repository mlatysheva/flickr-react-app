import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders text', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);
  const text = screen.getByText(/G20 Countries/i);
  expect(text).toBeInTheDocument();
});

test('renders navigation link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);
  const linkElement = screen.getByText(/ABOUT/i);
  expect(linkElement).toBeInTheDocument();
});

test('content of App matches the snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

describe('textbox role is in the document', () => {
  it('renders App component', () => {
    render(<MemoryRouter>
      <App />
    </MemoryRouter>);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  })
})