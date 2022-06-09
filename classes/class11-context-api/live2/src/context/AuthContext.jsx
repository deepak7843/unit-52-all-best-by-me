import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const login = (username, password) => {
      console.log(username,password );

    if ((username, password)) {
        // call api to get access token
      setIsAuthorized(true);
    }
  };

  const logout = () => {
      // call api to get inform that session is over
    setIsAuthorized(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
