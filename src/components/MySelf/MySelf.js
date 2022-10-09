import React from 'react';
import Special from '../../Special/Special';

const MySelf = ({house , ring}) => {
    return (
        <div>
            <h3>Myself</h3>
            <p><small>House: {house}</small></p>
            <section>
                <Special></Special>
            </section>
        </div>
    );
};

export default MySelf;