import React, { useContext } from 'react';
import { RingContext } from '../../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h2>Friend </h2>
            <p><small>Ring: {house}</small></p>
            <button className='bg-slate-900 px-6 py-1 rounded-lg text-white my-4' onClick={()=> setHouse(house -1)}>Decrease</button>
        </div>
    );
};

export default Friend;