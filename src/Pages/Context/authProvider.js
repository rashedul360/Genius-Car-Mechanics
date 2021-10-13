import React, { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";

export const AuthContxt = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContxt.Provider value={allContext}>{children}</AuthContxt.Provider>
  );
};

export default AuthProvider;
