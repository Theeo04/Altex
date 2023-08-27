import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import { useDropdown } from "./DropdownContext";

function Nav() {
  const { toggleDropdown } = useDropdown();

  return (
    <div>
      <div className="flex pl-[160px] mt-3 h-[50px] w-full bck space-x-2">
        <button className="piece" onClick={toggleDropdown}>
          Produse
        </button>
        <button className="piece">Promotii</button>
        <button className="piece" onClick={toggleDropdown}>
          Finantare
        </button>
        <button className="piece">Suport Clienti</button>
        <button className="piece">Magazine</button>
        <button className="piece">Altex Travel</button>
      </div>
    </div>
  );
}

export default Nav;
