import { render, screen } from '@testing-library/react';
import { ApiPage } from './ApiPage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

describe("ApiPage", () => {
  it("renders ApiPage component", () => {
    render(<Provider store={store}>
      <MemoryRouter>
      <ApiPage />
    </MemoryRouter>
    </Provider>);
    expect(screen.getByText(/Find photos on Flickr/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter keywords to search for photos/i)).toBeInTheDocument();
    expect(screen.queryByText(/Enter Continent/i)).toBeNull();
    expect(screen.queryByText(/More.../i)).toBeNull();
  })
})

test ("ApiPage as fragment matches the snapshot", () => {
  const { asFragment } = render(<Provider store={store}>
    <MemoryRouter>
    <ApiPage />
  </MemoryRouter>
  </Provider>);
  expect(asFragment()).toMatchSnapshot();
})
