import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY_ONLY, API_URL, IMAGE_URL} from '../globals/variables';
import {getStorage, isItemInStorage, setStorage, removeFromStorage } from '../storageMaker';


const SingleMovie = () => {
    const initialMovieData = [];

    const[movieDetails, setMovieDetails] = useState(null);
    const[favIndex, setFavIndex] = useState(-1);
    

    let {id} = useParams();
    console.log(id)

    const [error, setError] = useState(false);

    const handleAddFavorite = (movie) => {
        if(isItemInStorage({movie}) === true )
        {
             setError(true);
             return;
        }
        if(error === true){
            setError(false);
        }
        setStorage(movie);
        setFavIndex(1);

    }

    const removeFromFavorite = (movie) => {
        removeFromStorage(movie);
        setFavIndex(-1);
    }   

    useEffect(() => {
        const getFavs = getStorage()

        let indexFetched = getFavs.findIndex(function(item){
            return item.id == id
        });
        
        setFavIndex(indexFetched);
    },[])


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
               
                    {movieDetails && movieDetails.map((movie) => {
                        return (
                            <div className="single-movie">

                            <div className="poster-and-button">
                                <img className="single-poster" src={IMAGE_URL + movie.poster_path} alt='movie-poster'/> 
                                <div className='single-fav'>
                                    {favIndex >= 0 ? (
                                        <button className='remove-fav'onClick={() => {removeFromFavorite(movie)}}>Remove Favorite</button>
                                    ):
                                    (
                                        <button className='add-fav'onClick={()=> {handleAddFavorite(movie)}} style={{color: 'white'}}>Add to Favorites</button>
                                   )}
                                </div>
                            </div>

                            <div className="single-info">
                                <div className="single-title">{movie.title}</div>
                                <div className='rating'>Rate: {movie.vote_average}</div>
                                <div className='release-date'>{movie.release_date}</div> 
                                <div className='single-summary'><p>{movie.overview}</p></div>
                                <div className='run-time'>Run Time: {movie.runtime} mins</div>
                            </div>
                              
                           
                                
                            </div>
                        )
                    })}                   
            
					
        </section>              

    );
    
}


export default SingleMovie;