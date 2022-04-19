import React from 'react'
import Hero from './Hero'
import Features from './Features'
import './Home.css'

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
            <div className="title-text-wrapper">
                <h1>FEATURES</h1>
                <p>Assemble a league, talk some smack, draft players at every position, and go head-to-head with friends and family.</p>
            </div>
            <Features/>
        </>
    )
}

export default Home