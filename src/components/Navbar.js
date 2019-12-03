import React from 'react';
import{Link}from 'react-router-dom'

function Navbar() {

  const Logout =()=> {
    localStorage.clear();
    window.location.href = '/about';
}
  return (
    <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" className="right">
      <li><Link  to="/About">Home</Link></li>
        <li><Link  to="/About">About</Link></li>
        <li><Link to="/Apidatashow">Api</Link></li>
        <li><Link to="/Crud">Crud</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
        <li><Link  onClick={Logout} to="/about">Logout</Link></li>
      </ul>
    </div>
  </nav>
  );
}
export default Navbar;

