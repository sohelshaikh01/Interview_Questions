import React, { useRef } from 'react';
import FancyImperative from './FancyImperative';

const FancyInput = () => {

    const fancyInputRef = useRef();

  return (
    <div>

      <FancyImperative ref={fancyInputRef} />
      
      <button className='bg-blue-300 px-4 py-1 text-white block mt-4' onClick={() => fancyInputRef.current.focus()} > Focus</button>
      
      <button className='bg-blue-300 px-4 py-1 text-white block mt-4' onClick={() => fancyInputRef.current.clear()} >Clear</button>

    </div>
  )
}

export default FancyInput;
