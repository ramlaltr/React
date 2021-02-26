import Types from "./Types";

const initialState = {
  isRequesting: false,
  user: {},
  exception: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.VALIDATE_USER_REQ:
      return {
        ...state,
        isRequesting: action.isRequesting,
        exception: initialState.exception
      };
    case Types.VALIDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.results,
        isRequesting: initialState.isRequesting,
        exception: initialState.exception
      };
    case Types.VALIDATE_USER_FAIL:
      return {
        ...state,
        exception: action.exception,
        isRequesting: initialState.isRequesting
      };
    case Types.CLEAR_LOGIN_STORE:
      return initialState;
    default:
      return state;
  }
};

export { initialState };

export default loginReducer;
