const initialState = {
    inputData: '',
  };
  
  export  const PhoneNumberReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'Change_Number':
        return {
          ...state,
          inputData: action.payload,
        };
      default:
        return state;
    }
  };