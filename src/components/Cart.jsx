import { useState } from "react";

const Cart = () => {
  const [orderdata, setOrderData] = useState(JSON.parse(localStorage.getItem("cart")));
  console.log("This is the Cart",typeof(orderdata), orderdata);

  return (
    <div className="w-full flex justify-center place-items-center pt-8">
      <div className="w-1/3">

      {orderdata.map( (item) => (
        <div className="w-full flex justify-center place-items-center bg-slate-200 border-red-500">

          <div className="h-12 w-full flex  gap-3">
            <div className="w-[50px]">
              <img className="w-full" src={item.img} />
            </div>
            <p>{item.name}</p>
          </div>
          </div>
        
      ))}
      </div>
    </div>
  );
};

export default Cart;
