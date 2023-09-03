import React, { useEffect, useState } from "react";
import Produs from "./Produs";

function CategorySliderProduces({ link }) {
  const [produces, setProduces] = useState([]);

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduces(data);
      })
      .catch((error) =>
        console.error("Error fetching electronics sales products:", error)
      );
  }, [link]);

  return (
    <div>
      <div className="sm:space-x-[15px] flex space-x-[35px] justify-center pl-10">
        {produces.slice(0, 5).map((product) => (
          <Produs
            key={product.id}
            numeProdus={product.title}
            pret={product.price}
            image={product.image}
            rating={product.rating.rate}
            noRatings={product.rating.count}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySliderProduces;
