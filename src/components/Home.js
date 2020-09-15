import React, {Components} from 'react';


const Home = () => {
	
	return(
    <main>
		 <section>
        <div className='searchbar-wrapper'>
				<form className='search-box-form'>
					<input type='text' name='search' placeholder='Search for movie'></input>
				</form>
        </div>	
        </section>
		<section>
				
			<div className='sort-movie-by'>
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
			<section className='list-0f-movies'>
				<div className='movies-list'>
					<div className="movie-01">
					<div className='movie-01-poster'>
						<figure>
							<a href></a>
						</figure>
						
					</div>
						<div className='movie-01-info'></div>
						
					</div>

				</div>
			</section>
			
		</section>
    </main>
);
	}



export default Home;