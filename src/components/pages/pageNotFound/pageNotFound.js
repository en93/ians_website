import React, {useEffect} from "react";
import ReactGA from 'react-ga';

const PAGE_TITLE = 'Ian Babington | 404';

function NoPageFound() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/pageNotFound');
    return (
        <h1 className="Full-page-message">404<br/>Page not found!</h1>
    );
}

export default NoPageFound;