import React from "react";
import { DropdownProvider } from "../../components/DropdownContext";
import Header from "../../components/Header";
import Content from "../../components/Content";
import { CartProvider } from "../../components/CartContext";

function App() {
  return (
    <CartProvider>
      <DropdownProvider>
        <div>
          <Header />
          <Content />
        </div>
      </DropdownProvider>
    </CartProvider>
  );
}

export default App;
