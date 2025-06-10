import { useId } from "react";

const UseId1 = () => {

    const id = useId();
    
    // 'useId' Hooks is used to generate unique id. Which can be stable across the server and client render.
    // It helps in hydration mismatches.
    // Also useful for accessibility purposes
    
    // Do not use Id in generate of keys in list.

  return (
    <div>
       <input type="checkbox" id={id}  />
       <label htmlFor={id} > Accept Terms</label>
    </div>
  )
}

export default UseId1;
