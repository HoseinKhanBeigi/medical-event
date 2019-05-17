import _ from "lodash";
const initialState = {
  readyStatus: "USERS_INVALID",
  err: null,
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USERS_REQUESTING":
      return _.assign({}, state, {
        readyStatus: "USERS_REQUESTING"
      });
    case "USERS_SUCCESS":
      return _.assign({}, state, {
        readyStatus: "USERS_SUCCESS",
        list: action.data
      });
    case "USERS_FAILURE":
      return _.assign({}, state, {
        readyStatus: "USERS_FAILURE",
        err: action.err
      });
    default:
      return state;
  }
};
