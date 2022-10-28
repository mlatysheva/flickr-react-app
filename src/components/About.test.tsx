import { render, screen } from '@testing-library/react';
import About from './About';
import { MemoryRouter } from 'react-router-dom';

test('renders text', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>);
  const text = screen.getByText(/About us/i);
  expect(text).toBeInTheDocument();
});

test('renders navigation link', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>);
  const linkElement = screen.getByText(/ABOUT/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders About', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

describe("About", () => {
  it("renders About component", () => {
    render(<MemoryRouter>
      <About />
    </MemoryRouter>);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
})