import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import HeaderCardFactory from '../../UI/HeaderCardFactory';
import SectionCard from '../../UI/SectionCard';

const PAGE_TITLE = 'Ian Babington | Monty Hall Simulation';
const TITLE = 'Projects';

const MOTIVATION_HEADER = 'Motivation';
const MOTIVATION_CONTENT = 'I was first introduced to the Monty Hall Problem by the film ‘21’. For those unfamiliar, it’s a probability puzzle where a game show contestant is given the option to change their selected door after one is opened. The problem states that changing doors will give you a 2/3 chance of selecting the winning door behind which hides the prize. You can find a full breakdown here (https://en.wikipedia.org/wiki/Monty_Hall_problem). Given the unintuitive nature of the answer I decided to explore this further in code.'

const TECH_HEADER = 'Technology';
const TECH_CONTENT = 'I chose to work with python for a couple reasons. Firstly, it has a great workflow for dealing with data. Secondly, I liked how the language allowed me to write concise, highly readable code without the bloat from more verbose languages. Thirdly, it looked interesting and I wanted to try it out. At first, I found it challenging adapting to dynamic typing, the lack of declarations and not using curly brackets. Fresh out of Uni I was mostly thinking in Java. But after becoming more familiar, I came to love it for these reasons. Code was beautiful, concise and communicative.   ';

const makeHeader = () => {
    const headerCardBuilder = HeaderCardFactory();
    headerCardBuilder.setImage(require('../../../assets/images/pythonLogo.png'));
    headerCardBuilder.setHeading('Monty Hall Simulations');
    headerCardBuilder.setDescription('Exploring probability.');
    headerCardBuilder.setButtonText("View on GitHub");
    headerCardBuilder.setUrl('https://github.com/en93/Monty_Hall_Simulation');
    return headerCardBuilder.buildCard();
}

function PersonalSite() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/monty-hall');
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {makeHeader()}
            {SectionCard(MOTIVATION_HEADER, MOTIVATION_CONTENT)} 
            {SectionCard(TECH_HEADER, TECH_CONTENT)} 
        </div>
    );
}

export default withRouter(PersonalSite);