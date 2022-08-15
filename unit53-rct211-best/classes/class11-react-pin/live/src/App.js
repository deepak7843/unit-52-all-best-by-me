import { useState } from "react";
import "./App.css";
import Pin from "./Components/Pin";

function App() {
  const [otp, setOtp] = useState("");

  return (
    <div className="App">
      <h1>class11</h1>
      <Pin
        length={4}
        setOtpHandler={(value) => {
          setOtp(value);
        }}
      />
      <h4>OTV Value is : {otp}</h4>{" "}
    </div>
  );
}

export default App;
