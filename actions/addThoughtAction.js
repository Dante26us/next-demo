import axios from "axios";

export const addthought = (title, description, cb) => (dispatch) => {
  // console.log(title, description);
  dispatch({ type: "START_LOADING" });
  axios({
    method: "POST",
    url: "/api/userThoughts/userThoughts",
    data: {
      title: title,
      description: description,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization:localStorage.getItem('AuthToken'),
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
      // dispatch({ type: "REQUEST_FAILURE", payload: error.message });
    });
};
