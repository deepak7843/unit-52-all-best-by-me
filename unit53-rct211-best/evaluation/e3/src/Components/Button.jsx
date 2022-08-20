// export const Button = ({ colorScheme, variant, size }) => {
//   return <button></button>;
// };



/////////******************   self ***********************************************************************************************************************************************************************************************



import "./Button.css";


export const Button = ({ colorScheme, variant, size }) => {
  return (
    <button className={`btn ${colorScheme || "white"} ${variant || "solid"}  ${size || "md"}`}>
      Button
    </button>
  );
};
