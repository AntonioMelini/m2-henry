//import fetch from "node-fetch";
const apikey="e6aeb3c2&";

export function addMovieFavorite(payload) {
 return { type: "ADD_MOVIE_FAVORITE", payload };
}
export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload:id};
}


export function getMovies(titulo) {
    return function(dispatch) {
     fetch(`http://www.omdbapi.com/?apikey=${apikey}s=${titulo}`)
     .then(response => response.json())
     .then(json => {
      dispatch({ type: "GET_MOVIES", payload: json });
      });
    };
}
export function getMoviesDetail(id){
    return function(dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=${apikey}i=${id}`)
        .then(response => response.json())
        .then(json => {
         dispatch({ type: "GET_MOVIES_DETAILS", payload: json });
         });
       };
}
