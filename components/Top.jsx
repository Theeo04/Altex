// import React from "react";
// import { BiSearchAlt, BiCart, BiUserCircle } from "react-icons/bi";

// function Top() {
//   return (
//     <div className="flex justify-between mt-4">
//       <div className="flex ml-[50px] mt-20 lg:mt-3 ml-[250px]">
//         <img
//           src="https://seeklogo.com/images/A/altex-logo-35BF8452EC-seeklogo.com.png"
//           alt="LogoAltex"
//           className="pr-10 h-[40px] w-[200px]"
//         />
//         <div className="flex pl-[50px] border border-gray-300 border-1 rounded-xl">
//           <input
//             type="text"
//             placeholder="Cautati produsul dorit..."
//             className="sm:h-[50px] sm:w-[300px] outline-none lg:h-[50px] lg:w-[400px]"
//           />
//           <BiSearchAlt className="text-[40px] pt-2" />
//         </div>
//       </div>
//       <div className="lg:mr-[150px] lg:flex lg:justify-between flex justify-between sm:mt-[-120px] lg:mt-0 ml-[30px] sm:mr-7 ">
//         <div className="flex pt-0 pr-[30px] lg:pt-3 pr-[300px]">
//           <BiCart className="text-[40px] " />
//           <p className="text-[15px] font-bold pt-2">Cosul Meu</p>
//           {/* <BiArrowFromTop className="text-[25px]" /> */}
//         </div>
//         <div className="flex">
//           <BiUserCircle className="text-[55px] pt-1" />
//           <p className="text-[15px] font-bold pt-4">Cont</p>
//           {/* <BiArrowFromTop className="text-[30px] pt-2" /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Top;

// ///////////////////////////////////////////////////////////////////////////// //

import React, { useState } from "react";
import { BiSearchAlt, BiCart, BiUserCircle } from "react-icons/bi";
import LogIn from "./LogIn";

function Top() {
  const [showLogIn, setShowLogIn] = useState(false);

  const handleContClick = () => {
    setShowLogIn(!showLogIn);
  };

  return (
    <div className="flex justify-between mt-4">
      {/* ... restul codului pentru partea de sus ... */}
      <div className="flex ml-[50px] mt-20 lg:mt-3 ml-[250px]">
        <img
          src="https://seeklogo.com/images/A/altex-logo-35BF8452EC-seeklogo.com.png"
          alt="LogoAltex"
          className="pr-10 h-[40px] w-[200px]"
        />
        <div className="flex pl-[50px] border border-gray-300 border-1 rounded-xl">
          <input
            type="text"
            placeholder="Cautati produsul dorit..."
            className="sm:h-[50px] sm:w-[300px] outline-none lg:h-[50px] lg:w-[400px]"
          />
          <BiSearchAlt className="text-[40px] pt-2" />
        </div>
      </div>
      <div className="lg:mr-[150px] lg:flex lg:justify-between flex justify-between sm:mt-[-120px] lg:mt-0 ml-[30px] sm:mr-7 ">
        <div className="flex pt-0 pr-[30px] lg:pt-3 pr-[300px]">
          <BiCart className="text-[40px] " />
          <p className="text-[15px] font-bold pt-2">Cosul Meu</p>
          {/* <BiArrowFromTop className="text-[25px]" /> */}
        </div>
        <div className="flex">
          <BiUserCircle
            className="text-[55px] pt-1 cursor-pointer"
            onClick={handleContClick}
          />
          <p
            className="text-[15px] font-bold pt-4 cursor-pointer"
            onClick={handleContClick}
          >
            Cont
          </p>
        </div>
      </div>

      {showLogIn && <LogIn />}
    </div>
  );
}

export default Top;
