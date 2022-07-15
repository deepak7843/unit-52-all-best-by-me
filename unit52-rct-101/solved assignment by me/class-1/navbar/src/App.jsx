import logo from './logo.svg';
import './App.css';

import Logo from './components/Logo';
import Button from './components/Button';
import Links from './components/Links';

function App() {

  let nav_ar = ["Services", "Projects" , "About" ]

  return (
    <div className="App">

      <Logo/>

      { 
       nav_ar.map((el) => {
         
         return <Links navbar_links= {el} />
      } )
         
      }

      <Button/>


    </div>
  );
}

export default App;
