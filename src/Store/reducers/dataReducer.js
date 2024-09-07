// src/reducers/dataReducer.js

import { POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from '../../actions/dataActions';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
