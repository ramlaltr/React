import Types from "./Types";
import userList from "./user.json";
import _ from "lodash";

const validateUserReq = (isRequesting) => ({
  type: Types.VALIDATE_USER_REQ,
  isRequesting
});

const validateUserSuccess = (results) => ({
  type: Types.VALIDATE_USER_SUCCESS,
  results
});

const validateUserFail = (exception) => ({
  type: Types.VALIDATE_USER_FAIL,
  exception
});

const validateUser = (userName, password, historyPush) => (
  dispatch,
  getState
) => {
  dispatch(validateUserReq(true));
  return fetch("user.json", {
    method: "GET",
    cache: "default"
  })
    .then((json) => {
      let user = _.find(userList, { userName });
      if (user && user.userName === userName && user.password === password) {
        dispatch(validateUserSuccess(user));
        historyPush("/userDetails");
        //historyPush({ from: { pathname: "/userdetails" } });
      }
    })
    .catch((ex) => dispatch(validateUserFail(ex)));
};

const clearLoginStore = () => ({
  type: Types.CLEAR_LOGIN_STORE
});

export {
  validateUserReq,
  validateUserSuccess,
  validateUserFail,
  validateUser,
  clearLoginStore
};
