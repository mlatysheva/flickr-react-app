import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store';
import { IFormCard } from './Form';
import { FormPage } from './FormPage';

export const formData: IFormCard[] = [
  {
    'id': '24',
    'country': 'New Zealand',
    'flag_local': '',
    'continent': 'Australia',
    'population': 5,
    'gdp': 212
  }, {
    'id': '25',
    'country': 'Iraq',
    'flag_local': '',
    'continent': 'Asia',
    'population': 40,
    'gdp': 167
  }, {
    'id': '26',
    'country': 'Ukraine',
    'flag_local': '',
    'continent': 'Europe',
    'population': 44,
    'gdp': 160
  }]

describe("FormPage", () => {
  it("renders FormPage component", () => {
    render(<Provider store={store}>
        <MemoryRouter>
        <FormPage />
      </MemoryRouter>
    </Provider>);
    expect(screen.getByText(/Population, mln/i)).toBeInTheDocument();
    expect(screen.getByText(/New candidates for/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
})