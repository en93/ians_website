import React from "react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {AboutIcon, HomeIcon, ProjectsIcon, ContactIcon} from '../../icons/icons';
import { withRouter } from 'react-router';


import './navbar.css';

const navbar = props => {
    const showLabels = true;
    const navigate = (_, newValue) => {
        props.history.push(newValue);
    };

    return (
        <div className="navbar">
            <BottomNavigation onChange={navigate} showLabels={showLabels}>
                <BottomNavigationAction value="home" label='Home' icon={<HomeIcon/>}/>
                <BottomNavigationAction value="about" label='About me' icon={<AboutIcon/>}/>
                <BottomNavigationAction value="projects" label='Projects' icon={<ProjectsIcon/>}/>
                <BottomNavigationAction value="contact" label='Contact' icon={<ContactIcon/>}/>
            </BottomNavigation>
        </div>
    )
};

export default withRouter(navbar);