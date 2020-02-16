import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";


//TODO will this behave as if a singleton bean?? Will values not set be stored?

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
        padding: '12px 16px 0px'
    },
});

function HeaderCardFactory(){ 
    let imagePath = null;
    let imageTitle = null;
    let imageAlt = null;
    let heading = null;
    let description = null;
    // let button = null;
    let buttonText = null;
    // let buttonClick = null;
    let hrefUrl = null;

    const setImage = (image, title, alt) => {
        imagePath = image;
        imageTitle = title;
        imageAlt = alt;
    }

    const setHeading = (header) => {
        heading = header;
    }

    const setDescription = (desc) => {
        description = desc;
    }

    const setButtonText = (text) => {
        buttonText = text;
    }

    // const setButtonClick = (onClick) => {
    //     buttonClick = onClick;
    // }

    const setUrl = (path) => {
        hrefUrl = path;
    }

    const classes = useStyles();
    function buildCard(){        
        const image = imagePath !== null ? (<CardMedia 
            className={ classes.media }
            image={ imagePath }
            title={ imageTitle }
            alt= { imageAlt }       
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
                <CardActions>
                    <Button size="large" color="primary" href={hrefUrl}>
                        {buttonText}
                    </Button>
                </CardActions>
            </Card>
        );
    };

    return {setImage, setButtonText, setUrl, setHeading, setDescription, buildCard};
};

export default HeaderCardFactory;

