import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PAGE_TITLE = 'Ian Babington | Projects';
const TITLE = 'Projects';
const useStyles = makeStyles({
    card: {
      maxWidth: 325,
      margin: '15px auto',
    },
    media: {
      height: 120,
      width: '100%',
      backgroundColor: 'black',
      backgroundSize: 'contain', 
    },
    content: {
        textAlign: "left",
        padding: '12px 16px 0px',
    },
    button: {
        padding: '0px',
    },
  });

function ProjectCards() {  
    const classes = useStyles();
    function CardFactory(imagePath, heading, description){ 
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                        image={ imagePath}
                        title="React logo"
                        alt="React logo"                    
                        />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h3" >{heading}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    };
    
    return (
        <div>
            {CardFactory(require('../../../assets/images/cSharpLogo.png'), 'Multiplayer Exercise Game', 'Research into designing for engagement.')}
            {CardFactory(require("../../../assets/images/reactLogo.png"), 'IanBabington.com', 'My personal website.')}
            {CardFactory(require('../../../assets/images/pythonLogo.png'), 'Monty Hall Problem', 'Simulating probability.')}
            {CardFactory(require('../../../assets/images/androidLogo.png'), 'Android NFC Reader', 'Exploring NFC functionality.')} 
        </div>); 
};  


function Projects() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/pageNotFound');
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {ProjectCards()}
        </div>
    );
}

export default Projects;