import { Box, Heading, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "./Keyboard.css";

const Vir_Keyboard = () => {
  const [letter, setletter] = useState({});
//  const [count]= useState(0)
//  const count = 0

 const Keyboard = {
    
  elements: {
      main: null,
      keysContainer: null,
      keys: []
  },

  eventHandlers: {
      oninput: null,
      onclose: null
  },

  properties: {
      value: "",
      capsLock: false
  },

  init() {
      // Create main elements
      this.elements.main = document.createElement("div");
      this.elements.keysContainer = document.createElement("div");

      // Setup main elements
      this.elements.main.classList.add("keyboard", "keyboard--hidden");
      this.elements.keysContainer.classList.add("keyboard__keys");
      this.elements.keysContainer.appendChild(this._createKeys());

      this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

      // Add to DOM
      this.elements.main.appendChild(this.elements.keysContainer);
      document.body.appendChild(this.elements.main);

      // Automatically use keyboard for elements with .use-keyboard-input
      document.querySelectorAll(".use-keyboard-input").forEach(element => {
          element.addEventListener("focus", () => {
              this.open(element.value, currentValue => {
                  element.value = currentValue;
              });
          });
      });
  },

  _createKeys() {
      const fragment = document.createDocumentFragment();
      const keyLayout = [
          "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "back",
          "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
          "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
          "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
          "space"
      ];

      // Creates HTML for an icon
      const createIconHTML = (icon_name) => {
          return `<i class="material-icons">${icon_name}</i>`;
      };

      keyLayout.forEach(key => {
          const keyElement = document.createElement("button");
          const insertLineBreak = ["back", "p", "enter", "?"].indexOf(key) !== -1;

          // Add attributes/classes
          keyElement.setAttribute("type", "button");
          keyElement.classList.add("keyboard__key");

          switch (key) {
          


              case "caps":
                  keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                  keyElement.innerHTML = createIconHTML("keyboard_capslock");

                  keyElement.addEventListener("click", () => {
                      this._toggleCapsLock();
                      keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                  });

                  break;



         

              default:
                  keyElement.textContent = key.toLowerCase();

                  keyElement.addEventListener("click", () => {
                      this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                      this._triggerEvent("oninput");
                  });

                  break;
          }

          fragment.appendChild(keyElement);

          if (insertLineBreak) {
              fragment.appendChild(document.createElement("br"));
          }
      });

      return fragment;
  },

  _triggerEvent(handlerName) {
      if (typeof this.eventHandlers[handlerName] == "function") {
          this.eventHandlers[handlerName](this.properties.value);
      }
  },

  _toggleCapsLock() {
      this.properties.capsLock = !this.properties.capsLock;

      for (const key of this.elements.keys) {
          if (key.childElementCount === 0) {
              key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
          }
      }
  },

  open(initialValue, oninput, onclose) {
      this.properties.value = initialValue || "";
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
      this.properties.value = "";
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.add("keyboard--hidden");
  }
};


  return (

    <div>
       
    <textarea className="use-keyboard-input" style="position: absolute; top: 130px; right: 30px; width: 300px;"></textarea>
    </div>
  );
};

export default Vir_Keyboard;
