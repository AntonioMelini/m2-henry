import s from "./CardTemp.module.css"

function CardTemps ({label, value}){
    return(
      <div className={s.CardTemp}>
        <label>{label}</label>
        <span>{value}</span>
      </div>
    );
  }
export default CardTemps;