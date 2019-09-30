import React from "react";

const headline = "All about making the complex challenges of development simple"
const uni = "I  completed a double major BSc, with Information Systems and Computer Science Honours, " 
    + "which gave me the technical and business skills to manage modern Software Development. I " 
    + "completed original research in the area of multiplayer, exercise video games.";
const work = "Working in Agile teams I have developed Javascript (React and Ember) front-end sites and " 
    + "Java backed Client Managment Systems in support of Government projects";

const bio = () => { return(
    <div>
        <h2>{headline}</h2>
        <p>{uni}</p>
        <p>{work}</p>
    </div>
)};

export default bio;