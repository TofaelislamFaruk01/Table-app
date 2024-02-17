import React from 'react';
import download from '/projects/my-app2/src/download.png'
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <h2>Table Tittle</h2>
            <img src={download} alt="" srcset="" />

            
        </div>
    );
};

export default Header;