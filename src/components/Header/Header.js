import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-center my-5'>
          <Link className='bg-stone-900 text-white px-6 py-3 mx-3 rounded' to='/'>Home</Link>
          <Link className='bg-stone-900 text-white px-6 py-3 mx-3 rounded' to='/order'>Orders</Link>
          <Link className='bg-stone-900 text-white px-6 py-3 mx-3 rounded' to='/grandpa'>Grandpa</Link>
          <Link className='bg-stone-900 text-white px-6 py-3 mx-3 rounded' to='/about'>About</Link>
        </nav>
    );
};

export default Header;