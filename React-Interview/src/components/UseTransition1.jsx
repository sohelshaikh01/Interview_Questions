import { useState, useTransition } from "react";

function ExpensiveCalculationDemo() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    // To Avoid Huge / Expensive Calculations we use "useTransition" Hooks.

    const [isPending, startTransition] = useTransition();
    // isPending refers that transition is happening
    // startTransition function where calculation provided

    // Simulated an expensive calculation
    const runExpensiveCalculation = (value) => {
        const calculatedResults = [];

        for(let index = 0; index < 999999999; index++) {}

        // Simulate heavy work by running many calculations
        for (let i = 0; i < 20000; i++) {
            const result = i + parseInt(value || "0", 10);

            if(i % 1000 === 0) {
                calculatedResults.push(result);
            }
        }

        return calculatedResults;
    }

    const handleInputChange = (e) => {
        // Update the input immediately (high priority)
        const newValue = e.target.value;
        setInput(newValue);

        // Defer the expensive calculation (low priority)

        startTransition(() => { 
            const calculatedResults = runExpensiveCalculation(newValue);
            setResults(calculatedResults);
        });
        // Here using the functions

    }


    return(
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-xl font-bold mb-4">         
                useTransition Demo
            </h2>

            <div className="p-6 max-w-lg mx-auto">
                <label htmlFor="tables" className="block mb-2">
                    Enter a number: 
                     <input type="text" 
                    value={input} 
                    onChange={handleInputChange}
                    className="ml-2 border p-2 rounded text-black" />
                </label>
               
            </div>
            
            {isPending ? "Loading..." : (
               <div>
                <h3 className="font-semibold mb-2">Results</h3>
                <ul className="border rounded p-4 bg-gray-50 text-black">
                    {results.map((result, index) => (
                        <li key={index} className="mb-1">
                            {index + 1000} * {input} = {result}
                        </li>
                    ))}
                </ul>
            </div> 
            )}
            
        </div>
    );
}

export default ExpensiveCalculationDemo;