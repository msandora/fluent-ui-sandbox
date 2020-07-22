import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';
import { createReducer } from '../reducers/reducerUtils';

const initialState = {
  data: 42,
};

const incrementCounter = (state: { data: number }) => {
  console.log({ ...state, data: state.data + 1 });
  return { ...state, data: state.data + 1 };
};

const decrementCounter = (state: { data: number }) => {
  console.log({ ...state, data: state.data - 1 });
  return { ...state, data: state.data - 1 };
};

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter,
});

// const testReducer = (state = initialState, action: { type: any; }) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };

// export default testReducer;
