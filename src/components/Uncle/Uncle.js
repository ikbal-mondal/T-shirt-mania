import React, { useContext } from 'react';
import { MoneyContext } from '../../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money,setMony] = useContext(MoneyContext)
    return (
        <div>
            <h2>uncle</h2>
            <p><small>House:{house}</small></p>
            <p><small>Money:{money}</small></p>
        </div>
    );
};

export default Uncle;