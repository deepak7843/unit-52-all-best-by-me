// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes";
import * as types from "./action";
import { loadData, saveData } from "../../utils/localStorage";

const initialState = {
  // counter: 0,
  counter: loadData("counter") || 0,
  // counter: 0,
  todos: { id: 1, title: "Buy Milk", status: false }
};

// console.log("...state.todos---", ...initialState.todos);

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // case INCREMENT_COUNTER:
    case types.INCREMENT_COUNTER:
      let newCount = state.counter + payload;
      saveData("counter", newCount);
      return {
        ...state,
        // counter: state.counter + payload,
        counter: newCount,
        todos: { ...state.todos }
      };

    // case DECREMENT_COUNTER:
    case types.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};

export default reducer;
