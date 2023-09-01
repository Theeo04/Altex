// import React, { useContext } from "react";
// import CartContext from "../../components/CartContext";

// const Cart = () => {
//   //   const { cart, cartItems } = useContext(CartContext);
//   // const cart =localStorage.getItem("cart");

//   const cartItemString = localStorage.getItem("cart");
//   const cartItems = JSON.parse(cartItemString);

//   console.log("cart:", cartItems);

//   console.log("cartItems:", cartItems.cartItems);

//   console.log("First item name:", cartItems.cartItems[0].name);
//   console.log("First item price:", cartItems.cartItems[0].price);
//   console.log("First item image:", cartItems.cartItems[0].image);
//   console.log("First item quantity:", cartItems.cartItems[0].quantity);

//   return (
//     <div className="container mx-auto mt-10">
//       <h2 className="text-3xl font-semibold mb-4">Cart Items</h2>
//       {cart.cartItems.length === 0 ? (
//         <p>Your Cart is empty</p>
//       ) : (
//         <ul>
//           {cart.cartItems.map((cartItem, index) => (
//             <li key={index} className="mb-4">
//               <div>
//                 <img
//                   src={cartItem.image} // Assuming you have an "image" property in your cartItem
//                   alt={cartItem.name}
//                   className="w-16 h-16 rounded border border-gray-200"
//                 />
//               </div>
//               <div className="mt-2">
//                 <h3 className="text-lg font-semibold">{cartItem.name}</h3>
//                 <p className="mt-2">
//                   Price: ${cartItem.price.toFixed(2)} (per item)
//                 </p>
//                 <p className="mt-2">Quantity: {cartItem.quantity} (Units)</p>
//                 <p className="mt-2">
//                   Total: ${(cartItem.price * cartItem.quantity).toFixed(2)}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";

const Cart = () => {
  // Define the initial state for cartItems as an empty array
  const [cartItems, setCartItems] = useState([]);

  // Use useEffect to load cart items from localStorage when the component mounts
  useEffect(() => {
    const cartItemString = localStorage.getItem("cart");

    if (cartItemString) {
      // Parse the string from localStorage and set it as the cartItems state
      const parsedCartItems = JSON.parse(cartItemString);
      setCartItems(parsedCartItems.cartItems); // Accessing the array inside the object
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Check if cartItems is an array
  if (!Array.isArray(cartItems)) {
    return <p>Loading...</p>; // or handle loading state differently
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((cartItem, index) => (
            <li key={index} className="mb-4">
              <div>
                <img
                  src={cartItem.image}
                  alt={cartItem.name}
                  className="w-16 h-16 rounded border border-gray-200"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{cartItem.name}</h3>
                <p className="mt-2">
                  Price: ${cartItem.price.toFixed(2)} (per item)
                </p>
                <p className="mt-2">Quantity: {cartItem.quantity} (Units)</p>
                <p className="mt-2">
                  Total: ${(cartItem.price * cartItem.quantity).toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
