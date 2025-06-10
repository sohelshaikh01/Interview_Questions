import '../App.css';
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  // It return the array that gives the state and function to change that state.
  // It takes the initial value in the function

  return (
    <>
      <div className="p-4">
        <div> welcome to React Interview Series.</div>
        <p> You Clicked {count} times</p>
        <button className='bg-purple-300 px-4 py-1 text-white' onClick={() => setCount(count + 1)}> Increment</button>
      </div>
    </>
  )
}

// useState use to add state to the components:
// state refers to the data that changes over the time.
// It affects to how the component should render.
// It allows the components to keep the track of information.


export default App
