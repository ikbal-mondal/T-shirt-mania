import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData();
  const [cart,setCart] = useState([])

    const handleAddToCart = tshirts => {
     const exists = cart.find(ts => ts._id === tshirts._id);
     if(exists){

        alert('T-shirt already added ');
     }
     else{
        const newCart = [...cart,tshirts]
        setCart(newCart);
        // alert('successfully added')
     }
   
   }
 
   const handleRemoveItem = tshirt => {
 
     const remaining = cart.filter(ts => ts._id !== tshirt._id );
     setCart(remaining)

   }

    return (
        <div className='home-container'>
         <div className="t-shirt-container">
         {
               tshirts.map(tshirt => <Tshirt
               key={tshirt._id}
               tshirt={tshirt}
               handleAddToCart={handleAddToCart}
               ></Tshirt>) 
            }
         </div>
         <div className="cart-container">
            <Cart cart={cart}
            handleRemoveItem={handleRemoveItem}
            ></Cart>
         </div>
        </div>
    );
};

export default Home;