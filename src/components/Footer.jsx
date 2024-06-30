import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <ul className='footer-list'>
        &copy; 2024 Daniel Rojas
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;