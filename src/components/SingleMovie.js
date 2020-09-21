import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_KEY_ONLY, API_URL, IMAGE_URL} from '../globals/variables';


const SingleMovie = () => {
    const initialMovieData = [];

    const[movieDetails, setMovieDetails] = useState(null)

    let {id} = useParams();
    console.log(id)

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
                            <ul>   
                                <li>{movie.title}</li>
                                <li>{movie.vote_average}</li>
                                <li>{movie.release_date}</li> 
                                <li>{movie.overview}</li>
                                <img className="poster" src={IMAGE_URL + movie.poster_path} alt='movie-poster'/>
                                <li>{movie.runtime}</li>
                            </ul>
                        )
                    })}                   
            </div>
					
        </section>              

    );
    
}


export default SingleMovie;