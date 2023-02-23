import axios from "axios";

export const login = (username, password, cb) => (dispatch) => {
  console.log(username, password);
  dispatch({ type: "START_LOADING" });
  axios({
    method: "POST",
    url: "/api/login/login",
    data: {
      username: username,
      password: password,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      // dispatch a success action with the response data
      // dispatch({ type: "REQUEST_SUCCESS", payload: response.data });
      dispatch({ type: "STOP_LOADING" });
      if (cb) {
        cb(response.data);
      }
    })
    .catch((error) => {
      // dispatch a failure action with the error message
      dispatch({ type: "STOP_LOADING" });
      if (cb) {
        cb(error.response.data);
      }
      // dispatch({ type: "REQUEST_FAILURE", payload: error.message });
    });
};
