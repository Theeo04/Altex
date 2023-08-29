import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Top from "../../components/Top";
import LoginPage from "../../components/LogIn";
import { GiDiamonds } from "react-icons/gi";

export default function RegisterPage({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [numarTel, setNumaraTel] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleButtonClick = () => {
    if (!isChecked) {
      alert("Please check the checkbox before proceeding.");
      return;
    }
  };

  const verifyPass = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoggedIn(true);

        // Update the user profile firebase --version 12.4.8
        return updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: avatars[randomNum],
          phoneNumber: numarTel,
        });
      })
      .then(() => {
        console.log("Profile updated successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <div className="mb-6">
      <div className="mt-[-80px] lg:mt-0">
        <Top />
      </div>
      <div className="flex sm:flex-col lg:flex-row lg:ml-[220px] ml-[20px] md:mr-10">
        <div>
          <h1 className="text-[25px] font-[490] mt-6 mb-5">
            De ce sa iti creezi cont ?
          </h1>
          <p className="flex">
            <GiDiamonds className="text-red-600 mr-5" />
            Reduci timpul de finalizare a comenzii prin salvarea datelor de
            facturare, livrare si plata
          </p>
          <p className="flex">
            <GiDiamonds className="text-red-600 mr-5" />
            Verifici situatia comenzilor tale{" "}
          </p>
          <p className="flex">
            <GiDiamonds className="text-red-600 mr-5" />
            Salvezi produse in wishlist si faci liste de cumparaturi
          </p>
          <div className="">
            <h1 className="text-[25px] font-[490] mt-6 mb-5">
              Vreau un cont nou
            </h1>
            <div className="">
              <p className="text-[17px]">Nume: </p>
              <input
                className="custom-input rounded-l w-[654px] h-[44px] border border-gray-400 placeholder-opacity-20 rounded-bl-xl rounded-tr-xl"
                type="text"
              />
            </div>
            <div className="mt-5">
              <p className="text-[17px]">Prenume: </p>
              <input
                className="custom-input rounded-l w-[654px] h-[44px] border border-gray-400 placeholder-opacity-20 rounded-bl-xl rounded-tr-xl"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mt-5">
              <p className="text-[17px]">Introdu adresa de email: </p>
              <input
                className="custom-input rounded-l w-[654px] h-[44px] border border-gray-400 placeholder-opacity-20 rounded-bl-xl rounded-tr-xl"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <p className="text-[17px]">Numarul de telefon: </p>
              <input
                className="custom-input rounded-l w-[654px] h-[44px] border border-gray-400 placeholder-opacity-20 rounded-bl-xl rounded-tr-xl"
                type="tel"
                pattern="[0-9]{10}"
                onChange={(e) => setNumaraTel(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <p className="text-[17px]">Parola: </p>
              <input
                className="custom-input rounded-l w-[654px] h-[44px] border border-gray-400 placeholder-opacity-20 rounded-bl-xl rounded-tr-xl"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <p className="text-[17px]">Confirma parola: </p>
              <input
                className="custom-input rounded-l w-[654px] h-[44px] border border-gray-400 placeholder-opacity-20 rounded-bl-xl rounded-tr-xl"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="font-[500] ">
                <input
                  className="mr-5 "
                  type="checkbox"
                  checked={isChecked1}
                  onChange={handleCheckboxChange1}
                />
                Sunt de acord cu{" "}
                <span className="text-red-600">Termenii si conditiile </span>de
                utilizare a site-ului altex.ro{" "}
              </label>
            </div>
            <div>
              <label className="font-[500] ">
                <input
                  className="mr-5 "
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleCheckboxChange2}
                />
                Aboneaza-te la newsletter-ul Altex pentru a primi cele mai bune
                oferte!
              </label>
            </div>
            <button
              className="mt-8 text-[17px] h-[45px] w-[654px] bg-yellow-400 rounded-bl-xl rounded-tr-xl"
              onClick={() => {
                verifyPass();
                signUp();
                handleButtonClick();
              }}
            >
              Inregistrare{" "}
            </button>
          </div>
        </div>
        <div className="sm:mt-5 lg:ml-[200px] lg:mt-[25px]">
          <h1 className="text-[25px] font-[550]">Am deja cont</h1>
          <LoginPage />
        </div>
      </div>
    </div>
  );
}
