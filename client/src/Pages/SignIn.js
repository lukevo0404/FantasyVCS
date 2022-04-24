import React, { useEffect, useState } from 'react'
import Hero from './Home/Hero copy'
import { Link, useHistory } from "react-router-dom";
import './Home/Home.css'


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <img src='/images/hero-image.svg' id='background' />
            <Hero />
            <div className="login">99k
                <div className="login__container">
                    <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                    />
                    <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                    <button
                    className="login__btn"
                    >
                    Login
                    </button>
                    <button className="login__btn login__google">
                    Login with Google
                    </button>
                    <div>
                    <Link to="/reset">Forgot Password</Link>
                    </div>
                    
                </div>
            </div>
        );    
            
            
        </>
    )
}

export default SignIn