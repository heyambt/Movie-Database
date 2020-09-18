import React, {Components, useState, useEffect} from 'react';
import MovieGrid from '../components/MovieGrid';
import {API_KEY_ONLY , API_URL, DEFAULT_PAGE} from '../globals/variables';

const Home = () => {
	
const currentPage = 0;
const sort = 0;
const initialSelection = 'popular';

const [movieData, setMovieData] = useState(null);
const [selection, setSelection] = useState(initialSelection);

// Event Handlers

const handleChangeSelection = (currentSelection) => {
    
    // Create a current City Obj
    const currentSelectionObj = {
        selection: currentSelection
    }
    
    // Update our current city state
    setSelection(currentSelection);

}

// useEffect will run on component mounting and if 
    // the city or country changes...

        const fetchMovies = async (selection) => {
            // Make our API call here...
            const res = await fetch( API_URL+'movie/'+selection+'/?api_key='+API_KEY_ONLY+'&language=en-US&page=1');
            let data = await res.json(); 
           // data = twelveMovies(data.list);
            console.log(data);
            setMovieData(data.results);

        }     
        fetchMovies(selection);

	return(
     <main>
		
		<section className='sort'>
				
			<div className='sort-movie-by'>
				<h3>Movie</h3>
			<form>
				<label for="sort-movie">What's On</label>
					<select name="selection" value={selection} handleChangeSelection={handleChangeSelection}>
						<option value="popular">Popular</option>
						<option value="toprated">Top Rated</option>
						<option value="nowplaying">Now Playing</option>
						<option value="upcoming">Upcoming</option>
					</select>
				<button>Select</button>
			</form> 
			
			</div>
		</section>
        <div className="twel">
             <h3>Movie detail</h3>
             {movieData && <MovieGrid movie={movieData} />}
        </div>   
    </main>
)};

export default Home;