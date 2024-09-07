// src/store/reducers/index.js
import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import otpReducer from './otpReducer';
const rootReducer = combineReducers({
  numberData: dataReducer,
  otpData: otpReducer
});

export default rootReducer;
