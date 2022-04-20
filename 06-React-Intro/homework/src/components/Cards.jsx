import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (<div>franco
            { props.cities
              ? props.cities.map(card => (
                <Card max={card.max} min={card.min} name={card.name} img={card.weather[0].icon} onClose={() => alert(card.name)} />
              ))
               : <h2>no hay ciudades</h2>}
          </div>
        )
};