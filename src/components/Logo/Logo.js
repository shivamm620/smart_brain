import React from 'react';
import Tilt from 'react-tilt';
import brain from "./brain.png"
import "./Logo.css"
const logo = ()=>{
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 Tiltsh shadow-2 mb5" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
             <div className="Tilt-inner  pa3"> <img alt="logo" src={brain} style={{paddingTop:"5px"}}/> 
                </div>
            </Tilt>
        </div>
    )
}
export default logo;