import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [fontSize, setFontSize] = useState(16);

	// Use Event Delegation

  const handleOperations = (event) => {
	let newFontSize;

	switch(event.target.id) {
		case 'increase':
			newFontSize = fontSize + 2;
			break;
		case 'decrease':
			newFontSize = fontSize - 2;
			break;
		default:
			return;
	}
	setFontSize(newFontSize);
  }

  return (
    <div className="App mt-4 ml-4">
		<h2>Font Resizer</h2>
		<textarea
			name="text-input"
			id="text-input"
			row="10"
			cols="30"
			className="outline-none p-2 border"
			value={input}
			onChange={(event) => setInput(event.target.value)}
		></textarea>
		<br />
		<div id="operations" onClick={handleOperations}>
			<button className="py-1 px-2 mr-2 bg-gray-300" id="increase">+ Increase Font Size</button>
			<button className="py-1 px-2 mb-2 bg-gray-300" id="decrease">- Decrease Font Size</button>
		</div>
		<div id="output" className="border p-2 inline-block" style={{ fontSize: `${fontSize}px`}}>
			{input}
		</div>
    </div>
  );
};

export default App;
