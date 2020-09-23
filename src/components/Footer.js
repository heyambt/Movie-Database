import React from 'react';

const d = new Date();
const y = d.getFullYear();

const Footer = () => (
    <footer className='footer-info'>
        <p>Created by Heyam Banitorof and Vidhi Shukla </p>
        <p>&copy;{y} | Reels</p>
    </footer>
);

export default Footer;
