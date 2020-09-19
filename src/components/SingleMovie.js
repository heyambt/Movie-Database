import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMovie = () => {

    let {id} = useParams();
    console.log(id)

   

   
    return(
            <section className='single-movie-section'>
                    <h2>{id}</h2>
                     
                    <p>call for single movie from tmdb </p>
					
                    
            </section>
            
       

    );
    
}


export default SingleMovie;