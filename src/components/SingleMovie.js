import React from 'react';
//import { useParams } from 'react-router-dom';

const SingleMovie = () => {

    let {id} = useParams();
    console.log(id);
    return(
            <section className='single-movie-section'>
<<<<<<< HEAD
                    <h2>Movie Name</h2>
                    <div className="movie">
					<div className='movie-poster'>
					<figure><img src="" alt="" /></figure>
					</div>			
					<div className='movie-context'>
					<div className='release-date'></div>
					<div className='rating'></div>
					<div className='summary'><p></p></div>
                        
                    {/* call for single movie from tmdb */}
					</div>
                    </div>	
=======
                <div className='row'>
                  
                </div>
                    
>>>>>>> 956967171c792e08fa31222ae70fe5453d487ce1
            </section>
       

    );
}


export default SingleMovie;