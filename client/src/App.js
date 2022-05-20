import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
// import SignIn from './Pages/Home/Sign In/SignIn';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/signin" element={<SignIn />}></Route> */}
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
