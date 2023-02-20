const initialState = [];
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DETAILS":
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};

export default userReducer;
