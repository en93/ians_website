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
    },
    media: {
      height: 120,
      width: '100%',
      backgroundColor: 'black',
      backgroundSize: 'contain', 
    },
    content: {
        textAlign: "left",
    }
  });
  

function TestCard() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image={ require('../../../assets/images/reactLogo.png')}
                    title="React logo"
                    alt="React logo"                    
                    />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h3" >IanBabington.com</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This website is being used to gain experience with building and deploying a React based Responsive website 
                        as well as to share what I'm working on.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )

}

function Projects() {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/pageNotFound');
    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {TestCard()}
        </div>
    );
}

export default Projects;