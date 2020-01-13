import React from "react";
import ReactGA from 'react-ga';

const noPageFound = () => {
    ReactGA.pageview('/pageNotFound');
    return (
        <h1 className="Full-page-message">404<br/>Page not found!</h1>
    );
}

export default noPageFound;