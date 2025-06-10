import "../App.css";
import { useEffect, useState } from "react";
import CleanFunction from "./CleanFunction1";
import Timer from "./CleanFunction2";

function UseEffect1() {

	// useEffect hook help to decide the lifecycle of the components.
	// It has callback function and dependency Array
	
	const [count, setCount] = useState(0);
	const [toggle, setToggle] = useState(false);
	const [inputValue, setInputValue] = useState("");

  useEffect(() => {
	console.log("rendered");
  }, [count]);
  // without dependency array it will rerender on each changes.

  // We want to render component when 'count' state changes
  // so we can add 'count' in dependency array.

  return (
    <>
      <div className="p-4">

			<input className="p-1 border outline-none" 
                type="text" placeholder="Enter something..." 
                value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} />
			<p>You typed: <strong> {inputValue}</strong></p>

			<p className="mt-4"> You Clicked {count} times</p>
			<button className='bg-purple-300 px-4 py-1 text-white mb-2' onClick={() => setCount(count + 1)}> Increment</button> 

			{toggle && 
			<CleanFunction />}
			{toggle && <Timer />}
			<button className='bg-blue-300 px-4 py-1 text-white block mt-4' onClick={() => 	setToggle(!toggle)}> Toggle</button> 

		</div>
    </>
  );
}

export default UseEffect1;
