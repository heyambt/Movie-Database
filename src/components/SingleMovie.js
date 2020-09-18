import React from 'react';
//import { useParams } from 'react-router-dom';

const SingleMovie = () => {

    let {id} = useParams();
    console.log(id);
    return(
            <section className='single-movie-section'>
                <div className='row'>
                  
                </div>
                    
            </section>
       

    );
}


export default SingleMovie;