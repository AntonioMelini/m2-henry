import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (<div>
            <input id='input'></input>
            <button onClick={()=>props.onSearch("agregando ciudad")}>agregar</button>
            
          </div>
  )
};