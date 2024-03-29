////Reducer
const reducer = (state, action) => {
  return state;
};

////Store

const createStore = (reducer, initialState) => {
  const store = {};

  store.state = initialState;

  store.getState = () => store.state;
   
  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
  };

  return store;
};
const store = createStore(reducer, { counter: 0 });
console.log("store--", store);
console.log("store.getState()---", store.getState());
