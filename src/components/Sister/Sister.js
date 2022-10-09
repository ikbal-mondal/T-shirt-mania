import React, { useContext } from 'react';
import { MoneyContext } from '../../Grandpa/Grandpa';

const Sister = ({house}) => {
    const [money , setMony]= useContext(MoneyContext)
    return (
        <div>
            <h2>Sister</h2>
            <p><small>House:{house}</small></p>
            <p><small>{money}</small></p>
            <button className='bg-slate-900 px-4 py-1 rounded-lg text-white my-4' onClick={()=>  setMony(money + 1000)}>Add 1000</button>
        </div>
    );
};

export default Sister;