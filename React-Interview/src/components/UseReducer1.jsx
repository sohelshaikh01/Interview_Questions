import { useReducer } from 'react';

const initialState = 0;

function countReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + action.value;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
    
        default:
            return state;
    }
}

const UseReducer1 = () => {

    const [count, dispatch] = useReducer(countReducer, initialState);

    // In 'useReducer' it takes the reducer function and initialState.
    // It returns the state and function to change the state.

    // Reducer Takes multiple things and returns single output

  return (
    <div>
      <h2>Count Changer: {count}</h2>

      <button className='block py-1 px-4 bg-green-300 font-bold mb-1' onClick={() => dispatch({type: "INCREMENT", value: 5})}>Increment by 5</button>

      <button className='block py-1 px-4 bg-red-300 font-bold mb-1' onClick={() => dispatch({type: "DECREMENT"})}>-</button>

      <button className='block py-1 px-4 bg-blue-300 font-bold mb-1' onClick={() => dispatch({type: "RESET"})}>Reset</button>

    </div>
  )
}

export default UseReducer1;
