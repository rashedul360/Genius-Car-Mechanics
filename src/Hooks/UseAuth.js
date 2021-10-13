import { useContext } from "react";
import { AuthContxt } from "../Pages/Context/authProvider";

const UseAuth = () => {
  return useContext(AuthContxt);
};

export default UseAuth;
