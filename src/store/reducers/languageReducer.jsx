const initialState = {
    language: 'en',
    direction: 'ltr',
  };
  
  const languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LANGUAGE':
        return {
          ...state,
          language: action.payload,
          direction: action.payload === 'ar' ? 'rtl' : 'ltr',
        };
      default:
        return state;
    }
  };
  
  export default languageReducer;