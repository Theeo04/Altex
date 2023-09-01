import React, { useEffect, useRef, useState } from "react";
import { BiSearchAlt, BiCart, BiUserCircle } from "react-icons/bi";
import LogIn from "./LogIn";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";

function Top() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const popoutRef = useRef(null); // Ref to the pop-out container

  const handleLogInClick = () => {
    setShowLogIn(!showLogIn);
    setShowSignOut(false); // Hide the signOut pop-out
  };

  const deleteLocal = () => {
    localStorage.removeItem("cart");
  };

  const handleSignOutClick = () => {
    setShowSignOut(!showSignOut);
    setShowLogIn(false); // Hide the logIn pop-out
  };

  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      const email = profile.email;
    });
  }

  useEffect(() => {
    if (user) {
      setShowLogIn(false); // Hide the login pop-out if user is logged in
    }
  }, [user]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully.");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });

    deleteLocal();
  };

  const router = useRouter();

  const backToIndex = () => {
    router.push("/");
  };

  const goToCart = () => {
    router.push("/cartPage");
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (popoutRef.current && !popoutRef.current.contains(event.target)) {
        setShowLogIn(false);
        setShowSignOut(false);
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
            className="sm:h-[50px] sm:w-[300px] outline-none border-0 lg:h-[50px] lg:w-[400px]"
          />
          <BiSearchAlt className="text-[40px] pt-2" />
        </div>
      </div>
      <div className="lg:mr-[150px] lg:flex lg:justify-between flex justify-between sm:mt-[-120px] lg:mt-0 ml-[30px] sm:mr-7 ">
        <div className="flex pt-0 pr-[30px] lg:pt-3 pr-[300px]">
          <BiCart className="text-[40px] " />
          <p className="text-[15px] font-semibold pt-2" onClick={goToCart}>
            Cosul Meu
          </p>
        </div>
        <div className="flex">
          <BiUserCircle
            className="text-[55px] pt-1 cursor-pointer"
            onClick={user ? handleSignOutClick : handleLogInClick}
          />
          <p
            className="text-[15px] font-semibold pt-4 cursor-pointer"
            onClick={user ? handleSignOutClick : handleLogInClick}
          >
            {user ? user.providerData[0].email : "Cont"}
          </p>
        </div>
      </div>

      {/* Pop-out container for the LogIn or SignOut component */}
      {!user
        ? showLogIn && (
            <div
              ref={popoutRef}
              className="absolute ml-[1100px] mt-[51px] flex justify-center items-center z-10 bg-gray-800 bg-opacity-50 rounded-xl"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <LogIn setLoggedIn={setLoggedIn} />
              </div>
            </div>
          )
        : showSignOut && (
            <div
              ref={popoutRef}
              className="absolute ml-[1100px] mt-[51px] flex justify-center items-center z-10 bg-gray-800 bg-opacity-50 rounded-xl"
            >
              <div className="bg-white p-6 rounded-lg shadow-md w-[300px] h-[100px] flex justify-center text-[18px] border">
                <button
                  className="bck text-white w-[140px] h-[50px] rounded-bl-xl rounded-tr-xl"
                  onClick={handleSignOut}
                >
                  Iesi din cont
                </button>
              </div>
            </div>
          )}
    </div>
  );
}
export default Top;
