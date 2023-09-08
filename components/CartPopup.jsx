import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function CartPopup() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const router = useRouter();

  function truncateText(sentence, maxLength) {
    const words = sentence.split(" ");

    if (words.length > maxLength) {
      const truncatedWords = words.slice(0, maxLength);
      return `${truncatedWords.join(" ")}...`;
    }

    return sentence;
  }

  // Delete items (X)
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

  // Obtain the objects from the Local Storage
  useEffect(() => {
    const cartItemString = localStorage.getItem("cart");

    if (cartItemString) {
      const parsedCartItems = JSON.parse(cartItemString);
      setCartItems(parsedCartItems.cartItems);
    }
  }, []);

  useEffect(() => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });

    setSubtotal(subtotal);
  }, [cartItems]);

  const goToCart = () => {
    router.push("/cartPage");
  };

  return (
    <div >
      {cartItems.length === 0 ? (
        <div className="flex justify-center w-[300px] h-[60px] bg-white border z-10 rounded-lg">
          <p className="text-black mt-3 font-[500] text-[18px] ">
            Cosul de cumparaturi este gol
          </p>
        </div>
      ) : (
        <ul className="mt-2 ml-3">
          {cartItems.map((cartItem, index) => (
            <li key={index} className=" w-[360px] h-[80px] bg-white border">
              <div className="flex">
                <img
                  src={cartItem.image}
                  alt={cartItem.name}
                  className="h-[60px] w-[60px] pr-1 pt-3 pl-2"
                />
                <div className="flex space-x-2">
                  <div className="w-[150px] h-[50px]">
                    <h3 className="text-[14px] mt-5 ml-2">
                      {truncateText(cartItem.name, 6)}
                    </h3>
                  </div>

                  <p className="mt-2 text-[15px] mt-5 pr-3">
                    X {cartItem.quantity}
                  </p>
                  <p className="mt-5 lg:xl:text-[18px]">
                    ${cartItem.price.toFixed(2)}
                  </p>

                  <button onClick={() => handleDeleteItem(cartItem)}>
                    <AiOutlineClose className=" text-[23px] text-gray-400 mt-2" />{" "}
                  </button>
                </div>
              </div>
            </li>
          ))}
          <div className="bg-white rounded-b-xl border">
            <p className="text-[22px] font-[500] pt-1 pl-7">
              Pret Total: {subtotal}$
            </p>
            <div className="flex flex-col items-center ">
              <button
                className="rounded-bl-xl rounded-tr-xl bg-yellow-300 w-[300px] h-[40px] text-[20px] mt-2 mb-2 hover:text-white hover:bg-black transition-colors duration-300"
                onClick={goToCart}
              >
                Vezi Cosul
              </button>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
}

export default CartPopup;
