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
                <p>To join the game select a fantasy League of Legends squad of 5 players, consisting of:
                </p>
                <ul>
                    <li>1 Top laners</li>
                    <li>1 Junglers</li>
                    <li>1 Mid laners</li>
                    <li>1 Bot laners</li>
                    <li>1 Supports</li>
                </ul>
                <h5>Scoring</h5>
                <table>
                    <tr>
                        <th>Action</th>
                        <th>Points</th>
                    </tr>
                    <tr>
                        <th>For every 2 kills</th>
                        <th>1</th>
                    </tr>
                    <tr>
                        <th>For every deaths</th>
                        <th>-1</th>
                    </tr>
                    <h1>KDA</h1>
                    <tr>
                        <th>For every 3.0 KDA</th>
                        <th>1</th>
                    </tr>
                    <tr>
                        <th></th>
                    </tr>
                </table>
            
            
        </div>
    )
}

export default Rules