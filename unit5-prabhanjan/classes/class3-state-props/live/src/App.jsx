import { useState } from 'react';
import './App.css';
import { Category } from './components/category';





function App() {
  const [counter, setCounter] = useState(2)

//  const handleAdd = () => {
//     if(counter>=10 ){
//       return
//     }

//     setCounter(counter + 1)
//   }

// ****************************************

//   const handleSub = () => {
//     if(counter <=1 ){
//       return
//     }

//     setCounter(counter - 1)
//   }


const handleChange = (value) => {
  // condition
  if(counter >= 9 ){
    alert ("reached to max")
    return 
  }

  setCounter( counter + value)
}

 if(counter <=1 ){
          return  "reached min"
        }
        
        else if( counter>=10  ){
           return <h4>reached max</h4>
        }


  return (
    <div className="App">
    

    <h3> Counter : {counter} </h3>

    {/* <button  onClick={handleAdd} > Add 1 </button> */}
    <button  onClick={ () =>  handleChange(1)} > Add 1 </button>

    {/* <button  onClick={handleSub} > sub 1 </button> */}
    <button  onClick={ () =>  handleChange(-1)} > Sub 1 </button>

    <div> Number is {counter % 2 === 0 ? "Even" : "odd"} </div>

    </div>
  );
}

export default App;





// ***********4th**************##########*****************




// function App() {
//   const [counter, setCounter] = useState(0)

//  const handleAdd = () => {
//     if(counter>=10 ){
//       return
//     }

//     setCounter(counter + 1)
//   }

//   const handleSub = () => {
//     if(counter <=1 ){
//       return
//     }

//     setCounter(counter - 1)
//   }


//   return (
//     <div className="App">
    

//     <h3> Counter : {counter} </h3>

//     <button  onClick={handleAdd} > Add 1 </button>

//     <button  onClick={handleSub} > sub 1 </button>

//     </div>
//   );
// }

// export default App;





// ***********3rd***************##########*****************



// function App() {
//   const [counter, setCounter] = useState(0)
//   //  let counter = 0


//    return (
//      <div className='App' > 

//      <h3> Counter : {counter} </h3>

//      <button 
//      onClick={ () => {
//         // counter++
//         // console.log("counter changed"  , counter);


//         // ******
//         if(counter>=10 ){
//           return
//         }

//         setCounter(counter + 1)
//         // ******


//        }  } >   Add 1
    
   
//      </button>

//      <button 
//      onClick={ () => {
  
//       if(counter <= 0 ){
//         return
//       }
//         setCounter(counter - 1)

//        }  } >   sub 1
   
//      </button>

//      </div>
//    )

// }

// export default App;










// ***********2nd***************##########*****************




// function App() {
//      const navbar = [
//         { image: "https://rukminim2.flixcart.com/flap/128/128/image/3c0ed3a475254040.png?q=100 " , title: "Mobile",},

//         {image: "https://rukminim2.flixcart.com/flap/128/128/image/176346e6dd7d4c19.png?q=100" , title: "Fashion", } ,
//      ];

//   return (

//          <div className='nav' >
          
//           { navbar.map( (el) => (

//             <Category image={el.image} label= {el.title}  /> ) 

//           ) }

        
//         </div> 

//   )

// }

// export default App;













// *************1st*************##########*****************



// function App() {
//   const arr= [1,2,3,4]

//   return (
//    <div className="App">
//       {/* <h1 > test </h1> */}

//       {/* <li className='list_style'> Test </li> */}

//       {arr.map( (el) => (

//         <li className={ ` ${el % 2 === 0 ? "circle_List" : "squareList" }` } > {el} </li>
//       )

//       )

//       }                                                                               
//     </div>
//   )
// }

// export default App;
