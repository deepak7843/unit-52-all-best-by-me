// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Pages/MainRoutes';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
             <Navbar/>

            <MainRoutes />
{/* <Signup/> */}
    </div>
  );
}

export default App;
