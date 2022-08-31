// import logo from './logo.svg';
import './App.css';


function App() {
  const food = "pizza roti"
  const age = 19
  const skills = ["mern", "node", "dsa"]
  return (
    <div className="App"> you eat {food}, you {age} years   old


      {/* **************************** */}
      <div> you are {age > 18 ? "Eligible" : "not eligible"} for license </div>

      {/* ************** */}

      <div>
        {/* your skills: */}
        {/* {for() {}}    // for loop is a declaration/ statement ,, it not return anything   */}

        {/* {skills} */}
        *******************************1st*****
        {/* <ul>

          {skills.map((e) => {
            return <p className=' redtext'> skill: {e} </p>
          })}

        </ul> */}
        *************************************

        {skills.map((e) => {
          return <Skill skill={e} key="value" age={12} name="test" />

          // return <Skill age="1" name= "test" />
        })}



      </div>

      <Skill skill="vscode" />

      {/* console.log("********dsd*********"); */}
      {/* <Skill/>
       <Skill/>
       <Skill/> */}

      {/* hello world */}
      {/* <button> test 45</button>
       <input/>
      <img src="" alt="missing"/> */}






      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    </div>
  );
}

// line 55 to 57 , we creating component*
//*** function Skill reusable piece of code,, we can use it anywhere********** */


// function Skill() {
//   return <p className=' redtext'> skill: Windows </p>
// }
// **********************************
console.log("***********last******");

// function Skill( {skill}) {
//   return <p className=' redtext'> skill: {skill} </p>
// }

// *******************************

function Skill(props) {
  console.log("Skills props", props);
  return <p className=' redtext'> skill: {props.skill} </p>
}  // @2-17-39

export default App;
