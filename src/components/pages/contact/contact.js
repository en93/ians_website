import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactGA from 'react-ga';

const PAGE_TITLE = "Ian Babington | Contact";
const contact = "Contact";

const EMAIL_ADDRESS = "IanBabington93@gmail.com";
const EMAIL_LABEL = "Email";

const LINKEDIN_URL = "https://www.linkedin.com/in/Ian-Babington";
const LINKEDIN_LABEL= "LinkedIn"

const GITHUB_URL = "https://github.com/en93";
const GITHUB_LABEL = "GitHub"

const useStyles = makeStyles({
    card: {
      width: '180px',
      margin: '10px auto',
      position: 'relative',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Cards() {
    const classes = useStyles();  
    return (
      <div>

        <Card className={classes.card}>
          <CardActionArea href={"mailto: " + EMAIL_ADDRESS}>
            <CardContent>
              <EmailIcon fontSize="large" />
            </CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {EMAIL_LABEL}
            </Typography>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea href={GITHUB_URL}>
            <CardContent>
              <GitHubIcon fontSize="large" />
            </CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {GITHUB_LABEL}
            </Typography>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea href={LINKEDIN_URL}>
            <CardContent>
              <LinkedInIcon fontSize="large" />
            </CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {LINKEDIN_LABEL}
            </Typography>          
          </CardActionArea>
        </Card>
  </div>
  );
}

function Display() {
  useEffect(() => {
    document.title = PAGE_TITLE;  
  });
  ReactGA.pageview('/contact');
  return( 
      <div className="Page-content">
          <h1>{contact}</h1>
          {Cards()}
      </div>
  )
};

export default Display;