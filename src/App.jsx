import { useState, createContext, useEffect } from "react";
import Nav from "./components/nav";
import Slider from "./components/slider";
import Products from "./components/products";
import Popupbox from "./components/Popupbox";

//popbox from buy and cart button
export const BoxPopUP = createContext();
export const PopUpData = createContext();

//Order and CartData Contecxt
export const CartData = createContext();
export const OrdertData = createContext();

export const Confirmation = createContext()

function App() {
  const [orderCart,setOrderCart] = useState("")
  
  //PopUp screen when aading cart
  const [shoPopUP, setShoPopUP] = useState(false);
  const [popData, setpopData] = useState(null);

  //Cart and Orders Data
  const [cartdata, setCartData] = useState(
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  // order data
  const [orderdata, setOrderData] = useState(
    localStorage.getItem("orders")
      ? JSON.parse(localStorage.getItem("orders"))
      : []
  );

  return (
    //providing data and control to all the children
    <BoxPopUP.Provider value={{ shoPopUP, setShoPopUP }}>
      <PopUpData.Provider value={{ popData, setpopData }}>
        <CartData.Provider value={{ cartdata, setCartData }}>
          <OrdertData.Provider value={{ orderdata, setOrderData }}>
            <Confirmation.Provider value={{orderCart, setOrderCart}}>
            <div className="flex  flex-col justify-center place-items-center">
              <Popupbox />
              <Nav />
              {/* <Slider/> */}
              <Products />
            </div>
            </Confirmation.Provider>
          </OrdertData.Provider>
        </CartData.Provider>
      </PopUpData.Provider>
    </BoxPopUP.Provider>
  );
}

export default App;
