import { createContext, useState, useEffect } from "react";

const CartContext = createContext({
  cart: { cartItems: [] }, // Provide an empty array as the default value
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ cartItems: [] });

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      console.log("Retrieved cart data from localStorage:", parsedCart);
      setCart(parsedCart);
    }
  };

  const addItemToCart = async ({ name, price, image, quantity = 1 }) => {
    console.log("Adding item to cart:", {
      name,
      price,
      image,
      quantity,
    });

    const isItemExist = cart.cartItems.find((i) => i.name === name);

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart.cartItems.map((i) =>
        i.name === isItemExist.name
          ? { ...i, quantity: i.quantity + quantity }
          : i
      );
    } else {
      newCartItems = [...cart.cartItems, { name, price, image, quantity }];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState({ cartItems: newCartItems });
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
