import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import HeaderCardFactory from '../../UI/HeaderCardFactory';
import SectionCard from '../../UI/SectionCard';

const PAGE_TITLE = 'Ian Babington | Personal Website';
const TITLE = 'Projects';

const MOTIVATION_HEADER = 'Motivation';
const MOTIVATION_CONTENT = 'I have several motivators for this project. Gaining experience building sites from scratch, managing the Software Development Life Cycle (SDLC) and handling operations tasks such as deployments and hosting.';

const TECH_HEADER = 'Technology';
const TECH_CONTENT = 'I chose to use React to build my frontend. I love the component-based design as well as the great tools available. Material-UI was chosen for the UI framework. It follows Google’s Material Design guidelines and has great out of the box components. Firebase was selected for hosting. I was impressed with its deployment workflow and innovative features';

const MANAGE_HEADER = 'Project Management';
const MANAGE_CONTENT = 'To keep this Agile, I used a Kanban board to create and track stories. I enjoyed looking at the SDLC from a Business Analyst point of view, analyzing what features would be most beneficial.';

const FUTURE_HEADER = "Future";
const FUTURE_CONTENT = "I have more features on the way as well as updates to my Projects as they progress. This website will be continually improved and supported for many years to come.";

const makeHeader = () => {
    const headerCardBuilder = HeaderCardFactory();
    headerCardBuilder.setImage(require('../../../assets/images/reactLogo.png'));
    headerCardBuilder.setHeading('IanBabington.com');
    headerCardBuilder.setDescription('My personal website.');
    headerCardBuilder.setButtonText("View on GitHub");
    headerCardBuilder.setUrl('https://github.com/en93/ians_website');
    return headerCardBuilder.buildCard();
}

function PersonalSite() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/personal-site');
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {makeHeader()}
            {SectionCard(MOTIVATION_HEADER, MOTIVATION_CONTENT)} 
            {SectionCard(TECH_HEADER, TECH_CONTENT)} 
            {SectionCard(MANAGE_HEADER, MANAGE_CONTENT)} 
            {SectionCard(FUTURE_HEADER, FUTURE_CONTENT)} 
        </div>
    );
}

export default withRouter(PersonalSite);