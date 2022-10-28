import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ApiSearchState {
  searchPhotoQuery: string;
  sortBy: string;
  page: string;
  per_page: string;
}

const initialState: ApiSearchState = {
  searchPhotoQuery: localStorage.getItem('searchApiDashboard') || '',
  sortBy: localStorage.getItem('sortBy') || 'relevance',
  page: localStorage.getItem('apiPage') || '1',
  per_page: localStorage.getItem('apiPerPage') || '20',
};

export const apiSearchSlice = createSlice({
  name: 'apiSearch',
  initialState,
  reducers: {
    setSearchPhotoQuery: (state, action: PayloadAction<string>) => {
      state.searchPhotoQuery = action.payload;
    },
    goToPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    setPerPage: (state, action: PayloadAction<string>) => {
      state.per_page = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchPhotoQuery, goToPage, setPerPage, setSortBy } = apiSearchSlice.actions;

export default apiSearchSlice.reducer;
