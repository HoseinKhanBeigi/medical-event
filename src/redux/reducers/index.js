import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Posts from "./Posts";

const reducers = {
  Posts
};

export default history =>
  combineReducers({ router: connectRouter(history), ...reducers });
