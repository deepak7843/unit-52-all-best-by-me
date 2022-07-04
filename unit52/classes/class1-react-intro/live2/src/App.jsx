import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Answer from './components/Answer';

function App() {

   let info = [ 
     {name: "ritesh" , place: "india",  
     infox: {
       a:1,
       b:2
     }  }  ,
     {name: "aman" , place: "dubai"}  ,
     {name: "muk" , place: "patna"}  ,
     {name: "sonu" , place: "agra"}  ,
     {name: "pooj" , place: "kan"}  ,
    
  ]

return (
  <div className="App">

    <Hello/>
       {/* <Hello>      </Hello> */}
 
  <h1> New: 1 </h1>
  {  info.map((user ) => ( 
      <div>
        <Answer  {...user} />
      </div>
  ) )


  }



    {/* <Answer {...info[0]} />
    <Answer {...info[1]} />
    <Answer {...info[2]} />
    <Answer {...info[3]} />
    <Answer {...info[4]} /> */}

    </div>


)



}

export default App;





// return (
//   <div className="App">

//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />

//       {/* <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p> */}

//             <Hello>      </Hello>

//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>


//   </div>
// );