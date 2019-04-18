import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import createRootReducer from "./reducers";

export default (history: Object, initialState: Object = {}) => {
  const middlewares = [routerMiddleware(history), thunk];

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

  return store;
};
