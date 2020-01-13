import './layout.css';
import React from "react";
import Navbar from '../navigation/navbar/navbar';

const layout = props => { 
    return (
        <div> 
            <div className="Page-content">
                {props.children}      
            </div>
            <Navbar/>
        </div>
    );
} 

export default layout;