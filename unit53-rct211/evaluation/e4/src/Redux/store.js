// NOTE: use this store variable to create a store.
// export const store = {};

// // NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
// if (window.Cypress) {
//   window.store = store;
// }


/////////*****************************************************************************************************************************************************************************************************************




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


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
