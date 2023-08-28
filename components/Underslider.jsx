import React from "react";
import { useDropdown } from "./DropdownContext";

function Underslider() {
  return (
    <div className="mt-[360px] flex justify-evenly space-x-[-100px] ">
      <div className="flex flex-col items-center text-center h-[200px] w-[200px] ">
        <img
          src="https://lcdn.altex.ro/render/static/altex/images/services/transport_pana_la_usa.svg"
          className="h-[100px] w-[100px] "
        />
        <p className="pt-4">Transport la orice produs</p>
      </div>
      <p className="mt-[110px] text-[25px] opacity-20">|</p>
      <div className="flex flex-col items-center text-center h-[200px] w-[200px] ">
        <img
          src="https://lcdn.altex.ro/render/static/altex/images/services/retur_in_30_de_zile.svg"
          className="h-[100px] w-[100px]"
        />
        <p className="pt-4">
          Te-ai razgandit? Poti returna produsul in 14 zile
        </p>
      </div>
      <p className="mt-[110px] text-[25px] opacity-20">|</p>
      <div className="flex flex-col items-center text-center h-[200px] w-[200px] ">
        <img
          src="https://lcdn.altex.ro/render/static/altex/images/services/2x_diferenta.svg"
          className="h-[100px] w-[100px]"
        />
        <p className="pt-4">Primesti de 2 ori diferenta la orice produs</p>
      </div>
      <p className="mt-[110px] text-[25px] opacity-20">|</p>
      <div className="flex flex-col items-center text-center h-[200px] w-[200px] ">
        <img
          src="https://lcdn.altex.ro/render/static/altex/images/services/protejeaza_investitia.svg"
          className="h-[100px] w-[100px]"
        />
        <p className="pt-4">Protejeaza-ti investitia cu extra garantie</p>
      </div>
    </div>
  );
}

export default Underslider;
