import React from 'react';

export default function Card(props) {
  // acá va tu código

  return (
    <div>
      <button onClick={props.onClose}>x</button>
      <h2>{props.name}</h2>
      <div>
        <p>MIN</p>
        <p>{props.min}</p>
      </div>
      <div>
        <p>MAX</p>
        <p>{props.max}</p>
      </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen not found"/>
    </div>
  )
};



