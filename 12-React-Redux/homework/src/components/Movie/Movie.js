import React from 'react';
import { connect } from 'react-redux';
import { getMoviesDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){ 
        this.props.getMoviesDetail(this.props.match.params.id);
    }

    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.movie.Title}</h3>
                <p>{this.props.movie.Plot}</p>
            </div>
        );
    }
}
const mapStateToPromps= (state)=>{
    return{
    movie:state.moviesDetail
    }
}


export default connect(mapStateToPromps,{getMoviesDetail})(Movie)
