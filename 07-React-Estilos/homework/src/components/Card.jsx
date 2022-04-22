import React from 'react';
import s from "./Card.module.css"
import {IoCloseCircle} from "react-icons/io5"
import CardTemps from "./CardTemps"

export default function Card(props) {
  // acá va tu código
  return (
    
    <div className={s.card}>
      <button onClick={props.onClose} className={s.boton} >
        <IoCloseCircle/>
      </button>
      <span className={s.title}>{props.name}</span>

        <CardTemps label="min" value={props.min} />
        <CardTemps label="max" value={props.max} />
        
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen not found" className={s.img}/>
          
     </div>
  );
}
