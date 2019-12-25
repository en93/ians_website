import './layout.css';
import React from "react";
import Navbar from '../navigation/navbar/navbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';


const layout = props => { 
    return (
        <div> 
            {props.children}      
            <Navbar/>
        </div>
    );
} 

export default layout;