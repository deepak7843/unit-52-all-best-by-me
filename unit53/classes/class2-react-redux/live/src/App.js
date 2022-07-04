import "./App.css";
import { Counter } from "./components/Counter/Counter";
import Todos from "./components/Todo/Todos";
// import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <h1>class2-react-redux</h1>
      <Counter/>
      <Todos/>
    </div>
  );
}

export default App;
