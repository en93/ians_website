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
                    <Typography gutterBottom variant="h5" component="h3" >{heading}</Typography>
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
            {CardFactory(null, "Background", "For my honours dissertaion, I chose to research how we can use games to help people stay fit")}
        </div>
    );
}

export default Exergame;