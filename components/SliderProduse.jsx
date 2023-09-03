import React, { useState } from "react";
import CategorySliderProduces from "./CategorySliderProduces";

const Home = () => {
  const [selectedDivId, setSelectedDivId] = useState("div1");

  const contentData = [
    {
      id: "div1",
      label: "Laptopuri",
      content: (
        <CategorySliderProduces
          link={"https://fakestoreapi.com/products?category=electronics"}
        />
      ),
    },
    {
      id: "div2",
      label: "Tablete",
      content: (
        <CategorySliderProduces
          link={"https://fakestoreapi.com/products/category/jewelery"}
        />
      ),
    },
    {
      id: "div3",
      label: "Ghiozdane si genti pentru copii",
      content: (
        <CategorySliderProduces
          link={"https://fakestoreapi.com/products?category=kids"}
        />
      ),
    },
    {
      id: "div4",
      label: "Birouri",
      content: (
        <CategorySliderProduces
          link={"https://fakestoreapi.com/products/category/jewelery"}
        />
      ),
    },
  ];

  const handleClick = (div) => {
    setSelectedDivId(div);
  };

  return (
    <div className="bg-gray-100 mt-10 ">
      {/* <h1 className="text-2xl font-semibold mb-4 sm:mb-0"></h1> */}
      <div className="flex space-x-4 pl-[180px] pt-5 sm:ml-0 font-[500] text-[17px] ">
        {contentData.map((item) => (
          <button
            key={item.id}
            className={`px-4 py-2  text-black rounded   ${
              selectedDivId === item.id ? "focus:text-red-600" : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="text-center mt-8">
        {contentData.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={`${
              selectedDivId === item.id ? "block" : "hidden"
            } mt-4 p-4 rounded border-gray-300`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
