import React, {useState, useEffect } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';

const PAGE_TITLE = "Ian Babington | About me";
const HEADLINE = "About me"; 

const BPM_LABEL = 'Developer: BPM Team (MSD)';
const BPM_DESC = 'Working with the Business Process Management Team, I was responsible for writing Python Automation Pipelines to deploy builds and perform maintenance on Development and Production environments.';

const JAVA_LABEL = 'Developer: Java Team (MSD)';
const JAVA_DESC = 'Working with the Java Team I was responsible for developing and maintaining our Java services and automation jobs on a large range of Government projects. I also managed deployments to shared Development Environments which involved chairing meetings and coordinating with many teams across IT.';

const MYMSD_LABEL = 'Developer: MyMSD Team (MSD)';
const MYMSD_DESC = 'Working in the Agile MyMSD Team, I developed mobile first experiences using the Ember.js and Java Spring frameworks to support the MyMSD online service.';

const CA_LABEL = 'Developer: Client Apps (MSD)';
const CA_DESC = 'Working in an Agile team, I develop client facing, React Front-ends and Java Back-end Client Management Systems in support of large government projects.';

const UNI_HONS_LABEL = 'Postgraduate: UoA';
const UNI_HONS_DESC = 'I studied advanced topics in Software Development, including security and UX, and completed original research in the area of multiplayer, exercise video games.';

const UNI_UNDERGRAD_LABEL = 'Undergraduate: UoA';
const UNI_UNDERGRAD_DESC = 'I completed a double major BSc, with Information Systems and Computer Science, which taught me core technical and business skills.';

const ACCLAIM_LABEL = 'Internship: Acclaim Software';
const ACCLAIM_DESC = 'I learnt in the real world about the SDLC, clean code and working in a team environment. I added new features to the core product as well as updating the installer.';


const useStyles = makeStyles(theme => ({
    heading: {
      fontSize: theme.typography.pxToRem(16),
      color: theme.palette.text.primary,
      textAlign: "left",
    },
    paragraph: { 
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    }
}));

function Bio()  {
    ReactGA.pageview('/about');
    const [expanded, setExpanded] = useState(false);
    const handleChange = panel => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const classes = useStyles();

    function ExpansionPanelBuilder(label, description, id){
        return (
            <ExpansionPanel expanded={expanded === id} onChange={handleChange(id)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls={ id + "bh-content"}
                        id={ id +"bh-header"}>
                    <Typography className={classes.heading}>{label}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.paragraph}>{description}</Typography>
                </ExpansionPanelDetails>
        </ExpansionPanel>
        )
    }
    
    return (
        <div>
            {ExpansionPanelBuilder(CA_LABEL, CA_DESC, "panelCA")}
            {ExpansionPanelBuilder(MYMSD_LABEL, MYMSD_DESC, "panelMyMSD")}
            {ExpansionPanelBuilder(JAVA_LABEL, JAVA_DESC, "panelJava")}
            {ExpansionPanelBuilder(BPM_LABEL, BPM_DESC, "panelBPM")}
            {ExpansionPanelBuilder(UNI_HONS_LABEL, UNI_HONS_DESC, "panelUniHons")}
            {ExpansionPanelBuilder(ACCLAIM_LABEL, ACCLAIM_DESC, "panelAcclaim")}
            {ExpansionPanelBuilder(UNI_UNDERGRAD_LABEL, UNI_UNDERGRAD_DESC, "panelUni")}
        </div>
    );
}

function About(){
    useEffect(() => {
        document.title = PAGE_TITLE;
    })
    return (
        <div className="Page-content">
            <h1>{HEADLINE}</h1>
            {Bio()}
        </div>
    )
};

export default About;