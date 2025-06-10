import '../App.css';
import { useState } from "react";

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="p-4">
        <input className='p-1 border outline-none' type="text" placeholder='Enter something...' value={inputValue} onChange={(e) => setInputValue(e.target.value) } />
        <p> You typed:  <strong> {inputValue}</strong> </p>
      </div>
    </>
  )
}

export default App
