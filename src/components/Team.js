import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import PL from "../images/PL.jpg";
import JM from "../images/JM.jpg";
import WP from "../images/WP.jpg";

const Team = () => {
    return (   
        <div class="row">
            <div class="column">
                <div class="card">
                <ReactRoundedImage image={PL} roundedSize="0" imageWidth="400" imageHeight="400" /> 
                <div id="team1" class="container">
                    <h2>User1</h2>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <ReactRoundedImage image={JM} roundedSize="0" imageWidth="400" imageHeight="400" /> 
                <div id="team2" class="container">
                    <h2>User2</h2>
                </div>
                </div>
            </div>
            
            <div class="column">
                <div class="card">
                <ReactRoundedImage image={WP} roundedSize="0" imageWidth="400" imageHeight="400" /> 
                <div  id="team3" class="container">
                    <h2>User3</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Team;
