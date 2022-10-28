import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormCard } from '../components/Form';

export interface ApiSearchState {
  searchPhotoQuery: string;
  sortBy: string;
  page: string;
  per_page: string;
}

const initialState: IFormCard = {
  id: Date.now().toString(),
  country: '',
  date: Date.now(),
  isRatified: false,
  approvalStatus: 'Approval pending',
  flag_local: '',
  continent: 'Europe',
  population: 0,
  gdp: 0,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<IFormCard>) => {
      state.id = action.payload.id;
      state.country = action.payload.country;
      state.date = action.payload.date;
      state.isRatified = action.payload.isRatified;
      state.approvalStatus = action.payload.approvalStatus;
      state.flag_local = action.payload.flag_local;
      state.continent = action.payload.continent;
      state.population = action.payload.population;
      state.gdp = action.payload.gdp;
    }
  },
});

export const { setCountry } = formSlice.actions;

export default formSlice.reducer;
