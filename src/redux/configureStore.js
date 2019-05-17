import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import axios from "axios";

import createRootReducer from "./reducers";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Export this for unit testing more easily
/* istanbul ignore next */

export default (history: Object, initialState: Object = {}) => {
  const vanillaPromise = store => next => action => {
    const fetchUsers = (URL = API_URL) => async (dispatch: Dispatch) => {
      dispatch({ type: "USERS_REQUESTING" });

      try {
        const { data } = await axios.get(URL);
        dispatch({ type: "USERS_SUCCESS", data });
      } catch (err) {
        dispatch({ type: "USERS_FAILURE", err: err.message });
      }
    };
  };

  const middlewares = [routerMiddleware(history), thunk, vanillaPromise];

  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(
    createRootReducer(history),
    initialState,
    enhancers
  );

  console.log(store.dispatch, "action");

  return store;
};
