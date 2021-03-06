import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
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
      width: '100%',
      margin: '32px auto',
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

//In progress: flex box

function ProjectCards(navAction) {  
    const classes = useStyles();
    function CardFactory(imagePath, heading, description, link){ 
        return (
            <Card className={classes.card}>
                <CardActionArea onClick={ () => navAction(link)}>
                    <CardMedia 
                        className={classes.media}
                        image={ imagePath}
                        title="Logo"
                        alt="Logo"                    
                        />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h3" >{heading}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="primary" onClick={ () => navAction(link)}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    };
    
    return (
        <div className="Card-wrapper">
            {CardFactory(require('../../../assets/images/cSharpLogo.png'), 'Multiplayer Exercise', 'Creating engagement with exercise games.', './projects/exercise-game')}
            {CardFactory(require("../../../assets/images/reactLogo.png"), 'IanBabington.com', 'My personal website.', './projects/personal-website')}
            {CardFactory(require('../../../assets/images/pythonLogo.png'), 'Monty Hall Simulations', 'Exploring probability.', './projects/monty-hall')}
            {CardFactory(require('../../../assets/images/androidLogo.png'), 'Transport App', 'Built for your commute.', './projects/transport-app')} 
            {/*CardFactory(require('../../../assets/images/androidLogo.png'), 'Android NFC Reader', 'Exploring NFC functionality.', './home')*/} 
        </div>); 
};  


function Projects(props) {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/projects');
    const navAction = (linkAddress) =>{
        props.history.push(linkAddress);
    };
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {ProjectCards(navAction)}
        </div>
    );
}

export default withRouter(Projects);