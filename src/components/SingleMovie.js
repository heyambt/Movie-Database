import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY_ONLY, API_URL, IMAGE_URL} from '../globals/variables';
import {isItemInStorage, setStorage } from '../storageMaker';


const SingleMovie = () => {
    const initialMovieData = [];

    const[movieDetails, setMovieDetails] = useState(null)

    let {id} = useParams();
    console.log(id)

    const [error, setError] = useState(false);

    const handleAddFavorite = (e) => {
        console.log(e);
        // if(isItemInStorage({movie}) === true ){
        //     setError(true);
        //     return;
        // }
        // if(error === true){
        //     setError(false);
        // }
        // setStorage(movie);   
    }

    useEffect(() => {
        const fetchDetails = async () => {
            // Make our API call here...
            const res = await fetch(API_URL + 'movie/'+id+'?api_key='+API_KEY_ONLY+'&language=en-US');
            let data = await res.json(); 
            console.log(data);
            initialMovieData.push(data);
            setMovieDetails(initialMovieData);
    
        }     
        fetchDetails(); 
    },[])
   
    return(
            <section className='single-movie-section'>
                <div className='single-movie'>
                    {movieDetails && movieDetails.map((movie) => {
                        return (
                            <div className="single-movie">

                            <div className="poster-and-button">
                                <img className="single-poster" src={IMAGE_URL + movie.poster_path} alt='movie-poster'/> 
                                <div className='single-fav'> <button onClick={handleAddFavorite}>Add to Favorites</button></div>
                            </div>

                            <div className="single-info">
                                <div className="single-title">{movie.title}</div>
                                <div className='rating'>Rate: {movie.vote_average}</div>
                                <div className='release-date'>{movie.release_date}</div> 
                                <div className='single-summary'>{movie.overview}</div>
                                <div className='run-time'>Run Time: {movie.runtime} mins</div>
                            </div>
                              
                           
                                
                            </div>
                        )
                    })}                   
            </div>
					
        </section>              

    );
    
}


export default SingleMovie;