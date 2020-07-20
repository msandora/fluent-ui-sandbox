import { createStore } from 'redux';
import testReducer from '../TestArea/testReducer';

export const configureStore = () => {
  const store = createStore(testReducer);

  return store;
};
