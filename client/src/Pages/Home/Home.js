import React from 'react'
import Hero from './Hero'
import Features from './Features'
import './Home.css'
import HowToPlay from './HowToPlay'
import CTA from './CTA'

function Home() {
    return (
        <div className='home'>
            <img src='/images/background.jpg' id='background' />
            <Hero />
            <div className="screenshot-container">
                <img src='/images/hero-screenshot.png' id='hero-screenshot' />
                <img className='d-none d-md-block' src='/images/Emblem_Platinum.png' id='emblem1' />
                <img className='d-none d-md-block' src='/images/Emblem_Diamond.png' id='emblem2' />
            </div>
            <hr id='hr1' />
            <Features/>
            <HowToPlay/>
            <CTA/>
        </div>
    )
}

export default Home