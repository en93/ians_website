import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import HeaderCardFactory from '../../UI/HeaderCardFactory';
import SectionCard from '../../UI/SectionCard';

const PAGE_TITLE = 'Ian Babington | Transport App';
const TITLE = 'Projects';

const MOTIVATION_HEADER = 'Motivation';
const MOTIVATION_CONTENT = 'Transport is complicated. Official apps and websites tend to overload you with information. UI is often crowded, making site navigation tricky. This is due to the one size fits all approach required to support large populations, all with diverse needs and use cases. I’m here to change that. I\'m building the app that I would want to use.';

const PRODUCT_HEADER = 'The product';
const PRODUCT_CONTENT = 'I’m designing an app for people familiar with Wellington, who just need to know when the bus will arrive. With a single tap users will be able to see when services are arriving in real time. I\'m also exploring daily notifications and updates in the status bar. This is very much for the Wellingtonian on the go.';

const TECH_HEADER = 'Technology';
const TECH_CONTENT = 'I\'m building this as a native Android application. I chose this as I\'m looking to also explore new Java language features along with refresh my knowledge of the Andriod framework. React Native was also a strong contender. I would have gone for this if I was planning a web or iOS version, however web didn’t fit the use case and I require a Mac to develop to iOS. I\'m also looking at using a Realm NoSQL database to store user preferences and to store query results. Due to the temporary nature of transit data I’m not worried about requiring relational features, data constraints or locking.';

const PROGRESS_HEADER = 'Progress';
const PROGRESS_CONTENT = 'While I have the use cases ready, I’m currently working on designing the interface. I\'ve been researching UI design and applying learnings to my prototype in Adobe XD. I’m also working on reverse engineering the API from Wellington Transport as there is no public documentation as of writing.';

const makeHeader = () => {
    const headerCardBuilder = HeaderCardFactory();
    headerCardBuilder.setImage(require('../../../assets/images/androidLogo.png'));
    headerCardBuilder.setHeading('Transport App');
    headerCardBuilder.setDescription('Built for your commute');
    // headerCardBuilder.setButtonText("View on GitHub");
    // headerCardBuilder.setUrl('https://github.com/en93/Monty_Hall_Simulation');
    return headerCardBuilder.buildCard();
}

function GoWelly() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/go-welly');
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {makeHeader()}
            {SectionCard(MOTIVATION_HEADER, MOTIVATION_CONTENT)} 
            {SectionCard(PRODUCT_HEADER, PRODUCT_CONTENT)} 
            {SectionCard(TECH_HEADER, TECH_CONTENT)} 
            {SectionCard(PROGRESS_HEADER, PROGRESS_CONTENT)} 
        </div>
    );
}

export default withRouter(GoWelly);