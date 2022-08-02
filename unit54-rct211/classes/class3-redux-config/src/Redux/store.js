/////////***********************************************************************************************************************************************************************************************************************

// import { legacy_createStore } from "redux";
// // import { Reducer } from "react";

// import reducer from "./reducer"

// const store = legacy_createStore(reducer)

// export {store}

/////////*********************************  ***********************************************************************************************************************************************************************************************************************

// import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import { reducer as AppReducer } from "../Redux/AppReducer/reducer";
// import { reducer as AuthReducer } from "../Redux/AuthReducer/reducer";

// const rootReducer = combineReducers({ AppReducer, AuthReducer });

// const store = legacy_createStore(rootReducer);

// export { store };

/////////*********************************  ***********************************************************************************************************************************************************************************************************************

import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { reducer as AppReducer } from "../Redux/AppReducer/reducer";
import { reducer as AuthReducer } from "../Redux/AuthReducer/reducer";

const rootReducer = combineReducers({ AppReducer, AuthReducer });

//store
//next -> go to the next middleware if available, else go to the reducer function
// action -> action object that we get from the dispatch method

// Keep track of the api calls made
// analytics
const logger1 = (store) => (next) => (action) => {
  console.log("Dispatching action 1 - a", action);
  const val = next(action);
  console.log("After val 1 - b", val);
  return val;
};

const logger2 = (store) => (next) => (action) => {
  console.log("Dispatching action 2 - a", action);
  const val = next(action);
  console.log("After val 2 - b", val);
  return val;
};

//compose -> to bring together
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger1, logger2))
);

export { store };
