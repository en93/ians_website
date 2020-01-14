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
    
    return (
        <div>
            <ExpansionPanel expanded={expanded === 'panelCA'} onChange={handleChange('panelCA')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panelCAbh-content"
                        id="panelCAbh-header">
                    <Typography className={classes.heading}>{CA_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.paragraph}>{CA_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panelMyMSD'} onChange={handleChange('panelMyMSD')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panelMyMSDbh-content"
                        id="panelMyMSDbh-header">
                    <Typography className={classes.heading}>{MYMSD_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.paragraph}>{MYMSD_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panelJava'} onChange={handleChange('panelJava')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panelJavabh-content"
                        id="panelJavabh-header">
                    <Typography className={classes.heading}>{JAVA_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.paragraph}>{JAVA_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panelBPM'} onChange={handleChange('panelBPM')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panelBPMbh-content"
                        id="panelBPMbh-header">
                    <Typography className={classes.heading}>{BPM_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.paragraph}>{BPM_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panelUniHons'} onChange={handleChange('panelUniHons')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panelUniHonsbh-content"
                        id="panelUniHonsbh-header">
                    <Typography className={classes.heading}>{UNI_HONS_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.paragraph}>{UNI_HONS_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panelAcclaim'} onChange={handleChange('panelAcclaim')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panelAcclaimbh-content"
                    id="panelAcclaimbh-header">
                <Typography className={classes.heading}>{ACCLAIM_LABEL}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>cd 
                <Typography className={classes.paragraph}>{ACCLAIM_DESC}</Typography>
            </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panelUni'} onChange={handleChange('panelUni')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panelUnibh-content"
                        id="panelUnibh-header">
                    <Typography className={classes.heading}>{UNI_UNDERGRAD_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.paragraph}>{UNI_UNDERGRAD_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
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