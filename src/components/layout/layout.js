import './layout.css';
import React from "react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
// import FavoriteIcon from '@material-ui/icons/Favorite';

//todo find way to remove wrapping div
const layout = props => { 
    return (
        <div>
            {props.children}
            {/*<BottomNavigation>
            <!--<BottomNavigationAction label='home' icon={<FavoriteIcon />}/> -->
            </BottomNavigation>*/}
        </div>
    );
} 

export default layout;