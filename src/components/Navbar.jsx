import React from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <div class="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>     
        <li><a href="https://www.linkedin.com/in/daniel-rojas-be/" title="Connect with me on LinkedIn"><img class="LinkedInLogo" src={linkedin} alt="LinkedIn" /></a></li>
        <li><a href="https://github.com/Daniel-Rojas-B" title="Collaborate with me on GitHub"><img class="GitHub" src={github} alt="GitHub" /></a></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;