import React, {useEffect} from "react";
import ReactGA from 'react-ga';

const PAGE_TITLE = 'Ian Babington | Projects';

function ComingSoon() {
    useEffect(() => {
        document.title = PAGE_TITLE;
    });
    ReactGA.pageview('/projects');
    return <h1 className="Full-page-message">Coming soon!</h1>;
}

export default ComingSoon;