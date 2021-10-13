import React from "react";
import { useParams } from "react-router";

const Inforemation = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>information for {slug}</h1>
    </div>
  );
};

export default Inforemation;
