import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes";

const initialState = {
  counter: 0,
  todos: { id: 1, title: "Buy Milk", status: false }
};

const reducer = (state = initialState, action) => {
  console.log("action--", action);

  const { type, payload } = action;

  switch (type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        
        counter: state.counter + payload
      };

    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - payload };

    default:
      return state;
  }
};

export default reducer;
