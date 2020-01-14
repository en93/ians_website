import React, {useEffect} from "react";
import Logo from '../../logo/logo';

const PAGE_TITLE = 'Ian Babington | Home';

function Home() {
    useEffect(() => {
        document.title = PAGE_TITLE;
    });
    return <Logo case="Full-page-message"/>;
}

export default Home; 
