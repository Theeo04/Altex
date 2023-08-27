// DropdownContext.js
import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export const useDropdown = () => {
  return useContext(DropdownContext);
};

export const DropdownProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <DropdownContext.Provider value={{ isDropdownOpen, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};
