import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
// import { Button } from "@material-ui/core";
import { withRouter } from 'react-router';
import HeaderCardFactory from '../../UIFactories/HeaderCardFactory';
// import ButtonFactory from './../../UIFactories/ButtonFactory';

const PAGE_TITLE = 'Ian Babington | Personal Website';
const TITLE = 'Projects';

const MOTIVATION_HEADER = 'Motivation';
const MOTIVATION_CONTENT = 'I have several motivators for this project. Gaining experience building sites from scratch, managing the Software Development Life Cycle (SDLC) and handling operations tasks such as deployments and hosting.';

const TECH_HEADER = 'Technology';
const TECH_CONTENT = 'I chose to use React to build my frontend. I love the component-based design as well as the great tools available. Material-UI was chosen for the UI framework. It follows Google’s Material Design guidelines and has great out of the box components. Firebase was selected for hosting. I was impressed with its deployment workflow and innovative features';

const MANAGE_HEADER = 'Project Management';
const MANAGE_CONTENT = 'To keep this Agile, I used a Kanban board to create and track stories. I enjoyed looking at the SDLC from a Business Analyst point of view, analyzing what features would be most beneficial.';

const FUTURE_HEADER = "Future";
const FUTURE_CONTENT = "I have more features on the way as well as updates to my Projects as they progress. This website will be continually improved and supported for many years to come.";

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
    button: {},
});

// function HeaderCardFactory2(imagePath, heading, description){ 
//     const classes = useStyles();
//     const image = imagePath !== null ? (<CardMedia 
//         className={classes.media}
//         image={ imagePath}
//         title="C# logo"
//         alt="C# logo"                    
//     />) : null;
    
//     return (
//         <Card className={classes.card}>
//             <CardActionArea>
//                 {image}
//                 <CardContent className={classes.content}>
//                     <Typography gutterBottom variant="h5" component="h5" >{heading}</Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         {description}
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <Button size="large" color="primary" href={"https://github.com/en93/ians_website"}>
//                     View Github
//                 </Button>
//             </CardActions>
//         </Card>
//     );
// };

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

function PersonalSite(props) {
    useEffect(() => {
        document.title = PAGE_TITLE;  
      });
    ReactGA.pageview('/personal-site');
    // const navAction = () =>{
    //     props.history.push('/home');
    // };
    // const buttonFactory = ButtonFactory();
    // buttonFactory.setMessage = 'View Home';
    // buttonFactory.setOnClick = () => {/*props.history.push('./home')*/ alert()}
    // const headerButton = buttonFactory.buildButton();
    const headerCardBuilder = HeaderCardFactory();
    headerCardBuilder.setImage(require('../../../assets/images/reactLogo.png'));
    headerCardBuilder.setHeading('IanBabington.com');
    headerCardBuilder.setDescription('My personal website.');
    headerCardBuilder.setButtonText("View on GitHub");
    // headerCardBuilder.setButtonClick(navAction);
    headerCardBuilder.setUrl('https://github.com/en93/ians_website')
    // headerCardBuiler.setButton(headerButton);
    const headerCard = headerCardBuilder.buildCard();

    return (
        <div className="Page-content">
            <h1>{TITLE}</h1>
            {/*HeaderCardFactory(require('../../../assets/images/reactLogo.png'), 'IanBabington.com', 'My personal website.')*/}
            {headerCard}
            {SectionCardFactory(MOTIVATION_HEADER, MOTIVATION_CONTENT)} 
            {SectionCardFactory(TECH_HEADER, TECH_CONTENT)} 
            {SectionCardFactory(MANAGE_HEADER, MANAGE_CONTENT)} 
            {SectionCardFactory(FUTURE_HEADER, FUTURE_CONTENT)} 
        </div>
    );
}

export default withRouter(PersonalSite);