import { useState } from "react";
import "./App.css";

function App() {

	const [numberInputs, setNumberInputs] = useState({
		numberOne: 0,
		numberTwo: 0,
	});

	const { numberOne, numberTwo } = numberInputs;

	const [result, setResult] = useState(0);

	const handleOperations = (event) => {
		let newResult;

		switch(event.target.id) {
			case "addition":
				newResult = Number(numberOne) + Number(numberTwo);
				break;
			case "subtraction":
				newResult = Number(numberOne) - Number(numberTwo);
				break;
			case "multiplication":
				newResult = Number(numberOne) * Number(numberTwo);
				break;
			case "division":
				newResult = Math.round(Number(numberOne) / Number(numberTwo));
				break;
			default:
				return;
		}

		setResult(newResult);
	}
	
  	return (
		<div className="App mt-4">
			<div>
				<label htmlFor="number-one">Enter first number: </label>
				<input type="number"
				name="number-one"
				value={numberInputs.numberOne}
				onChange={(e) => setNumberInputs({
					...numberInputs,
					numberOne: e.target.value
				})} className="border outline-none px-1" />
			</div>
			<br />

			<div>
				<label htmlFor="number-two">Enter second number: </label>
				<input type="number"
				name="number-two"
				value={numberInputs.numberTwo}
				onChange={(e) => setNumberInputs({
					...numberInputs,
					numberTwo: e.target.value
				})} className="border outline-none px-1" />
			</div>
			<br />

			<div id="operations" onClick={handleOperations}>
				<span>Operations: </span>
				<button id='addition' className="bg-gray-300 border px-2 py-[2px] rounded mx-1">+</button>
				<button id='subtraction' className="bg-gray-300 border px-2 py-[2px] rounded mx-1">-</button>
				<button id='multiplication' className="bg-gray-300 border px-2 py-[2px] rounded mx-1">*</button>
				<button id='division' className="bg-gray-300 border px-2 py-[2px] rounded mx-1">/</button>
			</div>
			<br />

			<div>
				<p id="output" >Result: {result} </p>
			</div>	
		</div> 
	)
}

export default App;
