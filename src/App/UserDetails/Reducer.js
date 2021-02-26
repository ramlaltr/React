import Types from "./Types";

const initialState = {
  isRequesting: false,
  peopleList: {},
  results: {},
  resultsList: [],
  exception: {},
  homeWorldData: {}
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PEOPLE_REQ:
      return {
        ...state,
        isRequesting: action.isRequesting,
        exception: initialState.exception
      };
    case Types.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        peopleList: action.results.peopleList,
        results: action.results.results,
        resultsList: action.results.resultsList,
        isRequesting: initialState.isRequesting,
        exception: initialState.exception
      };
    case Types.GET_PEOPLE_FAIL:
      return {
        ...state,
        exception: action.exception,
        isRequesting: initialState.isRequesting
      };
    case Types.UPDATE_ROW:
      return {
        ...state,
        row: action.row
      };
    case Types.GET_HOMEWORLD_REQ:
      return {
        ...state,
        isRequesting: action.isRequesting
      };
    case Types.GET_HOMEWORLD_SUCCESS:
      return {
        ...state,
        homeWorldData: action.results
      };
    case Types.CLEAR_USERDETAIL_STORE:
      return initialState;
    default:
      return state;
  }
};

export { initialState };

export default userDetailsReducer;
