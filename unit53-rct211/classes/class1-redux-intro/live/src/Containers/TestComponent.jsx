import { useSelector } from "react-redux";

const TestComponent = () => {
  const todos = useSelector((store) => store);
  console.log("Rendering test component", todos);
  return <div>Test Component {todos?.length ? "true" : "false"}</div>;
};

export default TestComponent;

// ===
