import React from 'react';
import Card from './Card';
import s from "./Cards.module.css"


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (<div className={s.Cards}>
            {
             props.cities 
              ? props.cities.map(card => 
              <Card 
              max={card.main.temp_max}
              min={card.main.temp_min}
              name={card.name}
              img={card.weather[0].icon}
              onClose={() => alert(card.name)}
              key={card.id}
              />
              )
                : <h3>no hay ciudades</h3>
             
            }
          </div>
        )
};