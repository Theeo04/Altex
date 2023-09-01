import React, { useContext } from "react";
import { GiDiamonds } from "react-icons/gi";
import CartContext from "./CartContext";

function Produs({ numeProdus, pret, image, rating, noRatings }) {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart({
      name: numeProdus,
      price: pret,
      image: image,
      // Add other properties as needed
    });
  };

  function truncateText(sentence, maxLength) {
    const words = sentence.split(" ");

    if (words.length > maxLength) {
      const truncatedWords = words.slice(0, maxLength);
      return `${truncatedWords.join(" ")}...`;
    }

    return sentence;
  }
  const trucateTitle = truncateText(numeProdus, 8);

  return (
    <div className="w-[220px] h-[390px] border flex-col items-center pl-4 pr-4 pt-4 border-xl rounded transform transition-transform hover:scale-105">
      <div className="flex justify-center">
        <img className="w-[160px] h-[170px] " src={image} alt="imagineProdus" />
      </div>
      <div className="w-[210px] h-[45px]">
        <p className="text-[14px] pt-3">{trucateTitle}</p>
      </div>
      <p className="flex text-[12px] text-green-600 pt-4">
        <GiDiamonds className="text-[16px] pt-1" /> in stoc
      </p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-300" : "text-gray-500"
            }  `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        <p className="pl-3 text-[13px] font-[500]">({noRatings})</p>
      </div>
      <p className="text-[22px] font-[500] text-red-600 pb-3">{pret} lei</p>
      <div className="w-[190px] h-[30px] flex items-center justify-center bck rounded-bl-xl rounded-tr-xl darker">
        <button
          className="text-white w-[180px] h-[29px]"
          onClick={addToCartHandler}
        >
          Adauga in cos
        </button>
      </div>
    </div>
  );
}

export default Produs;
