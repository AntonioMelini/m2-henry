import React, {useState} from 'react';
import './App.css';
import Cards from "./components/Cards.jsx"
import Nav from "./components/Nav.jsx"

export default function App() {
  const [Cities,setCities] = useState([]);


  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
    .then(res => res.json())
    .then(recurso=>{
      const res={
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
      }
      setCities(oldcity=>[...oldcity,res])
    })
    
  }
  function onClose(id){
    setCities(oldcity=>oldcity.filter(c=>c.id !== id))
  }


  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={Cities} onClose={onClose}/>
      
    </div>
  );
}
