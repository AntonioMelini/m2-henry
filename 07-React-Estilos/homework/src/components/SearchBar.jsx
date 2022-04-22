import React from 'react';
import {FaSearch} from 'react-icons/fa';
import s from "./SearchBar.module.css"



export default function SearchBar(props) {
  // acá va tu código
  return (<div className={s.SearchBar}>
            <input placeholder="agregar una ciudad.." id='input'></input>
            <button onClick={()=>props.onSearch("agregando ciudad")}>
              <FaSearch/>
            </button>
            
          </div>
  )
};