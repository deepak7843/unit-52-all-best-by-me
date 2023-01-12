import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    // <div className="App">
     <div>
      {/* <h1>mock--8</h1> */}
       <Navbar/>
       
         {/* <strong className="home" > Welcome to Masai Hotel </strong> */}

         {/* <div className="home"  >  
         <strong > Welcome to Masai Hotel </strong>
         </div> */}

       <MainRoutes/>

    </div>
  );
}

export default App;
