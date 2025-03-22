import { useContext, useEffect, useState } from "react";
import { BoxPopUP, PopUpData, Confirmation } from "../App";

function Card({ Image, Name, Price, Rating, Sold }) {
  const { shoPopUP, setShoPopUP } = useContext(BoxPopUP);
  const { orderCart, setOrderCart } = useContext(Confirmation);

  const { setpopData } = useContext(PopUpData);

  const popUpDatafunc = () => {
    const product = {
      name: Name,
      img: Image,
      price: Price,
      rating: Rating,
    };

    setShoPopUP(!shoPopUP);
    setpopData(product);
  };

  function buyClick() {
    popUpDatafunc();
    setOrderCart("buy");
  }

  function cartClick() {
    popUpDatafunc();
    setOrderCart("cart");
  }

  return (
    <div className="w-full  rounded-md max-w-[230px] h-[350px] shadow-xl p-5 border mt-5 bg-white ">
      <div className="h-40 flex justify-center place-items-center">
        <img className="w-full h-full object-contain" src={Image} />
      </div>
      <div className="h-12 py-2">
        <h2 className="text-md  line-clamp-1 ">{Name}</h2>
      </div>
      <div className="flex justify-between">
        <img className="h-4" src={`ratings/rating-${Rating * 10}.png`} />
        <p>{Rating.toFixed(1)}</p>
      </div>
      <div className="flex justify-between py-2">
        <p>{Sold} sold</p>
        <p className="text-orange-500">₱{Price}</p>
      </div>
      <div className="flex justify-between pt-2">
        <i
          className="bi bi-cart-plus text-2xl text-[#2f2f31] cursor-pointer hover:text-red-600"
          onClick={cartClick}
        ></i>
        <button
          onClick={buyClick}
          className="bg-red-600 text-white border-2 rounded-md px-4  hover:bg-red-600"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;
