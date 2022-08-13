import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children, store }) => {
  const { dispatch, getState } = store;
  const value = { dispatch, getState };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
