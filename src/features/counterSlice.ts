import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../store';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
