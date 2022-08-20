// //Complete the custom Input component based on the props that it expects to receive

// export const Input = () => {
//   return <input />;
// };

/////////******************   self ***********************************************************************************************************************************************************************************************

//Complete the custom Input component based on the props that it expects to receive

import "./Input.css"

export const Input = ({ type="text"  , size, variant, value, onChange }) => {
  return (
    // <div  >
      <  input
      className={ `Input ${size || "md"} ${variant}` } 
      type={`${type}`}
      value={value}
      onChange={(el)=> onChange(el.target.value)}
      
      />
    // {/* </div> */}
  );
};
