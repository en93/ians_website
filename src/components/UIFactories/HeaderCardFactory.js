import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";

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

function HeaderCardFactory(imagePath, heading, description, button){ 
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
            <CardActions>
                <Button size="large" color="primary" href={"https://github.com/en93/ians_website"}>
                    View Github
                </Button>
            </CardActions>
        </Card>
    );
};

export default HeaderCardFactory;