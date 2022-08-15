// import reducer from "./reducer";
// import { createStore } from "redux";

// // const createStore = (reducer, initialState) => {
// //   const store = {};

// //   store.state = initialState;

// //   store.getState = () => store.state;

// //   store.dispatch = (action) => {
// //     store.state = reducer(store.state, action);
// //   };

// //   return store;
// // };

// const store = createStore(reducer, { counter: 0, todos: [] });

// export { store };




//////////  *********   0 to 1-35-18 *************************************************************************************************************************// //////********************************************************************************************************************************************************************************************************************************************************


// import reducer from "./reducer";
// import { createStore } from "redux";



// const store = createStore(reducer);
// // console.log("store--", store);

// export { store };





/////////*********************************  1-35-18  ke bad ***********************************************************************************************************************************************************************************************************************



import { legacy_createStore } from "redux";
// import reducer from "./reducer"

import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import reducer from "./App/reducer";
import { reducer as AuthReducer } from "../Redux/Auth/reducer";

const rootReducer = combineReducers({ mainApp: reducer, AuthReducer });


/////************************************************* */
// const logger1 = (store) => (next) => (action) => {
//   //// next -----> it is next middleware
//   // console.log("next-------", next);

//   // console.log("Dispatching action 1 - a-------", action);
//   const val = next(action);
//   // console.log("After return 1 - b", val);
//   return val;
// };

// const logger2 = (store) => (next) => (action) => {
//   // console.log("Dispatching action 2 - c", action);
//   const val = next(action);
//   // console.log("After return 2 - d", val);
//   return val;
// };
/////************************************************* */


/////********************** */
// // const store = legacy_createStore(reducer)

// // const store = createStore(reducer)
/////********************** */


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /////  1-44-48   1-45-3 
  ///// line 84 window.__REDUX_DEVTOOLS_EXTENSION__&&  .......     ------>>>>> for using redux dev tool in Browser inspect
  )


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// //to bring together ->

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(logger1, logger2))
//   // applyMiddleware(logger1, logger2)
// );

export { store };
