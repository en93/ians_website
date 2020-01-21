import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const PAGE_TITLE = 'Ian Babington | Mulitplayer Exercise';
const TITLE = 'Projects';

const BACKGROUND_HEADER = "Background";
const BACKGROUND_CONTENT = "For my Honours Dissertation at the University of Auckland, I researched how games can " +
    "help people stay fit. My aim was to explore how we can design exercise based gameplay to keep people engaged. I expanded on previous " +
    "work done in the area and proposed new ways of creating close, exciting results to keep people playing " +
    "and exercising. I looked into how we can balance mulitplayer gameplay in terms of fitness, skill and cognitive load without alerting the player " +
    "as to avoid feelings of unfair or unearned results.";

const TECH_HEADING = "Technology";
const TECH_CONTENT = "To build the game I started with an exisitng codebase built for singleplayer and added " +
    "new functionality using the Unity Game Enginge and the C# Scripting API. To enable mulitplayer, I updated how the game world is " +
    "generated as so that objects will be synced across networked clients and managed messaging around scores and endgame " +
    "conditions. I also added scripts to manage new game modes for balancing for fitness, skill and congnitive load.";
    
    // "To balance fitness levels we measured player heart rate as a indictaor of effort. heart reate, added a mode with Dynamic Difficulty Adjustment to account for player skill "

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
        padding: '12px 16px 20px',
    },
});


//TODO: build unified build for all pages
function CardFactory(imagePath, heading, description){ 
    const classes = useStyles();
    const image = imagePath !== null ? (<CardMedia 
        className={classes.media}
        image={ imagePath}
        title="C# logo"
        alt="C# logo"                    
    />) : null;
    
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
        </Card>
    );
};

function Exergame() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/exergame');
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {CardFactory(require('../../../assets/images/cSharpLogo.png'), 'Multiplayer Exercise', 'Creating engagement with exercise games.')}
            {CardFactory(null, BACKGROUND_HEADER, BACKGROUND_CONTENT)}
            {CardFactory(null, TECH_HEADING, TECH_CONTENT)}
        </div>
    );
}

export default Exergame;