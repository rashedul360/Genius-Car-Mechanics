import React from "react";
import UseAuth from "../../Hooks/UseAuth";

const LogIn = () => {
  const { googleSignIN } = UseAuth();
  return (
    <div>
      <h1>login</h1>
      <button className="btb btn-success" onClick={googleSignIN}>
        login
      </button>
    </div>
  );
};

export default LogIn;
