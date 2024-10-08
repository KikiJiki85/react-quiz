import { ChangeEvent, useReducer } from 'react';

const initialState = { count: 0, step: 1 };

type Action =
  | { type: 'inc' }
  | { type: 'dec' }
  | { type: 'setCount'; payload: number }
  | { type: 'setStep'; payload: number }
  | { type: 'reset' };

type State = { count: number; step: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'setCount':
      return { ...state, count: action.payload };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
}

function DateCounter() {
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: 'dec' });
  };

  const inc = function () {
    dispatch({ type: 'inc' });
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'setCount', payload: +e.target.value });
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'setStep', payload: +e.target.value });
  };

  const reset = function () {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
