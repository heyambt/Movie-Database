import React, {Components, useState} from 'react';
import MovieGrid from '../components/MovieGrid';
import { API_KEY_ONLY, API_URL, IMAGE_URL} from '../globals/variables';



const Home = () => {
	
const currentPage = 0;
const sort = 0;

const [movieData, setMovieData] = useState(null);

// useEffect will run on component mounting and if 
    // the city or country changes...
    useEffect(() => {
        
        const fetchMovies = async () => {
            // Make our API call here...
            const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd4d70b7c00eea5374fcc254ca03e285&language=en-US&page=1');
            let data = await res.json();
            
            data = twelveMovies(data.list);
            console.log(data);
            setMovieData(data);

        }
        fetchMovies();

    },// [city, country])





	return(
    <main>
		
		<section className='sort'>
				
			<div className='sort-movie-by'>
				<h3>Movie</h3>
               <MovieGrid  />
			<form>
				<label for="sort-movie">What's On</label>
					<select name="selection" id="select" form="select-movie">
						<option value="popular">Popular</option>
						<option value="toprated">Top Rated</option>
						<option value="nowplaying">Now Playing</option>
						<option value="upcoming">Upcoming</option>
					</select>
				<button>Select</button>
			</form> 
			
			</div>
		</section>
		<section className='list-0f-movies'>
				<div className='movies-list'>
				
					
				</div>
					
		</section>
		
                
            
    </main>
);
	}



export default Home;
// just to keep them in case
/*	<div className="movie-01">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-02">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-03">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-04">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-05">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-06">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-07">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-08">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-09">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-10">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-11">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
<div className="movie-12">
<div className='movie-poster'>
<figure><img src="" alt="" /></figure>
</div>			
<div className='movie-context'>
    <h3>movie name</h3>
<div className='release-date'></div>
<div className='rating'></div>
<div className='summary'></div>
</div>								
</div>
*/