import React, { useEffect, useRef, useState } from "react";
import { BiSearchAlt, BiCart, BiUserCircle } from "react-icons/bi";
import LogIn from "./LogIn";
import { useRouter } from "next/router";

function Top() {
  const [showLogIn, setShowLogIn] = useState(false);
  const popoutRef = useRef(null); // Ref to the pop-out container

  const handleContClick = () => {
    setShowLogIn(!showLogIn);
  };

  const router = useRouter();

  const backToIndex = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (popoutRef.current && !popoutRef.current.contains(event.target)) {
        setShowLogIn(false);
      }
    };

    // Attach the event listener on component mount
    document.addEventListener("mousedown", handleClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="flex justify-between mt-4">
      <div className="flex ml-[50px] mt-20 lg:mt-3 ml-[250px]">
        <img
          src="https://seeklogo.com/images/A/altex-logo-35BF8452EC-seeklogo.com.png"
          alt="LogoAltex"
          className="pr-10 h-[40px] w-[200px] cursor-pointer"
          onClick={backToIndex}
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
          <p className="text-[15px] font-semibold pt-2">Cosul Meu</p>
        </div>
        <div className="flex">
          <BiUserCircle
            className="text-[55px] pt-1 cursor-pointer "
            onClick={handleContClick}
          />
          <p
            className="text-[15px] font-semibold pt-4 cursor-pointer"
            onClick={handleContClick}
          >
            Cont
          </p>
        </div>
      </div>

      {/* Pop-out container for the LogIn component */}
      {showLogIn && (
        <div
          ref={popoutRef}
          className="fixed ml-[1100px] mt-[51px] flex justify-center items-center z-10 bg-gray-800 bg-opacity-50 rounded-xl"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <LogIn />
          </div>
        </div>
      )}
    </div>
  );
}

export default Top;
