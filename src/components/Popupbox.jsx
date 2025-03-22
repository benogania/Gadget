import { useContext, useEffect, useState } from "react";
import {
  BoxPopUP,
  PopUpData,
  CartData,
  OrdertData,
  Confirmation,
} from "../App";


function Popupbox() {
  const { shoPopUP, setShoPopUP } = useContext(BoxPopUP);
  const { popData } = useContext(PopUpData);
  const { orderCart} = useContext(Confirmation);

  const { cartdata, setCartData } = useContext(CartData);
  const { orderdata, setOrderData } = useContext(OrdertData);

  const [qauntity, setQuantity] = useState(1);

  function addQuantity() {
    setQuantity(qauntity + 1);
  }

  function minusQaintity() {
    setQuantity(qauntity > 1 ? qauntity - 1 : 1);
  }

  function cancel() {
    setShoPopUP(!shoPopUP);
    setQuantity(1);
  }

  function placeorder() {
    popData.totalPrice = popData.price * qauntity
    popData.qauntity = qauntity
    orderCart == "cart"
      ? setCartData([...cartdata, popData])
      : setOrderData([...orderdata, popData]);

    setQuantity(1);
    setShoPopUP(!shoPopUP);
    console.log(popData)
  }

  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cartdata));
    },
    [cartdata]
  );

  useEffect(
    function () {
      localStorage.setItem("orders", JSON.stringify(orderdata));
    },
    [orderdata]
  );
  

  return (
    shoPopUP && (
      <div className="w-full h-full z-10 bg-[rgba(0,0,0,0.3)] flex place-items-center justify-center fixed  top-0 backdrop-filter-blur shadow-md">
        <div className="  flex  flex-col w-[90%]  bg-white p-9 gap-5 rounded-xl md:w-1/2 h-1/2">
          {" "}
          <div className="flex gap-9">
          <div className="w-[150px]  flex justify-center place-items-center">
            <img src={popData.img} className="w-full h-[100px] object-contain" />
          </div>
          <h2 className=" text-xl line-clamp-2  md:text-4xl">
              {popData.name}
            </h2>
            </div>

          

          <div className="flex flex-col w-full gap-5 h-full">
            

            <div className="flex justify-between place-items-center">
            <p>{popData.rating.toFixed(1)}</p>
            <p>500k sold</p>
              
            </div>
            

            <div className="flex justify-between">
              <div>
                <p>Total price</p>
                <p className="text-red-700">₱{popData.price * qauntity}</p>
              </div>
              <div className="flex justify-center place-items-center gap-3">
                <button onClick={minusQaintity} className="px-3 border text-lg">
                  -
                </button>
                <p>{qauntity}</p>
                <button onClick={addQuantity} className="px-3 border text-lg">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-end gap-5">
              <button
                onClick={cancel}
                className="border border-red-700  text-red-700 rounded-lg px-3 py-1"
              >
                Cancel
              </button>
              <button
                onClick={placeorder}
                className="bg-red-700 rounded-lg px-3 py-1 text-white"
              >
                {orderCart == "cart" ? "Add to cart" :"Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Popupbox;
