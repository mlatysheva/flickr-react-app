import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

describe("Counter", () => {
  it("renders Counter component", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Counter />
        </MemoryRouter>
      </Provider>);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("+1")).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
})