import React, {Components, useState} from 'react';
import MovieGrid from '../components/MovieGrid';
import { API_KEY_ONLY, API_URL, IMAGE_URL} from '../globals/variables';


// const [movieData, setMovieData] = useState(null);

const Home = () => {
	
const currentPage = 0;
const sort = 0;






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