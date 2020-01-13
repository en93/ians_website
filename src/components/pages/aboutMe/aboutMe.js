import React, {useState} from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';

const headline = "About me"

const BPM_LABEL = 'Developer: BPM Team (MSD)';
const BPM_DESC = 'Working with the BPM team, I was responsible for writing Python Automation Pipelines to deploy builds and perform maintenance on Development and Production environments.';

const JAVA_LABEL = 'Developer: Java Team (MSD)';
const JAVA_DESC = 'Working with the Java team I was responsible for development and automation jobs on a large range of Java projects. I also managed deployments to shared Development Environments which involved chairing meetings and coordinating with many teams across IT.';

const MYMSD_LABEL = 'Developer: MyMSD Team (MSD)';
const MYMSD_DESC = 'Working in the Agile MyMSD team, I developed mobile first experiences using the Ember.js and Java Spring frameworks to support the MyMSD online service.';

const CA_LABEL = 'Developer: Client Apps (MSD)';
const CA_DESC = 'Working in an Agile team, I develop client facing, React Front-ends and Java Back-end Client Management Systems in support of government projects.';

const UNI_HONS_LABEL = 'BSc CS Honours (UoA)';
const UNI_HONS_DESC = 'I studied advanced topics in Software Development, including security and UX, and completed original research in the area of multiplayer, exercise video games.';

const UNI_UNDERGRAD_LABEL = 'BSc CS & IS (UoA)';
const UNI_UNDERGRAD_DESC = 'I completed a double major BSc, with Information Systems and Computer Science, which gave me the technical and business skills to manage modern Software Development.';

const useStyles = makeStyles(theme => ({
    root: {
      width: '80%',
      color: '#000000',
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',   
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexShrink: 0,
      color: theme.palette.text.primary,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    p: {
        color: '#000000'
    }
}));

const about = () => (
    <div>
        <h1>{headline}</h1>
        {Bio()}
    </div>
);


function Bio()  {
    ReactGA.pageview('/about');
    const [expanded, setExpanded] = useState(false);
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                    <Typography className={classes.heading}>{CA_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.secondaryHeading}>{CA_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header">
                    <Typography className={classes.heading}>{MYMSD_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.secondaryHeading}>{MYMSD_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header">
                    <Typography className={classes.heading}>{JAVA_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.secondaryHeading}>{JAVA_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header">
                    <Typography className={classes.heading}>{BPM_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.secondaryHeading}>{BPM_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header">
                    <Typography className={classes.heading}>{UNI_HONS_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.secondaryHeading}>{UNI_HONS_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header">
                    <Typography className={classes.heading}>{UNI_UNDERGRAD_LABEL}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.secondaryHeading}>{UNI_UNDERGRAD_DESC}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default about;