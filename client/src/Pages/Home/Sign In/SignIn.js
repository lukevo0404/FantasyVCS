import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import Hero from "../Hero"
import './../Home.css'
import './SignIn.css'
import userService from './user.service';


function SignIn() {
    const endPoint = "http://localhost:8080"
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onChangeValue = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            const response = await axios.post(endPoint + "/signin", { ...user })
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('isLogin', true)
            console.log(localStorage.getItem("accessToken"))
            
            const response2 = await axios.get(endPoint + '/api/test/user', { headers:  {"x-access-token": localStorage.getItem("accessToken")} })
            console.log(response2.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <img src='/images/hero-image.svg' id='background' />
            <Hero/>
            <div className="login">
                <div className="login__container">
                    <input
                    type="email"
                    id="email" name="email"
                    className="login__textBox"
                    value={user.email} onChange={onChangeValue}
                    placeholder="E-mail Address"
                    />
                    <input
                    type="password"
                    className="login__textBox"
                    id="password" name="password"
                    value={user.password} onChange={onChangeValue}
                    placeholder="Password"
                    />
                    <button
                    className="login__btn"
                    onClick={loginSubmit}
                    >
                    Login
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