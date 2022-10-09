
import { createContext, useState } from 'react';
import Aunty from '../components/Aunty/Aunty';
import Father from '../components/Father/Father';
import Uncle from '../components/Uncle/Uncle';
import './Grandpa.css'

 export const RingContext = createContext('matir ring')
export const MoneyContext = createContext(555)
const Grandpa = () => {
     const [house,setHouse] = useState(1)
     const [money, setMony] = useState(555)
      
    return (
       
      <RingContext.Provider value={[house,setHouse]}>
        <MoneyContext.Provider value={[money,setMony]}>
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Father house={house} ></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>

        </MoneyContext.Provider>
      </RingContext.Provider>
    );
};

export default Grandpa;