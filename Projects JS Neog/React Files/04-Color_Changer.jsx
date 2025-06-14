import React, { useState } from "react";

const App = () => {
  let myStyle = {
    color: "black",
    'border-color': 'black',
    'font-size': '1.3rem',
    'font-weight': "600"
  };

  const [text_style, setText_style] = useState(myStyle);
  const [input, setInput] = useState("");

  const color_Red = () => {
    if (input != "") {
      myStyle.color = "red";
      setText_style(myStyle);   
    }
  };

  const color_Green = () => {
    if (input != "") {
      myStyle.color = "green";
      setText_style(myStyle);   
    }
  };

  const color_Blue = () => {
    if (input != "") {
      myStyle.color = "blue";
      setText_style(myStyle);   
    }
  };

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold">Color Changer</h1>
      <textarea
        name="txt-input"
        id="txt-input"
        rows="4"
        cols="40"
        placeholder="Enter somethings here..."
        className="border outline-none p-4 block mb-4"
        style={text_style}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="inline-block bg-red-500 py-1 px-4 mr-2" onClick={() => color_Red()}>Red</button>
      <button className="inline-block bg-green-500 py-1 px-4 mr-2" onClick={() => color_Green()}>Green</button>
      <button className="inline-block bg-blue-500 py-1 px-4 mr-2" onClick={() => color_Blue()}>Blue</button>
    </div>
  );
};

export default App;
