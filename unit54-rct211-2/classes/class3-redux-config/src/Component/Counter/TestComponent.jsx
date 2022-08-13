import { shallowEqual, useSelector } from "react-redux";

const TestComponent = () => {
  // const todos = useSelector((store) => store);
  // const todos = useSelector((store) => store.todos);
  const todos = useSelector((store) => store.todos, shallowEqual);
  // console.log("todos--", todos);

  console.log("Rendering test component", todos);
  return <div>Test Component {todos?.length ? "true" : "false"}</div>;
};

export default TestComponent;

// ===
