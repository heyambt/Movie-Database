import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import movieLogo from '../images/movieLogo.png';

const Header = () => (
    
	<header >
        <div className="heading">

           <Link to={'/'}> <img className='logo' src = {movieLogo} alt="Logo" /></Link>
            <div className="menu">
		    <nav >
                {/* <button className='hamburger' id='hamburger'>
                    <i className='fas fa-bars'></i>
                </button> */}
                
                <ul className='nav-ul' id='nav-ul'>
                    <li className='home'><NavLink  to={'/'} exact>Home</NavLink></li>
                    <li className='about'><NavLink to={'/about'}>About</NavLink></li>
                    <li className='favourites'><NavLink to={'/favourites'}>Favourites</NavLink></li>
                </ul>
	        </nav>
            </div>
        </div>
    	

		
	</header>
);



export default Header;
