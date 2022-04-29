import React from 'react';
import './Timer.css';
import { useState,useEffect,useRef} from 'react';


const Timer = () => {
  const [segundos,setSegundos]=useState(0)
  const [activo,setActivo]=useState(false)
  const [tipo,setTipo]=useState("contador")

  const myref=useRef(null);

  function agregarsegundos(){
    let ref=myref.current.value;
    setSegundos(ref);
  }
  
 


  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'contador') {
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);


  function toggle(){
    if(activo===false){setActivo(true)}
    else{setActivo(false)}
    
  }
  function reset(){
    setSegundos(0);
    setActivo(false);
  }
  function cambiotipo(){
    if(tipo==="contador"){setTipo("Cuenta Regresiva")}
    else{setTipo("contador")}
  }
  return (
    <div className="app">
      <div className="time">
        {segundos} s
      </div>
      <div className="row">
        <button className="button-primary" onClick={toggle}>
          {activo? "pausa" : "inicio"}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambiotipo}>
          {tipo}
      </button>
      {tipo ==="Cuenta Regresiva" && <input type="number" ref={myref} onClick={agregarsegundos } placeholder="Ingresa Segundos" autoComplete="off" />}
    </div>
  );
};

export default Timer;