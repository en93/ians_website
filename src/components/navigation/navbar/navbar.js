import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { withRouter } from 'react-router';
import './navbar.css';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';

function Navbar(props) {
    const [value, setValue] = useState(
        //If path is empty set to use home
        (x => x.location.pathname === '/' ? '/home' : x.location.pathname)(props)         
    );
    
    const showLabels = true;    
    const navigate = (_, newValue) => {
        setValue(newValue)
        props.history.push(newValue);
    };
    
    return (
        <div className="navbar">
            <BottomNavigation onChange={navigate} showLabels={showLabels} value={value}>
                <BottomNavigationAction value="/home" label='Home' icon={<HomeIcon/>}/>
                <BottomNavigationAction value="/about" label='About me' icon={<PersonIcon/>}/>
                <BottomNavigationAction value="/projects" label='Projects' icon={<CodeIcon/>}/>
                <BottomNavigationAction value="/contact" label='Contact' icon={<EmailIcon/>}/>
            </BottomNavigation>
        </div>
    )
};

export default withRouter(Navbar);