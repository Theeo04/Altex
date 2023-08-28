import React from "react";
import { useDropdown } from "./DropdownContext";
import DropDown from "./DropDown";
import Slider from "./Slider";
import Underslider from "./Underslider";

function Content() {
  const { isDropdownOpen } = useDropdown();

  return (
    <div className="relative">
      <div className={`${isDropdownOpen ? "absolute z-10" : ""}`}>
        {isDropdownOpen && <DropDown />}
      </div>

      <div
        className={`overlay-container ${isDropdownOpen ? "dropdown-open" : ""}`}
      >
        <div className="content-container">
          <Slider />
          <Underslider />
        </div>
      </div>
    </div>
  );
}

export default Content;
