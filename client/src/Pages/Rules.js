import React, { useEffect, useState } from 'react'
import Hero from './Home/Hero copy'
import { Link, useHistory } from "react-router-dom";
import './Home/Home.css'


function Rules() {
    return (
        <div className='rules-container'>
            <Hero />
            
                <h5>
                    <span>Selecting Your Initial Squad</span>
                </h5>
                <h5>Squad Size
                </h5>
                <p>To join the game select a fantasy League of Legends squad of 10 players, consisting of:
                </p>
                <ul>
                    <li>2 Top laners</li>
                    <li>2 Junglers</li>
                    <li>2 Mid laners</li>
                    <li>2 Bot laners</li>
                    <li>2 Supports</li>
                </ul>
            
            
        </div>
    )
}

export default Rules