import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

export default function LoginPage({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    //Signed in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoggedIn(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/register");
  };

  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <p className="pr-[25px] font-semibold pb-2">
            Introdu adresa de email*
          </p>
          <input
            className="rounded-l w-[280px] h-[40px] border border-gray-400 italic placeholder-opacity-20"
            type="email"
            placeholder="   Introdu adresa de email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <p className="pr-[58px] pt-3 font-semibold ">Parola</p>
          <input
            className="rounded-l w-[280px] h-[40px] border border-gray-400 italic placeholder-opacity-20"
            type="password"
            placeholder="   Parola"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="text-center font-semibold text-[16px] bg-yellow-400 h-[40px] w-[280px] rounded-bl-xl rounded-tr-xl mt-[25px]"
          onClick={signIn}
        >
          Autentificare
        </button>
        <button
          onClick={handleNavigation}
          className="text-red-700 underline text-[14px] pt-5"
        >
          Inregistrare
        </button>
      </div>
    </div>
  );
}
