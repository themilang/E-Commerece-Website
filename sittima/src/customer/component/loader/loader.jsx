// Loader.js
import React from 'react';
import logo from '../../../assets/index'; // Update with your logo path
import './loader.css';

const Loader = () => {
  return (
    <div className="loader flex flex-col">
      <img src={logo} alt="Loading..." />
      <h2 className='text-white  animate-pulse'>Sittima</h2>
    </div>
  );
};

export default Loader;
