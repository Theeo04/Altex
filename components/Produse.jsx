import React, { useEffect, useState } from "react";

function Produse() {
  const [electronicsSalesProducts, setElectronicsSalesProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?category=electronics&on_sale=true")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        setElectronicsSalesProducts(data);
      })
      .catch((error) =>
        console.error("Error fetching electronics sales products:", error)
      );
  }, []);

  return (
    <div>
      <h1 className="text-[32px] ml-[100px]">Top Oferte</h1>
      <div>
        <h2>Electronics Sales Products:</h2>
        <ul>
          {electronicsSalesProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Produse;
