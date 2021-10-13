import userEvent from "@testing-library/user-event";
import React from "react";
import UseAuth from "../Hooks/UseAuth";

const Dashboard = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <h4>{user.displayName}</h4>
      <h4>{user.email}</h4>
      <img src={user.photoURL} alt="" />
    </div>
  );
};

export default Dashboard;
