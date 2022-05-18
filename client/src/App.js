import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn';
import Rules from './Pages/Rules';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
//import Register from './Pages/register';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignIn/>}></Route>
        <Route path="/rules" element={<Rules/>}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
