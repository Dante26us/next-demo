import axios from "axios";

export const signUp =
  (username, firstName, lastName, password, cb) => (dispatch) => {
    dispatch({ type: "START_LOADING" });
    axios({
      method: "POST",
      url: "/api/signUp/signUp",
      data: {
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        dispatch({ type: "STOP_LOADING" });
        if (cb) {
          cb(response.data);
        }
      })
      .catch((error) => {
        dispatch({ type: "STOP_LOADING" });
        if (cb) {
          cb(error.response.data);
        }
      });
  };
