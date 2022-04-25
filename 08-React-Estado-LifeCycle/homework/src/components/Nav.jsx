import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';


function Nav({onSearch}) {
  return (
    <div className="nav-header">
     
      <img src={Logo} alt="Logo henry" />
      <p>Henry - Weather App</p>
      <SearchBar onSearch={onSearch} />
   
    </div>
  );
};

export default Nav;
