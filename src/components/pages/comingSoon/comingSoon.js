import React from "react";
import ReactGA from 'react-ga';

const comingSoon = () => {
    ReactGA.pageview('/projects');
    return <h1 className="Full-page-message">Coming soon!</h1>;
}

export default comingSoon;