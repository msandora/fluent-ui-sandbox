import { createStore } from 'redux';
import testReducer from '../Test/testReducer';

export const configureStore = () => {
  const store = createStore(testReducer);

  return store;
};
