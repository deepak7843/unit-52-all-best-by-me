// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// import { Counter } from "./Component/Counter";
import Counter from "./Containers/Counter";
import TestComponent from "./Containers/TestComponent";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h2>class3-redux-config</h2> */}
      <h1>class3-redux-config</h1>
      <Counter />
      <TestComponent />
      
    </div>
  );
}
