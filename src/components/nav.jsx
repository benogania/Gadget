import { useState, useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { CartData, OrdertData } from "../App";
import { Link } from "react-router-dom";
import OrderHoverCard from "./OrderHoverCard";

const Nav = () => {
  const { cartdata } = useContext(CartData);
  const { orderdata } = useContext(OrdertData);
  const [showsearch, setShowsearch] = useState(false);

  const inputvalue = useRef("Hello");
  const changealue = useRef(null);

  const [showOrders, setShowOrders] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function inputhover(e) {
    setShowsearch(true);
    console.log(e);
  }

  function rearchinputs(e) {
    const text = inputvalue.current.value;
    changealue.current.innerText = text;
  }

  function remove() {
    setShowsearch(false);
  }

  function mouseover() {
    setShowOrders(true);
  }
  function mouseleave() {
    setShowOrders(false);
    setShowCart(false);
  }

  function showCartItem() {
    setShowCart(true);
  }

  return (
    <div className=" shadow-md  w-full h-28 flex place-items-center justify-between  bg-white">
      <Link
        to={"/"}
        className="hidden justify-center font-bold text-4xl md:w-1/4 xl:flex  "
      >
        <h1>
          GADGY<span className="text-red-500">SHOP🔥</span>
        </h1>
      </Link>

      <div className="w-full px-3 flex justify-between place-items-center xl:w-1/2">
        <div className="w-[80%] flex justify-between text-black rounded-3xl overflow-hidden border border-[rgba(0,0,0,0.3)] shadow-sm bg-red">
          <input
            className="w-[100%] h-12 px-4 outline-none"
            placeholder="Search product"
            onFocus={inputhover}
            onBlur={remove}
            onChange={rearchinputs}
            ref={inputvalue}
          />
          <div className="flex place-items-center relative">
            <div className="w-16 h-full bg-white flex place-items-center justify-center">
              <i className="bi bi-search "></i>
            </div>
          </div>
          {/* Search BarFilter */}
          <div
            className={
              showsearch
                ? " px-6  py-2 shadow-lg  w-[80%] h-16 bg-gray-100 absolute top-20  border"
                : "hidden"
            }
            ref={changealue}
          >
            Searching for...
          </div>
        </div>
        <div>
          <i className="bi bi-list text-4xl md:hidden"></i>
        </div>
      </div>
     
      <p></p>

      <div className="hidden lg:flex place-items-center justify-center gap-10 w-1/4">
      <Link to={"/cart"}>
        <div
          className="hidden  md:relative md:inline-block "
          onMouseOver={showCartItem}
          onMouseLeave={mouseleave}
        >
          <div className="flex w-6 justify-center px-1 place-items-center rounded-full bg-red-700 absolute top-[-10px] right-[-10px] text-white">
            {cartdata.length ? cartdata.length : " "}
          </div>
          <i className="hidden md:inline-block bibi bi bi-cart2 text-3xl cursor-pointer"></i>
          <div
            className={
              showCart 
                ? "w-80  flex absolute  flex-col px-3 py-2 top-10  left-[-150px]"
                : "hidden"
            }
            onMouseOver={showCartItem}
          >
            <div className="w-80 mt-2 p-3 bg-white border shadow-lg">
              <div className="pb-3 text-red-600">Recent Added</div>
              {cartdata.map((e, index) => (
                <OrderHoverCard key={index} Name={e.name} Image={e.img} Price={e.totalPrice} />
              ))}

              <div className="py-2 w-full flex justify-end">
                <button className="bg-red-600 text-white rounded-md py-1 px-2">View All</button>
              </div>
            </div>
          </div>
        </div>
        </Link>

        <Link to={"/orders"}>
          <div
            className="hidden md:relative md:inline-block"
            onMouseOver={mouseover}
            onMouseLeave={mouseleave}
          >
            <div className="flex w-6 justify-center px-1 place-items-center rounded-full bg-red-700 absolute top-[-10px] right-[-10px] text-white">
              {orderdata.length ? orderdata.length : ""}
            </div>
            <i className="bibi bi-truck text-3xl cursor-pointer "></i>

            {/* Orders */}
           
              <div className={
                showOrders ? "absolute text-center w-28 top-10 left-[-35px] p-1 bg-white border shadow-lg": "hidden"
              }>
                My Purches
              </div>
          </div>
        </Link>

        <Link to={"/signup"}>
          <button className="hidden  gap-2 place-items-center justify-center md:flex py-1 px-3 bg-red-500 text-white rounded-lg">
            Sign Up
            <i className=" bibi bi-person-circle text-xl"></i>
          </button>
        </Link>
  
      </div>
    </div>
  );
};

export default Nav;
