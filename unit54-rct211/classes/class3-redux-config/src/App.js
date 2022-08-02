import { useState } from "react";
import "./App.css";
import Counter from "./Component/Counter/Counter";
import { Todos } from "./Component/Todo/Todos";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
  loginFailure,
  loginRequest,
} from "./Redux/AuthReducer/action";

// import TestComponent from "./Containers/TestComponent";
// import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth= useSelector((store) => store.AuthReducer.isAuth)

  const handleLogin = () => {
    // if (email && password) {
    if (email) {
      const payload = {
        email: email,
        password,
      };
      console.log("payload--", payload);

      dispatch(loginRequest());

      axios
        .post("https://reqres.in/api/login", payload)
        .then((r) => {
          console.log("r.data--", r.data);
          return dispatch(loginSuccess(r.data));
        })
        .catch((e) => dispatch(loginFailure(e)));
    }
  };

  return (
    <div className="App">
      {/* <h2>class3-redux-config</h2> */}
      <h1>class3-redux-config</h1>
      <Counter />
      {/* <TestComponent /> */}
      <br />
<hr />
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
        />

        <button type="submit" onClick={handleLogin}>
          LOGIN
        </button>
      </div>

      { isAuth && <Todos />}
    </div>
  );
}
