import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {
  
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          { this.props.favorites?.map(m=>(
            <div className="fav" key={m.imdbID}>
              <Link to={`/movie/${m.imdbID}`}>
                <p>{m.Title}</p>
              </Link>
                <button onClick={()=> this.props.removeMovieFavorite(m.imdbID)}>X</button>
             
            </div>
          ))
          }
        </ul>
      </div>
    );
  }
}
const mapStateToPromps= (state)=>{
  return {
    favorites: state.moviesFavourites
  }
}


export default connect(mapStateToPromps,{removeMovieFavorite})(ConnectedList);
