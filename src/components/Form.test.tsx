import { render, screen } from '@testing-library/react';
import { Form } from './Form';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

describe("Form", () => {
  it("renders Form component", () => {
    render(<Provider store={store}>
        <MemoryRouter>
        <Form />
      </MemoryRouter>
    </Provider>);
    expect(screen.getByText(/Details of the new G20/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Europe/i)).toBeInTheDocument();
  })
})