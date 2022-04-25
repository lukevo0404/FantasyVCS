import React from 'react'
import { Navbar } from '../../components/Navbar'

import './Hero.css'

function Hero() {
  return (
    <>
    <div className="hero-container">
        <Navbar/>
        <div className="title-text-wrapper">
            <h1>DREAM TEAM <br/> REAL PLAYERS</h1>
            <p>Create your dream squad of professional League of Legends players and lead them to glory in the world's most popular fantasy esports game.</p>
        </div>
    </div>
    </>
  )
}

export default Hero