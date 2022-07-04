import { createContext } from 'react'

export const ReduxContext= createContext()

// import React from 'react'


const ReduxContextProvider = ({ children, store }) => {
    const { dispatch, getState } = store;
    const value = { dispatch, getState };
  
    return <ReduxContext.Provider value={value}>
    {children}   </ReduxContext.Provider>;
  };
  
  export { ReduxContextProvider };
  




// ****************************************************************************************************************

// const ReduxContext Provider = () => {
//   return (
//     <div>ReduxContextProvider</div>
//   )
// }

// export default ReduxContextProvider