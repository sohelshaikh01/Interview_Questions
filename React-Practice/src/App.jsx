import { useState } from "react";
import "./App.css";

function App() {

	const [numberInputs, setNumberInputs] = useState({
		numberOne: 0,
		numberTwo: 0,
	});

	const { numberOne, numberTwo } = numberInputs;

	const [output, setOutput] = useState(0);

	const handleInput = (event) => {
		event.preventDefault();


	
	}
	
  	return <>
		<div>
			<label htmlFor="number-one">Enter first number: </label>
			<input type="number"
			value={numberInputs.numberOne}
			onChange={(e) => setNumberInputs({
				...numberInputs,
				numberOne: e.target.value
			})} />
		</div>

		<div>
			<label htmlFor="number-two">Enter second number: </label>
			<input type="number"
			value={numberInputs.numberOne}
			onChange={(e) => setNumberInputs({
				...numberInputs,
				numberOne: e.target.value
			})} />
		</div>
	
	</>;
}

export default App;
