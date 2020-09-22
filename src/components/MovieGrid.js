import React, { useState, useEffect} from 'react';
import {IMAGE_URL, STORAGE_YOUR_FAVORITES} from '../globals/variables';
import { Link } from 'react-router-dom';
import { isItemInStorage, getStorage, setStorage, removeFromStorage } from '../storageMaker';

const MovieGrid = ({movie}) => {

    const[error, setError] = useState(false);

    const [faveMovies, setFaveMovies] = useState(getStorage());


    const handleAddFavorite = (movie) => {
        if(isItemInStorage({movie}) === true )
        {
             setError(true);
             return;
        }
        if(error === true){
            setError(false);
        }
        const movies = setStorage(movie);
        setFaveMovies(movies);
        
    }

    const removeFromFavorite = (movie) => {
        const movies = removeFromStorage(movie);
        setFaveMovies(movies);
        // handleRemoveFav(movies);
    } 

    const movieDivs = (arr) => {
            return arr.map((movie,i) => {
            
            // const getFavs = getStorage()

            let indexFetched = faveMovies.findIndex(function(item){
                return item.id == movie.id
            });
        
             console.log(indexFetched);

            return(
                <div className="movies-list">
                <div className={`movie-0${i + 1}`} key={i}>
      
                <img className="poster" src={IMAGE_URL + movie.poster_path} alt='movie-poster'/>
                  
                <div className="title">{movie.title}   </div>
                
                <div className='rating'>{movie.vote_average}</div>
                <div className='release-date'>{movie.release_date}</div>
                <div className='summary'><p>{movie.overview}</p></div>
              
                </div>

                <div className="movie-info">
                <div className='link-to-moreinfo'><Link to={'/singlemovie/' + movie.id}>
                   
                   <button>More Info</button></Link></div>
                   <div className='single-fav'>
                        {indexFetched >= 0 ? (
                            <button onClick={() => {removeFromFavorite(movie)}} style={{color: 'red'}}>Remove Favorite</button>
                         ):
                         (
                            <button onClick={()=> {handleAddFavorite(movie)}} style={{color: 'white'}}>Add to Favorites</button>
                        )}
                    </div>
                
                
                 
                     
                </div>
                
                </div>
                );
            });
        }
        

        return (
            <div className="twelve-movie-grid">
                {movieDivs(movie)}
                
            </div>
        );
    
};
export default MovieGrid;
