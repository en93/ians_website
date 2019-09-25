import './layout.css';
import React from "react";
import Navbar from '../navigation/navbar/navbar';

//todo find way to remove wrapping div
const layout = props => { 
    return (
        <div>
            {props.children}            
            <Navbar/>
        </div>
    );
} 

export default layout;