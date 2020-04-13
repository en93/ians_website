import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import HeaderCardFactory from '../../UI/HeaderCardFactory';
import SectionCard from '../../UI/SectionCard';

const PAGE_TITLE = 'Ian Babington | Transport App';
const TITLE = 'Projects';

const MOTIVATION_HEADER = 'Motivation';
const MOTIVATION_CONTENT = 'Transport is complicated. Official apps and websites overload you with information and messages from crowded UI. This is due to the one size fits all approach, required for large populations with diverse needs and use cases. I’m here to build the app that I want to use every day.';

const PRODUCT_HEADER = 'The product';
const PRODUCT_CONTENT = 'I’m designing this for people familiar with Wellington, who just need to know when the bus will arrive. From the home screen users will be able to see when services are due within a single tap. I am also exploring daily notifications and updates in the status bar. This is very much for the Wellingtonian on the go.';

const TECH_HEADER = 'Technology';
const TECH_CONTENT = 'I am building this as a native Android application. I chose this as I am looking to also explore new Java language features. React Native was also a strong contender. I would have gone for this if I was planning a web or iOS version, however web didn’t fit the use case and I require a Mac to develop to iOS.I am also looking at options around NoSQL databases to store user preferences and to store query results for a short time. This is because I want to be able to quickly insert new records and delete old ones. Due to the temporary nature of transit data I’m not worried about requiring relational features for data constraints and locking.';

const PROGRESS_HEADER = 'Progress';
const PROGRESS_CONTENT = 'While I have the use cases ready I’m still working on designing the interface. I have been doing research into UI design and applying learnings here. I’m also working on reverse engineering the API from Wellington Transport as there is no public documentation as of writing.';

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