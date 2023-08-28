import React from "react";
import { DropdownProvider } from "../../components/DropdownContext";
import Header from "../../components/Header";
import Content from "../../components/Content";

function App() {
  return (
    <DropdownProvider>
      <div>
        <Header />
        <Content />
      </div>
    </DropdownProvider>
  );
}

export default App;
