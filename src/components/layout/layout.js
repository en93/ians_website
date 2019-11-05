import './layout.css';
import React from "react";
import Navbar from '../navigation/navbar/navbar';

const layout = props => { 
    return (
        <div> 
            <div className="content"> 
                {props.children}            
            </div>
            <div>
                <Navbar/>
            </div>
        </div>
    );
} 

export default layout;