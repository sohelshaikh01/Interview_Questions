import React, { useEffect, useState } from "react";

const App = () => {

	let myStyle = {
		fontSize: ''
	}
	const [textInput, setTextInput] = useState(myStyle);
	const [ip, setIp] = useState('');

	const handleToH1 = () => {
		if(ip != "") {
			myStyle.fontSize = "32px";
			setTextInput(myStyle);
		}
	}
	const handleToH2 = () => {
		if(ip != "") {
			myStyle= { fontSize: "24px" };
			setTextInput(myStyle);
		}
	}
	const handleToH3 = () => {
		if(ip != "") {
			myStyle= { fontSize: "18.72px" };
			setTextInput(myStyle);
		}
	}

  	return (
		<div className="App p-4">
			<h1 className="font-bold text-2xl">Font Resizer</h1>
			<input className="border outline-none block mb-2 p-2" name="text-input" id="text-input"
			onClick={(e) => setIp(e.target.value)}></input>
			<button className="py-1 px-4 bg-sky-300 mr-2 inline-block" onClick={handleToH1}>h1</button>
			<button className="py-1 px-4 bg-sky-300 mr-2 inline-block" onClick={handleToH2}>h2</button>
			<button className="py-1 px-4 bg-sky-300 mr-2 inline-block mb-2" onClick={handleToH3}>h3</button>
			<br />
			<p style={textInput} className='p-2 border inline-block min-w-48 min-h-10'>{ip}</p>
		</div>
	);
};

export default App;
