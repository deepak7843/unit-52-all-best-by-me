// TODO: use this store variable to create a store.
export const store = {};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}




import { legacy_createStore } from "redux";
import { reducer as TodoReducer } from "./reducer";

const store = legacy_createStore(TodoReducer);

export {store}