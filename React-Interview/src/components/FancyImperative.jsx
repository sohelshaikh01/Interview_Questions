import { useImperativeHandle, useRef, useState } from 'react';

const FancyImperative = ({ ref }) => {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      clear: () => {
        inputRef.current.value = "";
      }
    }));
    
  return (
   
    <div>
        <input type="text"
          placeholder="Type somethings"
          value={inputValue}
          className="py-1 px-4 border focus:outline outline-blue-500 outline-2 text-black mb-2"
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef} />

        <p>You typed: <strong>{inputValue} </strong></p>  
    </div>
  );
}

export default FancyImperative;
