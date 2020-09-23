import React from 'react';
import tmdblogo from '../images/tmdb-logo.svg';

const About = () => (
    <div className='about-wrapper'>
    <main>
        <h2>
        Know us
        </h2>
        <div className='about'>
        <p>
        The Reels App is an online database, designed and created by Heyam Banitorof and Vidhi Shukla, which allows you to search through movies and see the information related to them online.This app uses The Movie Database (TMDB) as its source of data.</p> 
        <p>
        Heyam and Vidhi are both web developer and UX/UI designer based in Vancouver. They both had different backgrounds and experiences before they changed their career to web development. Their goal now is to make web a better place for everyone.

        </p>
        <img  className = 'tmdb'src={tmdblogo} />
        
        </div>
        <div className='tmdb-info'> <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p></div>
       
    </main>
    </div>
);


export default About;