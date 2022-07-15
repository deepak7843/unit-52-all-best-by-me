// import React from "react";

// const PinItem = ({changeHandler}) => {
//   return (
//     <div>
//       <input
//         //  ref={inputRef}

//         // ref={(element) => {
//         //   console.log("element--", element);
//         //   inputRef.current[index] = element;
//         // }}
//         // key={index}
//         maxLength={1}
//         // changeHandler={(e) => handleChange(e, index)}
//       />
//     </div>
//   );
// };

// export default PinItem;

////////////  *****************    1-6-17  *************************************************************************************************************************************************************************************************

import React, { forwardRef } from "react";

const PinItem = forwardRef(({ changeHandler, onBackSpaceHandler }, ref) => {
  //   console.log(ref);
  const handleKeyUp = (e) => {
    console.log("e---", e); 
    if (e.keyCode === 8) {  ////Backspace
        // debugger;
      onBackSpaceHandler(e);
    } else {
      changeHandler(e);
    }

    //if Backspace is click , perform some action
    //else
    //call the changeHandler
  };
  return (
    <div>
      {/* <input ref={ref} maxLength={1} onChange={changeHandler} /> */}

      <input ref={ref} maxLength={1} onKeyUp={handleKeyUp} />
    </div>
  );
});

export default PinItem;
