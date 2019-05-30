import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import axios from "axios";

import createRootReducer from "./reducers";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export default (history: Object, initialState: Object = {}) => {
  const vanillaPromise = ({ dispatch }) => next => action => {
    const TYPE = next(action).type;
    const promis = async () => {
      try {
        const result = axios({
          method: next(action).method,
          url: next(action).url,
          data: next(action).data || {}
        });

        const { data } = await result;
        dispatch({ type: `${TYPE}_REQUESTING` });
        dispatch({ type: `${TYPE}_SUCCESS`, data });

        result.catch(err => {
          dispatch({ type: `${TYPE}_FAILURE`, err: err.message });
        });
      } catch (err) {
        //
      }
    };
    return promis();
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

  // console.log(store.dispatch, "action");

  return store;
};
