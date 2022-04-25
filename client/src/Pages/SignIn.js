import React, { useEffect, useState } from 'react'
import Hero from './Home/Hero copy'
import { Link, useHistory } from "react-router-dom";
import './Home/Home.css'
import './Login.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    
    //const history = useHistory();
    //useEffect(() => {
    //    if (user) history.replace("/");
    //}, [user, loading]);
    return (
        <>
            <img src='/images/hero-image.svg' id='background' />
            <Hero />
            <div className="login">
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
                    onClick={() => signInWithEmailAndPassword(email, password)}
                    >
                    Login
                    </button>
                    <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                    </button>
                    <div>
                    <Link to="/reset">Forgot Password</Link>
                    </div>
                    <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                    </div>
                </div>
            </div> 
        </>
    )
}

export default SignIn