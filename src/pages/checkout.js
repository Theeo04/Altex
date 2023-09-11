import React, { useState, useEffect, useRef } from "react";
import Top from "../../components/Top";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db, storage } from "../../firebase";
import PopUpConfirm from "../../components/PopUpConfirm";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  // Refs for input fields
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const cityRef = useRef(null);
  const judetRef = useRef(null);
  const prenumeRef = useRef(null);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const cartItemString = localStorage.getItem("cart");

    if (cartItemString) {
      const parsedCartItems = JSON.parse(cartItemString);
      setCartItems(parsedCartItems.cartItems);
    }
  }, []);

  const sendOrder = async (e) => {
    e.preventDefault();

    // Get values from refs
    const name = nameRef.current.value;
    const prenume = prenumeRef.current.value;
    const address = addressRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const city = cityRef.current.value;
    const judet = judetRef.current.value;

    // Check if any required fields are empty
    if (!name || !address || !phoneNumber) {
      alert("Please fill out all required fields");
      return;
    }

    try {
      // Assuming you have defined 'db' somewhere in your component
      const docRef = await addDoc(collection(db, "orders"), {
        produse: cartItems,
        name,
        address,
        phoneNumber,
        city,
        judet,
        prenume,
        timestamp: serverTimestamp(),
        postImage: null, // Add the postImage if applicable
      });

      console.log("Document written with ID: ", docRef.id);
      setShowPopUp(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <Top />
      {/* Conditionally render the PopUp */}
      {showPopUp && (
        <div className="popup">
          <PopUpConfirm className="" />
        </div>
      )}
      {!user ? (
        <div>
          <p className="text-[30px] text-center mt-[50px]">
            Vă rugăm să vă autentificați în contul dumneavoastră înainte de a
            plasa comanda!
          </p>
          <div className="flex justify-center">
            <img
              className="h-[500px] w-[800px]"
              src="https://www.planstudyabroad.uniagents.com/images/login.png"
            />
          </div>
        </div>
      ) : (
        <div className="ml-[100px] xl:2xl:ml-[220px]">
          <h1 className="text-[28px] font-[500] mt-5">Detalii Comanda</h1>
          <form onSubmit={sendOrder}>
            <label className="flex flex-col text-[20px] mt-2">
              Nume:
              <input
                type="text"
                className="rounded-xl xl:2xl:w-[1000px]"
                ref={nameRef}
                required
              />
            </label>
            <br />

            <label className="flex flex-col text-[20px] mt-2">
              Prenume:
              <input
                type="text"
                className="rounded-xl xl:2xl:w-[1000px]"
                ref={prenumeRef}
                required
              />
            </label>
            <br />

            <label className="flex flex-col text-[20px] ">
              Adresa:
              <input
                type="text"
                className="rounded-xl xl:2xl:w-[1000px]"
                ref={addressRef}
                required
              />
            </label>
            <br />

            <label className="flex flex-col text-[20px] ">
              Phone Number*:
              <input
                type="tel"
                className=" rounded-xl xl:2xl:w-[1000px]"
                ref={phoneNumberRef}
              />
            </label>
            <br />

            <label className="flex flex-col text-[20px] ">
              Oras:
              <input
                type="text"
                className="rounded-xl xl:2xl:w-[1000px]"
                ref={cityRef}
                required
              />
            </label>
            <br />

            <label className="flex flex-col text-[20px] ">
              Judet/Sector:
              <input
                type="text"
                className="rounded-xl xl:2xl:w-[1000px]"
                ref={judetRef}
                required
              />
            </label>
            <br />
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="mb-4 bck text-white w-[250px] h-[60px] rounded-bl-xl rounded-tr-xl text-[23px] hover:text-white hover:bg-black transition-colors duration-30"
              >
                Plaseaza Comanda
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
