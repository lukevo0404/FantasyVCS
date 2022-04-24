import "./CTA.css"
import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

function CTA() {
    const backgroundImage = {
        backgroundImage: "url('./images/transparent-logo-only.png')",
    };
    return (
        <div className="cta-div" style={backgroundImage}>
            <div className="title-text-wrapper big-h1">
                <h1>DREAM TEAM <br/> REAL PLAYERS</h1>
                <p>Create your dream squad of professional League of Legends players and lead them to glory in the world's most popular fantasy esports game.</p>
                <Link to='/'>
                <Button buttonStyle='btn--outline' buttonSize='btn--large'>PLAY NOW</Button>
              </Link>
            </div>
        </div>
    )
}

export default CTA