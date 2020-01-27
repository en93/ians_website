import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const PAGE_TITLE = 'Ian Babington | Personal Website';
const TITLE = 'Projects';

const MOTIVATION_HEADER = 'Motivation';
const MOTIVATION_CONTENT = 'My purposes for building this site are threefold. To gain experience building websites from scratch, managing the Software Development Life Cycle and handling operations tasks such as deployments and hosting.';

const TECH_HEADER = 'Technology';
const TECH_CONTENT = 'I chose to use React to build my frontend. I love the component-based design as well as the great tooling ecosystem surrounding it. Material-UI was chosen for the UI framework. It follows Google’s Material Design guidelines and has many components that look and behave great out of the box.';

const MANAGE_HEADER = 'Project Management';
const MANAGE_CONTENT = 'Agile methodology is being used to manage this project. Using a Kanban board on Trello and I create and track stories being worked on. I enjoyed analyzing what features would benefit my site as well as crafting written sections where concise and clear communication was required.';

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

function HeaderCardFactory(imagePath, heading, description){ 
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

function Exergame() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/personal-site');
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {HeaderCardFactory(require('../../../assets/images/reactLogo.png'), 'IanBabington.com', 'My personal website.')}
            {SectionCardFactory(MOTIVATION_HEADER, MOTIVATION_CONTENT)} 
            {SectionCardFactory(TECH_HEADER, TECH_CONTENT)} 
            {SectionCardFactory(MANAGE_HEADER, MANAGE_CONTENT)} 
        </div>
    );
}

export default Exergame;