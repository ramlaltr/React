import Types from "./Types";
// import peopleData from "./people.json";
import _ from "lodash";

const getPeopleReq = (isRequesting) => ({
  type: Types.GET_PEOPLE_REQ,
  isRequesting
});

const getPeopleSuccess = (results) => ({
  type: Types.GET_PEOPLE_SUCCESS,
  results
});

const getPeopleFail = (exception) => ({
  type: Types.GET_PEOPLE_FAIL,
  exception
});

const updateRow = (row) => ({
  type: Types.UPDATE_ROW,
  row
});

const getHomeWorldReq = (isRequesting) => ({
  type: Types.GET_HOMEWORLD_REQ,
  isRequesting
});

const getHomeWorldSuccess = (results) => ({
  type: Types.GET_HOMEWORLD_SUCCESS,
  results
});
const clearUserDetailStore = () => ({
  type: Types.CLEAR_USERDETAIL_STORE
});

export {
  getPeopleReq,
  getPeopleSuccess,
  getPeopleFail,
  updateRow,
  getHomeWorldReq,
  getHomeWorldSuccess,
  clearUserDetailStore
};
