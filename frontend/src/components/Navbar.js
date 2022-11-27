import React from "react";
import { FaInstagramSquare } from 'react-icons/fa';

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    
     <nav className = "main-nav">
      <div className = "logo">
        <h2>
          <span>S</span>neakerz
          <span>H</span>ome
        </h2>
      </div>

     <div className ="menu-link">
        <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Brands</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        </ul>
        </div>

       <div className="social-media">
         <ul className="social-media-desktop">
            <li>
              <a 
              href="https://www.instagram.com/mustafariz/">
              <FaInstagramSquare className="instagram"/>
              </a>
              </li>
          </ul>
       </div>

     </nav>
    </>

  )
}

export default Navbar;