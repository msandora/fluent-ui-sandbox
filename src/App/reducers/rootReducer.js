import { combineReducers } from 'redux';

import testReducer from '../TestArea/testReducer';
import modalReducer from '../../Northstar/Components/Modals/modalReducer';

const rootReducer = combineReducers({
  modals: modalReducer,
  test: testReducer,
});

export default rootReducer;
