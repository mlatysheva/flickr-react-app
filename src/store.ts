import { configureStore } from '@reduxjs/toolkit';
import apiSearchReducer from './features/apiSearchSlice';
import counterReducer from './features/counterSlice';
import photosReducer from './features/photoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    apiSearch: apiSearchReducer,
    photos: photosReducer,
  },
});

export const counter = (state: { counter: { value: number } }) => state.counter.value;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
