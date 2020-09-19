import React, {Components, useState, useEffect} from 'react';
import MovieGrid from '../components/MovieGrid';
import {API_KEY_ONLY , API_URL} from '../globals/variables';

const Home = () => {
	
// const currentPage = 0;
// const sort = 0;
const initialSelection = 'popular';

const [movieData, setMovieData] = useState(null);
const [selection, setSelection] = useState(initialSelection);

// Event Handlers
const handleFormSubmit = (e) => {
    setSelection(e.target.elements.selection.value)
    e.preventDefault()
}

const handleChangeSelection = (e) => {
    
    // Create a current movie Obj
    // const currentSelectionObj = {
    //     selection: currentSelection
    // }
    console.log(e.target.value)
    
    // Update our current movie state
    setSelection(e.target.value);

}

// useEffect will run on component mounting and if 
    // the city or country changes...
    useEffect(() => {
        const fetchMovies = async (selection) => {
            // Make our API call here...
            const res = await fetch( API_URL+'movie/'+selection+'/?api_key='+API_KEY_ONLY+'&language=en-US&page=1');
            let data = await res.json(); 
           // data = twelveMovies(data.list);
            console.log(data);
            setMovieData(data.results);

        }     
        fetchMovies(selection);
    }, [selection])
	return(
       
     <main>
		 <div className='wrapper'>
		<section className='sort'>
				
			<div className='sort-movie-by'>
				{/* <h3>Movie</h3> */}
			<form onSubmit= {handleFormSubmit}>
				<label for="sort-movie">What's On</label>
                <br/>
					<select name="selection" value={selection} onChange={handleChangeSelection}>
						<option value="popular">Popular</option>
						<option value="top_rated">Top Rated</option>
						<option value="now_playing">Now Playing</option>
						<option value="upcoming">Upcoming</option>
					</select>
				{/* <button>Select</button> */}
			</form> 
            </div>
		</section>
      
     {movieData && <MovieGrid movie={movieData} />}
        
        </div>  
    </main>
)};

export default Home;