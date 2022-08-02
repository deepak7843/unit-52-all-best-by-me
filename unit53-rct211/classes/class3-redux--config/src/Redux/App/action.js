export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes";

const incrementCounter = (payload) => {
  return {
    type: INCREMENT_COUNTER,
    payload
  };
};

const decrementCounter = (payload) => {
  return {
    type: DECREMENT_COUNTER,
    payload
  };
};

export { incrementCounter, decrementCounter };
