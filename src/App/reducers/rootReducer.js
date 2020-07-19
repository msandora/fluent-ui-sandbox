import { combineReducers } from 'redux';
// import { reducer as FormReducer } from 'redux-form';
// import { reducer as ToastrReducer } from 'react-redux-toastr';

import testReducer from '../Test/testReducer';
// import modalReducer from '../../features/modals/modalReducer';
// import authReducer from '../../features/auth/authReducer';
// import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers({
  // form: FormReducer,
  test: testReducer,
  // modals: modalReducer,
  // auth: authReducer,
  // async: asyncReducer,
  // toastr: ToastrReducer,
});

export default rootReducer;
