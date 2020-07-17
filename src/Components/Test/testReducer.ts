import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

const initialState = {
  data: 42,
};

// const incrementCounter = (state) => {
//   return { ...state, data: state.data + 1 };
// };

// const decrementCounter = (state) => {
//   return { ...state, data: state.data - 1 };
// };

const testReducer = (state = initialState, action: { type: any; }) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
};

export default testReducer;
