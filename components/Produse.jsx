import React, { useEffect, useState } from "react";
import Produs from "./Produs";

function Produse() {
  const [electronicsSalesProducts, setElectronicsSalesProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?category=electronics")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setElectronicsSalesProducts(data);
      })
      .catch((error) =>
        console.error("Error fetching electronics sales products:", error)
      );
  }, []);

  return (
    <div>
      <h1 className="text-[32px] pl-[180px] mb-6 sm:ml-6">Top Oferte</h1>
      <div className="sm:pl-[50px] sm:space-x-[15px] flex space-x-[35px] justify-center">
        {electronicsSalesProducts.slice(0, 5).map((product) => (
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
      <div className="sm:pl-[50px] sm:space-x-[15px] flex space-x-[35px] justify-center mt-6">
        {electronicsSalesProducts.slice(6, 11).map((product) => (
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

export default Produse;
