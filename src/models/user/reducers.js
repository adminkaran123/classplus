const initialState = {
  user: {},
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_FETCH_REQUESTED": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "USER_FETCH_SUCCEEDED": {
      return {
        user: action.user,
        isLoading: false,
      };
    }
    case "USER_FETCH_FAILED": {
      return {
        isLoading: false,
      };
    }
    case "USER_UPDATE_REQUESTED": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "UPDATE_USER": {
      return {
        ...state,
        user: { ...state.user, spending_limit: action.spending_limit },
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
