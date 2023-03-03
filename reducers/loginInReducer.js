const initialState = {
  isLoggedIn: false,
};
const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, isLoggedIn: true };
    case "LOGGED_OUT":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default logInReducer;
