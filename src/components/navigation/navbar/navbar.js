import React from "react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {AboutIcon, HomeIcon, ProjectsIcon, ContactIcon} from '../../icons/icons';
import { Link } from 'react-router-dom';
import './navbar.css';

const navbar = () => {
    const showLabels = true;
    const navigate = (event, newValue) => {

    };

    return (
        <div className="navbar">
            <BottomNavigation onChange={navigate} showLabels={showLabels}>
                <BottomNavigationAction component={Link} to="/" label='Home' icon={<HomeIcon/>}/>
                <BottomNavigationAction component={Link} to="/about" label='About me' icon={<AboutIcon/>}/>
                <BottomNavigationAction component={Link} to="/projects" label='Projects' icon={<ProjectsIcon/>}/>
                <BottomNavigationAction component={Link} to="/contact" label='Contact' icon={<ContactIcon/>}/>
            </BottomNavigation>
        </div>
    )
};

export default navbar;