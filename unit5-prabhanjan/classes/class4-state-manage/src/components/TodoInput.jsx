
import { useState } from "react"


// export const TodoInput = () => {

export const TodoInput = ({ getData }) => {

  const [text, setText] = useState("");

  // console.log("input:", text);

  return (
    <div>

      < input
        onChange={

          (e) => {
            // console.log(e.target);

            //  console.log(e.target.value);

            setText(e.target.value)
          }

        }


        type="text"
        placeholder="Enter Todo"

      />

      {/* <button >

        Add todo </button> */}


      <button onClick={() => {
        getData(text)
      }}>

        Add todo </button>

      {/* {text} */}

    </div>

  )

}