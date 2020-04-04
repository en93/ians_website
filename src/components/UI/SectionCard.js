import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    card: {
      maxWidth: 650,
      margin: '23px auto', 
    },
    content: {
        textAlign: "left",
        padding: '12px 16px 0px'
    },
});

function SectionCard(heading, description){ 
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

export default SectionCard;