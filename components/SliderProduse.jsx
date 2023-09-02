// pages/index.js
import React, { useState } from "react";

const Home = () => {
  const [selectedDivId, setSelectedDivId] = useState(null);

  const buttons = [
    { id: "div1", label: "Button 1" },
    { id: "div2", label: "Button 2" },
    { id: "div3", label: "Button 3" },
  ];

  const divs = [
    { id: "div1", content: "Div 1 content" },
    { id: "div2", content: "Div 2 content" },
    { id: "div3", content: "Div 3 content" },
  ];

  const handleClick = (divId) => {
    setSelectedDivId(divId);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Show/Hide Divs in Next.js</h1>
      <div className="flex justify-center space-x-4">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none ${
              selectedDivId === button.id ? "bg-blue-700" : ""
            }`}
            onClick={() => handleClick(button.id)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="text-center mt-8">
        {divs.map((div) => (
          <div
            key={div.id}
            id={div.id}
            className={`${
              selectedDivId === div.id ? "block" : "hidden"
            } mt-4 p-4 border rounded border-gray-300`}
          >
            {div.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
