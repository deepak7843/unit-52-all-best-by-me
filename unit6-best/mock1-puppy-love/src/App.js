// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Puppy from "./Pages/Puppy/Puppy";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Puppy" element={<Puppy/>}></Route>
        <Route path="/Search" element={<Search/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
