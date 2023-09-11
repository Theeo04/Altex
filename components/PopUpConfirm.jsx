import { useRouter } from "next/router";
import React from "react";
AiOutlineRollback;
import { AiOutlineRollback } from "react-icons/ai";

function PopUpConfirm() {
  const router = useRouter();

  const backToIndex = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://t3.ftcdn.net/jpg/04/78/07/96/360_F_478079614_Gi8boHC9JICMDGTU8gH3YfibJKvmE8Qy.jpg"
        className="h-[200px] w-[200px]"
        alt="Success"
      />
      <p className="text-white text-[25px] mt-4">
        Comanda a fost plasata cu succes !
      </p>

      <button
        onClick={backToIndex}
        className="text-white w-[320px] h-[43px] flex bck text-[23px] rounded-bl-xl rounded-tr-xl hover:text-white hover:bg-black transition-colors duration-30"
      >
        Inapoi la pagina principala
        <AiOutlineRollback className="text-white mt-2 ml-2" />
      </button>
    </div>
  );
}

export default PopUpConfirm;
