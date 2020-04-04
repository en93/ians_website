import React, {useEffect } from "react";
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import HeaderCardFactory from '../../UI/HeaderCardFactory';
import SectionCard from '../../UI/SectionCard';

const PAGE_TITLE = 'Ian Babington | Mulitplayer Exercise';
const TITLE = 'Projects';

const BACKGROUND_HEADER = "Background";
const BACKGROUND_CONTENT = "For my Honours Dissertation, I researched exercise games and creating competitive multiplayer experiences. I considered people’s different levels of fitness, skill and cognitive ability and proposed systems to create close matches to motivate further exercise."; 

const RESEARCH_HEADING = "Research";
const RESEARCH_CONTENT = "I implemented multiplayer features and additional game modes for a prototype exercycle racing game. This utilized the Unity game engine and its C# Scripting API. With this game I carried out user testing.";

const FITNESS_HEADING = "Fitness Balancing";
const FITNESS_CONTENT = "Using player heart rate I approximate the effort being exerted. Heart rate is fed into an algorithm to calculate speed in-game. We test if this allows players of differing fitness levels to compete.";

const SKILL_HEADING = "Skill Balancing";
const SKILL_CONTENT = "Players lean side to side to turn and avoid obstacles. Familiarity is an advantage and leads to a less exciting challenge. To balance this, I periodically resize obstacles based on player performance. This should be fairer to new players and give experienced players a greater challenge.";

const COG_HEADING = "Cognitive Balancing";
const COG_CONTENT = "People with less working memory may struggle with the visuals of fast paced gameplay. We tested, with healthy players, reducing the complexity of game textures to see how that will impact performance.";

const FINDINGS_HEADING = 'Findings';
const FINDINGS_CONTENT = "Throughout this project, I learnt a lot about designing systems, writing clean code and carrying out user studies. Due to limited sample sizes and unreliable hardware, the results were inconclusive. One issue was the exercycle would lose track of heart rate, causing the player to stop until output resumed. Future work could include a larger user study with more resources. This dissertation received a mark of A-.";

const makeHeader = () => {
    const headerCardBuilder = HeaderCardFactory();
    headerCardBuilder.setImage(require('../../../assets/images/cSharpLogo.png'));
    headerCardBuilder.setHeading('Multiplayer Exercise');
    headerCardBuilder.setDescription('Creating engagement with exercise games.');
    headerCardBuilder.setButtonText("Full Dissertation");
    headerCardBuilder.setUrl('https://drive.google.com/file/d/1UID-LNjDzSIeX1asR8vinadEmjymZGZd/view')
    return headerCardBuilder.buildCard();
}

function Exergame() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
    });
    ReactGA.pageview('/exergame');
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {makeHeader()}
            {SectionCard(BACKGROUND_HEADER, BACKGROUND_CONTENT)}
            {SectionCard(RESEARCH_HEADING, RESEARCH_CONTENT)}
            {SectionCard(FITNESS_HEADING, FITNESS_CONTENT)}
            {SectionCard(SKILL_HEADING, SKILL_CONTENT)}
            {SectionCard(COG_HEADING, COG_CONTENT)}
            {SectionCard(FINDINGS_HEADING, FINDINGS_CONTENT)}
        </div>
    );
}

export default withRouter(Exergame);