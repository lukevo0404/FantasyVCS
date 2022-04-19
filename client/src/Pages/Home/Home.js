import React from 'react'
import Hero from './Hero'
import Features from './Features'
import './Home.css'
import HowToPlay from './HowToPlay'

function Home() {
    return (
        <>
            <img src='/images/background.svg' id='background' />
            <Hero />
            <div className="screenshot-container">
                <img src='/images/hero-screenshot.png' id='hero-screenshot' />
                <img src='/images/Emblem_Platinum.png' id='emblem1' />
                <img src='/images/Emblem_Diamond.png' id='emblem2' />
            </div>
            <hr id='hr1' />
            <Features/>
            <HowToPlay/>
        </>
    )
}

export default Home