import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from "react-router-dom"
 


function Nav({onSearch}) {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
        <SearchBar
          onSearch={onSearch}
        />
       
         
        
    </nav>
    <div className="link">
      <Link to="/">
        Cards
      </Link>
      <Link to="/about">
        About
      </Link>
    </div>
    </>

  );
};

export default Nav;
