import React from "react";
import "./home.css";

const home = () => {
  const firstName = "Ian";
  const lastName = " Babington";
  const subtitle = "Full Stack Developer";

  return (
    <div className="homeDisplay">
      <h1>
        {firstName}<br/>{lastName}
      </h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default home;
