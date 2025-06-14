import React, { useState } from "react";


let index = 0;
let name = [];
let marks = [];
let avg = [];
const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [nm, setNm] = useState("");
  const [outp, setOutp] = useState("");
  const [avgOp, setAvgOp] = useState("");
  const [val1, setVal1] = useState(false);
  const [val2, setVal2] = useState(true);

  let sum = 0;

  const storeValues = () => {
	name[index] = nm;
	sum = Number(input1) + Number(input2) + Number(input3);
	console.log(sum)
	avg[index] = sum / 5;
	marks[index] = sum;

	index = index + 1;

	setNm(""), setInput1(""), setInput2(""), setInput3("");
	if(index == 5) {
		setVal1(true);
		setVal2(false);
	}
	
  }

  const calculateResult = () => {
	setOutp( name[marks.indexOf(Math.max(...marks))] + " has the highest marks, you dumb people");

	let x = " ";
	while(index <= 5 && index > 0) {
		index = index - 1;
		x += name[index].toUpperCase() + ":" + avg[index] + " ";
	}
	setAvgOp(x);
  }

  return (
    <div className="App flex flex-col items-start px-12 gap-2 mt-4">
		<h1 className="text-2xl font-bold ">Result</h1>
		<label htmlFor="">
			Enter Name:
			<input
			value={nm}
			onChange={(e) => setNm(e.target.value)}
			type="text"
			className="border outline-none p-1 block"
			/>
		</label>
		<label htmlFor="">
			Unit test marks:
			<input
			value={input1}
			onChange={(e) => setInput1(e.target.value)}
			type="text"
			className="border outline-none p-1 block"
			/>
		</label>
		<label htmlFor="">
			Pre-Final marks:
			<input
			value={input2}
			onChange={(e) => setInput2(e.target.value)}
			type="text"
			className="border outline-none p-1 block"
			/>
		</label>
		<label htmlFor="">
			Final marks:
			<input
			value={input3}
			onChange={(e) => setInput3(e.target.value)}
			type="text"
			className="border outline-none p-1 block"
			/>
		</label>
		<button onClick={storeValues} disabled={val1} className="bg-sky-300 py-1 px-4 mr-2 text-white">Next</button>
		<button onClick={calculateResult} disabled={val2} className="bg-sky-300 py-1 px-4 mr-2 text-white">Submit</button>
		<div>Output: {outp}</div>
		<div>Average: {avgOp}</div>
    </div>
  );
};

export default App;
