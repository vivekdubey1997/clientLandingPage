// src/reducers/dataReducer.js

import { POST_OTP_FAILURE, POST_OTP_REQUEST, POST_OTP_SUCCESS } from '../../actions/otpAction';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const otpReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_OTP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default otpReducer;
