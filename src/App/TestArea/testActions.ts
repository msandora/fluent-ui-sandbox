import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
    // payload: { // Example 
    //   data: 100  //(strings/numbers/boolean only)
    // }
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
