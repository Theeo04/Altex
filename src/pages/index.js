import React from "react";
import { DropdownProvider } from "../../components/DropdownContext";
import Header from "../../components/Header";
import Content from "../../components/Content";
import DropDown from "../../components/DropDown";
import Slider from "../../components/Slider";

function App() {
  return (
    <DropdownProvider>
      <div>
        <Header />
        <Content />
        {/* <Slider /> */}
      </div>
    </DropdownProvider>
  );
}

export default App;
