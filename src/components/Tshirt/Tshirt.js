import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt, handleAddToCart}) => {
    const {picture,name,price} = tshirt
    return (
        <div className='t-shirt shadow-2xl rounded-2xl text-center p-4'>
            
            <img className='rounded-2xl mx-auto mb-3' src={picture} alt="" />
             <h2 className='text-2xl'> Name: {name}</h2>
             <p className='font-extralight'>Price: {price}</p>
             <button onClick={() => handleAddToCart(tshirt)} className='bg-pink-300 px-6 py-2 m-3 rounded hover font-semibold'>Buy this </button>
        </div>
    );
};

export default Tshirt;