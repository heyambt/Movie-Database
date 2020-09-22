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
    return(
        <div className="moviewrapper">
            
            {favMovies && <MovieGrid movie={favMovies}  />}
            
        </div>
    )
}

export default Favorite;
