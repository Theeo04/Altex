import React, { useEffect, useState } from "react";
import Top from "../../components/Top";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [transpTax, setTranspTax] = useState(0);

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

  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 2);
  console.log(futureDate);

  useEffect(() => {
    const cartItemString = localStorage.getItem("cart");

    if (cartItemString) {
      const parsedCartItems = JSON.parse(cartItemString);
      setCartItems(parsedCartItems.cartItems);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });

    let transpTax = subtotal > 100 ? 0 : 10;

    setSubtotal(subtotal);
    setTranspTax(transpTax);
    setTotal(transpTax + subtotal);
  }, [cartItems]);

  return (
    <div className="mb-10">
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
                    <div className="flex bck mt-5 w-[90px] rounded-bl-xl rounded-tr-xl ml-3">
                      <AiOutlineClose className="pt-2 text-[23px] text-white" />
                      <button
                        className="text-[20px] text-white"
                        onClick={() => handleDeleteItem(cartItem)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length !== 0 ? (
          <div className="flex flex-row space-x-[55px] sm:flex-col">
            {/* Sumar Cos */}
            <div className="w-[200px] h-[270px] bg-gray-100 w-[800px] rounded-xl border">
              <h1 className="text-[28px] font-[500] pl-10 pt-2">
                Sumar comanda
              </h1>
              <p className="pl-[50px] pt-5 text-[18px]">
                Subtotal:
                <span className="text-red-700 pl-[140px] text-[18px]">
                  {subtotal} $
                </span>
              </p>
              <p className="pl-[50px] pt-5 text-[20px]">
                Transport:
                {transpTax === 0 ? (
                  <span className="text-red-700 pl-[124px] text-[20px]">
                    Transport gratuit
                  </span>
                ) : (
                  <span className="text-red-700 pl-[140px] text-[20px]">
                    {transpTax} $
                  </span>
                )}
              </p>
              <div className="bg-black h-[0.07px] w-full mt-3"></div>
              <p className="pl-[50px] pt-5 text-[28px]">
                Total:
                <span className="text-red-700 pl-[170px] text-[28px]">
                  {total} $
                </span>
              </p>
              <button className="float-right bck text-white w-[140px] h-[40px] text-[22px] rounded-bl-xl rounded-tr-xl mr-5">
                Continua
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
