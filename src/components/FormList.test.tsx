import { render, screen } from '@testing-library/react';
import { FormList } from './FormList';
import { MemoryRouter } from 'react-router-dom';
import { IFormCard } from './Form';

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

describe("FormList", () => {
  it("renders FormList component based on the info provided", () => {
    render(<MemoryRouter>
      <FormList candidates={formData}/>
    </MemoryRouter>);
    expect(screen.getByText(/Ukraine/i)).toBeInTheDocument();
    expect(screen.getByText(/Iraq/i)).toBeInTheDocument();
    expect(screen.getByText(/New Zealand/i)).toBeInTheDocument();
    expect(screen.getByText(/44/)).toBeInTheDocument();
    expect(screen.getByText(/167/)).toBeInTheDocument();
    expect(screen.getByText(/212/)).toBeInTheDocument();
  })
})