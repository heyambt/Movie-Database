import React from 'react';



const MovieGrid = ({movie}) => {
    
        const movieDivs = (arr) => {
            return arr.map((movie, i) => {
                return(
                <div className={`movie-0${i + 1}`} key={i}>
                <p>Movies in 6 columns go here</p>
                <div className='movie-poster'>
                /<figure></figure>
                </div>
                <div className='release-date'>{movie.date}</div>
                <div className='rating'>{movie.rate}</div>
                <div className='summary'></div>
            
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

