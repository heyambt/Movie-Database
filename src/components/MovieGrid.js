import React from 'react';
import {IMAGE_URL, STORAGE_YOUR_FAVORITES} from '../globals/variables';
import Favorite from './Favorite';
import { Link } from 'react-router-dom';

const MovieGrid = ({movie}) => {

    const movieDivs = (arr) => {
            return arr.map((movie,i) => {
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
