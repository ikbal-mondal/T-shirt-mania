import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveItem}) => {

   let message; 
   if(cart.length === 0) {

    message = <p> please buy at least on item !!!</p>
   }
   else if (cart.length === 1){

     message = <div>
          <h2>Amar jonno ekta nao </h2>
          <p>Tumar nijer jonno ekta </p>
          <p><small>kinkur jonno ekta nao Please</small></p>
     </div>
   }
   else{

    message = <p>Thanks for buy </p>
   }

    return (
        <div  className='text-center'>
            <h2 className={cart.length === 2 ? `orange`:'purple'}>order summary </h2>
            <h3 className={`bold ${cart.length === 2 ? 'blue': 'yellow'}`}>Order quantity : {cart.length}</h3>
            {
                cart.map(tshirt => <p className='font-semibold mb-5 border-b-2 mt-5'
                key={tshirt._id}
                >
                {tshirt.name}
                <button onClick={ () => handleRemoveItem(tshirt)} className='mx-3 border px-3 py-1'> X</button>
                </p>)
            }
            {
                message
            }
         
          {

            cart.length === 3 ? <p>tumi tinta kine fekecho onek hoye giyeche</p> : <p>kino kino aro kino</p>
          }

                      <p className='my-3 text-xl font-semibold'>and (&&) operator</p>

             {cart.length === 2  && <h2>Double items (2 items )</h2>}  
             <p className='my-3 text-xl font-semibold'>Or Operator (||)</p>  
             {cart.length == 4 || <p> Not a 4 item </p>} 
        </div>
    );
};

export default Cart;


/**
 
Conditional Rendering
1. use element in a variable and then use  if-else to set value 
2. ternary operation condition ? true : false
3. && operator (if condition is true , i want to display something )
4.|| operator (if condition is false , i want to display something )
 */


