import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return(
        <div id='navbar'>
            <button><Link to="/About">About</Link></button>
            <button><Link to="/Projects">Projects</Link></button>
            <button><Link to="/Videos">Videos</Link></button>
            <button><Link to="/Frontline">Frontline Coding</Link></button>
            <button><Link to="/Blog">Blog</Link></button>
            <button><Link to="/Contact">Contact</Link></button>
      </div>
    )
}

export default NavBar;


