import React, {useEffect} from "react";
import ReactGA from 'react-ga';

const PAGE_TITLE = 'Ian Babington | Projects';
const TITLE = 'Projects';

function Projects() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/pageNotFound');
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
        </div>
    );
}

export default Projects;