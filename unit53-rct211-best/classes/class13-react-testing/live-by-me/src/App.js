import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      {/* <div>Click Me</div> */}

      <h3>Current Theme is {theme}</h3>

      {/* <Button colorScheme={"green"} > */}
        
      <Button
        // onClick={() => {
        //   setTheme(theme === "light" ? "dark" : "light");
        // }}

        clickHandler={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}

        
      >
        {/* Click Me{" "} */}
        Change Theme
      </Button>
    </div>
  );
}

export default App;
