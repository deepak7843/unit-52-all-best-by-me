import { legacy_createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const customMiddleware = store=> next => action =>{
//     console.log("action--", action);
//     return next(action)
// }

// **********************************************************************

// const customMiddleware =
//   (store) =>
//   (next) =>
//   (action) => {
//     console.log("typeof action--", typeof action);
//  if (typeof action === "function"){
//           // getTodos(dispatch);

//    return  action(store.dispatch)
//  }
//     return next(action);
//   };

// **********************************************************************

// const customMiddleware =
//   ({ dispatch }) =>
//   (next) =>
//   (action) => {
//     console.log("typeof action--", typeof action);
//     if (typeof action === "function") {
//       // getTodos(dispatch);

//       return action(dispatch);
//     } else if (typeof action === "object") {
//       return next(action);
//     }
//   };

const store = legacy_createStore(
  reducer,
//   composeEnhancers(applyMiddleware(customMiddleware))
  composeEnhancers(applyMiddleware(thunk))
);

// const store= legacy_createStore(reducer);

export { store };
