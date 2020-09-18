import React from 'react';
import {IMAGE_URL} from '../globals/variables';
import Favorite from '../components/Favorites';
import { Link } from 'react-router-dom';


const MovieGrid = ({movie}) => {
    
        const movieDivs = (arr) => {
            return arr.map((movie,i) => {
                return(
                <div className={`movie-0${i + 1}`} key={i}>
                <div className='movies'>
                <figure></figure>
                </div> 
                <div className="movies-list">
                  
                 <img className="poster" src={IMAGE_URL + movie.poster_path} />
                  
                <div className="title">{movie.title}   </div>
                
                <div className='rating'>{movie.vote_average}</div>
                <div className='release-date'>{movie.release_date}</div>
                <div className='summary'>{movie.overview}</div>
                <Favorite/>
                </div>
                <div className="movie-info">
                <Link to={'/'}>More Info </Link>
                    {/* <button>More Info</button> */}
                    {/* singlemovie/movie.id --- url parameters */}
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
