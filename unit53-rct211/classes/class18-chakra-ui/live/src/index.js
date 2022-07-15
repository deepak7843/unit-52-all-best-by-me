import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const colors={
  primaryColor:{ 
    color1: " red",
    color2: "#E8998D",
    color3: "#FF729F",
    color4: "#D3C4D1",
    color5: "yellow",
    
  }
}

const theme = extendTheme({colors})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme} >
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
