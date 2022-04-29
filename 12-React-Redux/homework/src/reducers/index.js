const ADD_MOVI="ADD_MOVIE_FAVORITE";
const REM_MOVI="REMOVE_MOVIE_FAVORITE";
const GET_MOVI="GET_MOVIES";
const DET_MOVI="GET_MOVIES_DETAILS";

const initialState={
    moviesFavourites:[],
    moviesLoaded:[],
    moviesDetail:{},
}

function rootReducer (state=initialState,action){
    if(action.type===ADD_MOVI){
        return{
            ...state,
            moviesFavourites: state.moviesFavourites.concat(action.payload)
            //[...state.moviesFavourites,action.payload]
        }
    }
    if(action.type===REM_MOVI){
        return{
            ...state,
            moviesFavourites:state.moviesFavourites.filter(film=>film.imdbID!==action.payload)
        }
    }
    if(action.type===GET_MOVI){
        return{
            ...state,
            moviesLoaded:action.payload.Search
            
        }
    }
    if(action.type===DET_MOVI){
        return{
            ...state,
            moviesDetail:action.payload
        }
    }
    return state;
}

export default rootReducer;