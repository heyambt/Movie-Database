import React from 'react';

const SearchBar = () => {
    return (
        <section>
        <div className='searchbar-wrapper'>
				<form className='search-box-form'>
					<input type='text' name='search' placeholder='Search for movie'></input>
				</form>
        </div>	
        </section>
    )
}
export default SearchBar;

