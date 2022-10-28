import React, { useContext, useState } from 'react';
import { ThemeContext } from './Theme';
import { useAppSelector, useAppDispatch } from '../hooks';
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
  incrementAsync,
} from '../features/counterSlice';

export const Counter = () => {
  const theme = useContext(ThemeContext);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('0');

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div className="cards-wrapper">
        <button
          style={{ background: theme.state.background, color: theme.state.foreground }}
          onClick={(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
            console.log(`Clicked at: ${e.clientX}, ${e.clientY}`);
            dispatch(decrement());
          }}
        >
          -1
        </button>
        <button
          style={{ background: theme.state.background, color: theme.state.foreground }}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          style={{ background: theme.state.background, color: theme.state.foreground }}
          onClick={(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
            console.log(`Clicked at: ${e.clientX}, ${e.clientY}`);
            dispatch(increment());
          }}
        >
          +1
        </button>
        <input
          className="input-amount"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </button>
      </div>
    </div>
  );
};
