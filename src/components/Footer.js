import React from 'react';

const d = new Date();
const y = d.getFullYear();

const Footer = () => (
    <footer>
        <p>Created by Heyam Banitorof and Vidhi Shukla &copy;{y}</p>
    </footer>
);

export default Footer;
