import { useState, useRef, useEffect } from "react";

const UseRef1 = () => {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);
    // It takes initial value as null.

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
        // Refering to input and making it focus by default
    }, []);


  return (
    <div>
        <input className="p-1 border outline-none" 
            type="text" placeholder="Enter something..." 
            value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
            ref={inputRef} />
        <p>You typed: <strong> {inputValue}</strong></p>

    </div>
  )
}

export default UseRef1;
