import { Box, Heading, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "./Keyboard.css";

const Vir_Keyboard = () => {
  const [word, setword] = useState({});
  const [keyboard_layout, setkeyboard_layout] = useState("default");
  const [enteredInput, setenteredInput] = useState("default");
  const keyboard = useRef();

  localStorage.setItem("word", word.entered)


  // console.log("word--",word)
  const take_input = (enteredInput) => {
    return word[enteredInput] || "";
  };

  const onInput = (word) => {
    setword({ ...word });
    // console.log("word changed", word);
  };

  const handleInputChange = (event) => {
    const typedInput = event.target.value;

    setword({
      ...word,
      [enteredInput]: typedInput,
    });

    keyboard.current.setInput(typedInput);
  };



  const press_shift = () => {
    const newkeyboard_layout =
      keyboard_layout === "default" ? "shift" : "default";
    setkeyboard_layout(newkeyboard_layout);
  };

  const press_key = (key) => {
    // console.log("key pressed", key);

    if (key === "{shift}" || key === "{lock}") {
      press_shift();
    }
  };



  return (
    <Box>
      <Input marginBottom={"10px"}
        // display={"none"}
        onFocus={() => setenteredInput("entered")}
        placeholder={"type the random word"}
        value={take_input("entered")}
        onChange={handleInputChange}
      />

<Heading marginBottom={"10px"} className="result"> Typed Word is: {word.entered} </Heading>

      <hr />
      <hr />
      <hr />
      <Keyboard
        inputName={enteredInput}
        layoutName={keyboard_layout}
        className="key"
        onChangeAll={onInput}
        onKeyPress={press_key}
      />
    </Box>
  );
};

export default Vir_Keyboard;
