import  { useReducer, useState } from 'react';

const initialState = [];

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, { ...action.payload, quantity: 1}];
        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== action.payload.id);
        case "CLEAR_CART":
            return [];
    
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const UseReducer2 = () => {

    const [cart, dispatch] = useReducer(cartReducer, initialState);

    const handleAdd = (item) => {
        dispatch({ type: "ADD_ITEM", payload: item });
    }

    const handleRemove = (item) => {
        dispatch({ type: "REMOVE_ITEM", payload: item});
    }

    const handleClearCart = () => {
        dispatch({ type: "CLEAR_CART"});
    }
    
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    )

  return (
    <div>
      <h2 className='font-semibold text-xl'>Shopping Cart</h2>

      <ul className='flex flex-col mt-2 gap-1'>
        {cart.map((item) => (
            <li key={item.id} className='px-4 py-2 rounded-md bg-gray-700'>
                <span>
                    {item.name} - ${item.price}
                </span>
                <span> Quantity: {item.quantity} </span>
                <button className='font-bold ml-4 underline' onClick={() => handleRemove(item)}>Remove</button>
            </li>
        ))}
      </ul>

        <div className='flex flex-col items-center mx-auto gap-2'>
        
            <h3 className='font-semibold mt-2'>Total: ${totalPrice}</h3>

            <button className='block py-1 px-4 bg-green-300 font-bold mb-1' onClick={() => handleAdd({ id: Date.now(), name: "New Item", price: 10})}>
                Add Item
            </button>

            <button className='block py-1 px-4 bg-red-300 font-bold mb-1'   onClick={handleClearCart}>
                Empty Cart
            </button>
        </div>

      
    </div>
  )
}

export default UseReducer2;
