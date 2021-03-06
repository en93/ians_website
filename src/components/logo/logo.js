import React from "react";

const firstName = "Ian";
const lastName = " Babington";
const subtitle = "Software Developer";

const logo = props => {
    return (
        <div className={props.case}>
          <h1>
            {firstName}<br/>{lastName}
          </h1>
          <h2>{subtitle}</h2>
      </div>
    )
};

export default logo;