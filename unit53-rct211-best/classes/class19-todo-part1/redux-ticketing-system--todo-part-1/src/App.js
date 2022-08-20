import { Container } from "@chakra-ui/react";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    // <h1>class19</h1>

    // <div className="App">

    <Container
      style={{
        border: "5px solid black",
        marginTop: "25px",
        marginBottom: "25px",
      }}
      minWidth={"6xl"}
    >
      <MainRoutes />
    </Container>

    // </div>
  );
}

export default App;
