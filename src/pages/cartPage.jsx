import React, { useEffect, useState } from "react";
import Top from "../../components/Top";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleDeleteItem = (itemToDelete) => {
    if (itemToDelete.quantity > 0) {
      const updatedCartItems = [...cartItems];

      const itemIndex = updatedCartItems.findIndex(
        (cartItem) => cartItem.id === itemToDelete.id
      );

      if (itemIndex !== -1) {
        updatedCartItems.splice(itemIndex, 1);

        localStorage.setItem(
          "cart",
          JSON.stringify({ cartItems: updatedCartItems })
        );

        setCartItems(updatedCartItems);
      }
    }
  };

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  const randomNumber = getRandomNumber(1, 5);
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + randomNumber);

  useEffect(() => {
    const cartItemString = localStorage.getItem("cart");

    const currentDate = new Date();

    if (cartItemString) {
      const parsedCartItems = JSON.parse(cartItemString);
      setCartItems(parsedCartItems.cartItems); // Accessing the array inside the object
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  if (!Array.isArray(cartItems)) {
    return <p>Loading...</p>; // or handle loading state differently
  }

  useEffect(() => {
    let total = 0;
    cartItems.forEach((Item) => {
      total += Item.price * Item.quantity;
    });
    setTotal(total);
  }, [cartItems]);

  return (
    <div>
      <Top />
      <div className="w-full h-[0.5px] bg-black mt-6"></div>
      <div className="xl:pl-[170px] sm:pl-12">
        <h2 className="text-[40px] font-[400] mt-5 mb-5 sm:text-[35px]">
          Cosul meu de cumparaturi
        </h2>
        {cartItems.length === 0 ? (
          <p>Your Cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((cartItem, index) => (
              <li key={index} className="mb-10">
                <div className="flex bg-gray-100 h-[250px] sm:w-[730px] md:w-[800px] xl:w-[1300px] border rounded-xl sm:w-[700px]">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="sm:pl-5 sm:pt-5 w-[200px] h-[200px] rounded border-gray-200"
                  />
                  <div className="mt-1 ml-6">
                    <h3 className="sm:text-lg sm:font-semibold lg:xl:text-[23px]">
                      {cartItem.name}
                    </h3>
                    <p className="mt-2 lg:xl:text-[20px]">
                      Price: ${cartItem.price.toFixed(2)} (per item)
                    </p>
                    <p className="mt-2 lg:xl:text-[20px]">
                      Quantity: {cartItem.quantity} (Units)
                    </p>
                    <p className="mt-2 lg:xl:text-[20px]">
                      Total: ${(cartItem.price * cartItem.quantity).toFixed(2)}
                    </p>
                    <button onClick={() => handleDeleteItem(cartItem)}>
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>Total: {total}</div>
    </div>
  );
};

export default Cart;
