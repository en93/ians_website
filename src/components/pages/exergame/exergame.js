import React, {useEffect } from "react";
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
// const Dissertation = lazy(() => import('../../../assets/documents/Ian_exergame_dissertation.pdf'));
// import Dissertation from '../../../assets/documents/Ian_exergame_dissertation.pdf';


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

    
const useStyles = makeStyles({
    card: {
      maxWidth: 325,
      margin: '17px auto',
    },
    media: {
      height: 120,
      width: '100%',
      backgroundColor: 'black',
      backgroundSize: 'contain', 
    },
    content: {
        textAlign: "left",
        padding: '12px 16px 10px',
    },
});

function HeaderCardFactory(imagePath, heading, description){ 
    const classes = useStyles();
    const image = imagePath !== null ? (
        <CardMedia 
            className={classes.media}
            image={ imagePath}
            title="C# logo"
            alt="C# logo"/>  
        ) : null;
    
    return (
        <Card className={classes.card}>
            <CardActionArea>
                {image}
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h5" >{heading}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="large" color="primary" href={"https://drive.google.com/file/d/1UID-LNjDzSIeX1asR8vinadEmjymZGZd/view"}>
                Full Dissertation
            </Button>
        </CardActions>
        </Card>
    );
};

function SectionCardFactory(heading, description){ 
    const classes = useStyles();  
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h5" >{heading}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

function Exergame(props) {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/exergame');
    // const navAction = () =>{
    //     props.history.push('./exercise-game/PDF');
    // };
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {HeaderCardFactory(require('../../../assets/images/cSharpLogo.png'), 'Multiplayer Exercise', 'Creating engagement with exercise games.')}
            {SectionCardFactory(BACKGROUND_HEADER, BACKGROUND_CONTENT)}
            {SectionCardFactory(RESEARCH_HEADING, RESEARCH_CONTENT)}
            {SectionCardFactory(FITNESS_HEADING, FITNESS_CONTENT)}
            {SectionCardFactory(SKILL_HEADING, SKILL_CONTENT)}
            {SectionCardFactory(COG_HEADING, COG_CONTENT)}
            {SectionCardFactory(FINDINGS_HEADING, FINDINGS_CONTENT)}
        </div>
    );
}

export default withRouter(Exergame);