// import reducer from "./reducer";
// import { createStore } from "redux";
// // import { incrementCounter, decrementCounter } from "./action"


// // ***********************
// // const createStore = (reducer, initialState) => {
// //   const store = {};

// //   store.state = initialState;
// // console.log("store----", store);

// //     store.getState = () => store.state;

// //     store.dispatch = (action) => {
// //       store.state = reducer(store.state, action);
// //     };

// //     // console.log(store);
// //     console.log("store in last----", store);

    
// //   return store;
// // };
// // ***********************


// const store = createStore(reducer, { counter: 0, todos: [] });
// // const store = createStore(reducer, { counter: 0 });


// // const store = (reducer, { counter: 0 });
// // console.log("store--" , store);


// // const store = (reducer, { counter: 0 });
// // console.log("store--" , store);


// // export { store };
// export default store



// ********************************************************************************************************************************************************************************************************************************************************


import { legacy_createStore } from "redux";
// import { Reducer } from "react";

import reducer from "./reducer"

const store = legacy_createStore(reducer)

export {store}