import React from "react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {AboutIcon, HomeIcon, ProjectsIcon, ContactIcon} from '../../icons/icons';
import { Link } from 'react-router-dom';
import './navbar.css';

//todo consider using approach as in here: http://react-material.fusetheme.com/documentation/material-ui-components/bottom-navigation
const navbar = () => {
    const showLabels = true;
    return (
        <div className="navbar">
            <BottomNavigation showLabels={showLabels}>
                <BottomNavigationAction component={Link} to="/" label='Home' icon={<HomeIcon/>}/>
                <BottomNavigationAction component={Link} to="/about" label='About me' icon={<AboutIcon/>}/>
                <BottomNavigationAction component={Link} to="/projects" label='Projects' icon={<ProjectsIcon/>}/>
                <BottomNavigationAction component={Link} to="/contact" label='Contact' icon={<ContactIcon/>}/>
            </BottomNavigation>
        </div>
    )
};

export default navbar;