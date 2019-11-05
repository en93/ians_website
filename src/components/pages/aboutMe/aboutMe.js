import React from "react";
import './aboutMe.css'

const headline = "About me"

const intro = "In Agile teams at the Ministry of Social Development, I've built client facing websites, back end Client Management Systems and Deployment Pipelines in support of large Government projects."

const tech = "This was achieved using tech including Java, Javascipt and Python supported by both relational and NoSQL databases";

const uni = "Studying Honours Computer Science and Information Systems at the University of Auckland, taught me technical and business skills required for modern software development. I also conducted original research into designing digital exercise games";

const bio = () => { return(
    <div className="about">
        <h1>{headline}</h1>
        <p>{intro}</p>
        <p>{tech}</p>
        <p>{uni}</p>
    </div>
)};

export default bio;