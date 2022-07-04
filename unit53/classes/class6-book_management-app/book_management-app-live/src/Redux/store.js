import { legacy_createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    reducer,
  //   composeEnhancers(applyMiddleware(customMiddleware))
    composeEnhancers(applyMiddleware(thunk))
  );


export { store };
