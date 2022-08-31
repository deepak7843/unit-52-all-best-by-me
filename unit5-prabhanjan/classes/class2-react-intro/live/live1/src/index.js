// import {sum, mult} from "./calc";

import React from "react"
import ReactDOM from "react-dom"


import "./index.css"


// console.log(sum(1800,35));

// console.log(mult(2,30)) ;


ReactDOM.render(
    <div>
        {/* <h1 className="redtext" > hello react and javascript </h1> {""}  */}

        <h1 className="redtext" > hello react and javascript </h1>

        {/* <table border="2" >
            <tr>
                <td> 1 </td>
                <td> name </td>
            </tr>
        </table> */}

        <img src="https://d33wubrfki0l68.cloudfront.net/d74da08f08b4a17c368b58d36ee23c368b4a6819/fff62/img/homepage/phones.png"
            height="300px"
            width="200px"
        />

    </div>,  // what--JSX

    document.getElementById("root")  // where
)