import React from "react";
import { useState } from "react";

import PropTypes from "prop-types";
import { useRef } from "react";
import PinItem from "./PinItem";

const Pin = ({ length, setOtpHandler }) => {
  //   const inputRef = useRef();
  const inputRef = useRef([]);

  const [inputBoxLen] = useState(new Array(length).fill(1));

  //   console.log("inputRef.current--", inputRef.current);
  // console.log("inputRef--", inputRef);

  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(length).fill("") //["","","",""]
  );

  //   const handleChange = (e, index) => {
  //     inputRef.current[index + 1].focus();
  //   };

  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;

    setInputBoxValue(inputBoxValue);

    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    // console.log(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };

  const handleBackspace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };


  const handlePaste = (e) => { 
    console.log("e-----", e);
    console.log("e.clipboardData.getData-----", e.clipboardData.getData("text"));
     
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);

      console.log("data--", data);

    data.forEach((value, index) => {
      inputBoxValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };



  return (
    <div
      onPaste={handlePaste}
      style={{ 
        
        border: "1px solid blue",
         display: "flex", justifyContent: "center" }}
    >

      {/* {new Array(length).fill(1).map((item, index) => {
        return <input key={index} />;
      })} */}



      {/* {inputBoxLen.map((item, index) => { */}
      {inputBoxLen.map((_, index) => {

        return (
          ///////////////******************************************** */
          //   <input
          //     //  ref={inputRef}
          //     ref={(element) => {
          //       console.log("element--", element);
          //       inputRef.current[index] = element;
          //     }}
          //     key={index}
          //     maxLength={1}
          //     changeHandler={(e) => handleChange(e , index)}
          //   />

          ///////////////******************************************** */

          <PinItem
            key={index}
            onChange={(e) => handleChange(e, index)}
            onBackSpace={(e) => handleBackspace(e, index)}
            ref={(element) => {
            //   console.log("element--", element);
              inputRef.current[index] = element;
            }}
          />
        );
      })}
    </div>
  );
};

//PropTypes -> way to limit the types of props that you get in a react component

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  changeHandler: PropTypes.func,
};

//create input boxes based on the length;
//create the focus behaviour

//Event bubbling /  Event Propagation
/////1-13-50    


export default Pin;
