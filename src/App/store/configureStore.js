import { createStore } from 'redux';
import testReducer from '../../Components/Test/testReducer';

export const configureStore = () => {
  const store = createStore(testReducer);

  return store;
};
