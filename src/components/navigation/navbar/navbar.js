import React from "react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {AboutIcon, HomeIcon, ProjectsIcon, ContactIcon} from '../../icons/icons';
import './navbar.css';

const navbar = () => {
    const showLabels = true;
    return (
        <div className="navbar">
            <BottomNavigation showLabels={showLabels}>
                <BottomNavigationAction label='Home' icon={<HomeIcon/>}/>
                <BottomNavigationAction label='About me' icon={<AboutIcon/>}/>
                <BottomNavigationAction label='Projects' icon={<ProjectsIcon/>}/>
                <BottomNavigationAction label='Contact' icon={<ContactIcon/>}/>
            </BottomNavigation>
        </div>
    )
};

export default navbar;