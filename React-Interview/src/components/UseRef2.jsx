import React, { useState, useRef } from 'react';


const UseRef2 = () => {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const incrementState = () => setCount(count + 1);
    
    const incrementRef = () => {
        countRef.current += 1;
        console.log("Ref count:", countRef.current);
    }

    // useState hook re-render the components and update UI.
    // useRef hook doesn't re-render the components and UI doesn't get updated.

  return (
    <div>
        <h2> useRef vs useState</h2>

        <div>
            <h2>useState:</h2>
            <p>State Count: {count}</p>
            <button className='bg-blue-300 px-4 py-1 text-white' onClick={incrementState}> Increment State</button>
        </div>

        <div>
            <h2>useRef:</h2>
            <p>Ref Count (check console): {countRef.current}</p>
            <button className='bg-blue-300 px-4 py-1 text-white' onClick={incrementRef}>Increment Ref</button>
        </div>
      
    </div>
  )
}

export default UseRef2;
