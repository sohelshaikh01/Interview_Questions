import { useEffect, useRef, useState } from 'react';

const UseImperative1 = () => {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, []);

    // Using "UseImperative" hook we can pass props to parent components.

  return (
    <div>
        <input type="text"
          placeholder="Type somethings"
          value={inputValue}
          className="py-1 px-4 border text-black mb-2"
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef} />

        <p>You typed: <strong>{inputValue} </strong></p>  
    </div>
  )
}

export default UseImperative1;
