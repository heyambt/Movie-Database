import React from 'react';
import { useParams } from 'react-router-dom';
import MovieGrid from './MovieGrid';

const SingleMovie = () => {

    let {id} = useParams();
    console.log(id)
    
   

   
    return(
            <section className='single-movie-section'>
                    <div className='single-movie'>
                        {id} 
                    </div>
                 
                        
                    {/* call for single movie from tmdb */}
					
            </section>
            
       

    );
    
}


export default SingleMovie;