import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h2>Special </h2>
          <p> Gift: {house}</p>      
          <button className='bg-slate-900 px-6 py-1 rounded-lg text-white my-4' onClick={()=> setHouse(house +1)}>Increase</button>        
        </div>
    );
};

export default Special;