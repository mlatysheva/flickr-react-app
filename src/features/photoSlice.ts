import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPhotoItem } from '../components/ApiPhotoList';
import { ApiSearchState } from './apiSearchSlice';

const initialState = {
  photos: [] as IPhotoItem[],
};

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async (searchParameters: ApiSearchState, { rejectWithValue, dispatch }) => {
    try {
      const { searchPhotoQuery, sortBy, page, per_page } = searchParameters;
      const res = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=96d8b314f9c645b749401487147a15de&tags=${searchPhotoQuery}&tag_mode=AND&extras=url_l&format=json&nojsoncallback=1&sort=${sortBy}&page=${page}&per_page=${per_page}&extras=url_l,description,date_upload,tags,owner_name,views`
      );
      dispatch(setPhotos(res.data.photos.photo));
    } catch (error) {
      console.log(error);
    }
  }
);

export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
  },
});

export const { setPhotos } = photoSlice.actions;

export default photoSlice.reducer;
