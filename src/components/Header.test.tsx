import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe("Header", () => {
  it("renders About component", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  })
})