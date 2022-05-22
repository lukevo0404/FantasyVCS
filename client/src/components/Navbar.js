// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import authServices from '../Pages/Sign In/auth.services';

const STYLES = ['nav-trans', 'nav-solid']

export const Navbar = ({ navStyle }) => {
  const checkNavStyle = STYLES.includes(navStyle) ? navStyle : STYLES[0];

  const [loggedIn, setloggedIn] = useState(false)

  function loginCheck() {
    if (localStorage.getItem("user")) {
      setloggedIn(true)
    } else {
      setloggedIn(false)
    }
  }

  useEffect(() => {
    loginCheck()
  }, [])

  return (
    <>
      <nav className={`nav-wrapper navbar navbar-expand-lg navbar-dark container-fluid ${checkNavStyle}`}>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand col-3' >
            <img src='logo-horizontal.svg' id='nav-logo' />
          </Link>
          <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#nav-main'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end col-7" id="nav-main">
            <div className="navbar-nav">
              <a href="/#features" className='nav-item nav-link'>Features</a>
              <a href="/#howtoplay" className='nav-item nav-link'>How To Play</a>
              <Link to='/teampick' className='nav-item nav-link' >
                Pick Your Team
              </Link>
              <Link to='/dashboard' className='nav-item nav-link' >
                Dashboard
              </Link>
              {loggedIn ? ""
                : <Link to='/' className='nav-item nav-link' >
                <Button buttonStyle='btn--outline'>PLAY NOW</Button>
              </Link>}
              {loggedIn ? <a id="logout" className='nav-item nav-link' style={{ color: "#616161", cursor: "pointer" }} onClick={authServices.logout}>Log out</a>
                : ""}

            </div>
          </div>
        </div>
      </nav>
    </>
  )
};