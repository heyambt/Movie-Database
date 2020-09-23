import React, { useState, useEffect} from 'react';
import {getStorage} from '../storageMaker';
import MovieGrid from '../components/MovieGrid';

const Favorite = () => {

    const [favMovies, setFavMovies] = useState(null);


    useEffect(() => {
        const getFavs = getStorage()

        if(getFavs !== null){
            setFavMovies([...getFavs])
        }
    },[])

    // const handleRemoveFav = (movies) => {
    //     console.log('removefav');
    //     setFavMovies(movies);
    // }
    if(favMovies && favMovies.length == 0){
        return(
            <h1>Sorry you have no favourited movies. Return to the home page to add a favourite movie.</h1>
        )
    }
    else {
        return(
            <div className="moviewrapper">
                {favMovies && <MovieGrid movie={favMovies}  />}
                
            </div>
        )
    }
}

export default Favorite;
