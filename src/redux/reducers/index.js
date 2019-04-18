import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import todos from "./todos";

const reducers = {
  todos
};

export default history =>
  combineReducers({ router: connectRouter(history), ...reducers });
