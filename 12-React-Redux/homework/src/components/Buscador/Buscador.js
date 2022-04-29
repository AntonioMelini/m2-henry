import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {getMovies,addMovieFavorite} from "../../actions"
import store from "../../store";



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" >BUSCAR</button>
        </form>
        <ul>
         {  this.props.movies?.map(m=>(
           <div className="fav" key={m.imdbID}>
              <Link to={`/movie/${m.imdbID}`}>
              <p >{m.Title}</p>
              </Link>
              <button onClick={()=> this.props.addMovieFavorite({Title:m.Title, imdbID:m.imdID}) }>FAV</button>
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
    movies: state.moviesLoaded
  }
}

export default connect(mapStateToPromps,{ getMovies, addMovieFavorite})(Buscador);



