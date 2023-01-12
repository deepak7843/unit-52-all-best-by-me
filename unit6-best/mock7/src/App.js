import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Countries from "./Components/Countries";
// import FilterSort from "./Components/FilterSort";
// import ServerModal from "./Components/Modal";

function App() {
  
  const [theme, setTheme]= useState(true)

  function handleTheme() {
    setTheme(!theme)
  }

  return (
    // <div className="App">
    <div style={{ backgroundColor: theme ? `aqua`: `blue` }  }>
      <div className="theme"> 
<Button onClick={handleTheme}  variant="outlined" width="500px" size="larg" className="themebtn" >
  {theme? "Light" : "Dark" }
  
</Button>
</div>

{/* <ServerModal/> */}

      {/* <h1>mock7</h1> */}

      {/* <FilterSort /> */}
   
      <Countries />
    </div>
  );
}

export default App;
