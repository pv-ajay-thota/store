// import { useState } from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const LoadCartItem = ({ item, updateCart }) => {
  const [itemCount, setItemCount] = useState(item.quantity);

  const removefromCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        cartItems.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCart();
  };

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        cartItems[i].quantity = itemCount;
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCart();
  }, [itemCount]);

  return (
    <>
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img
              className="h-24"
              src="https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center ml-4 flex-grow">
            <span className="font-bold text-sm">{item.productName}</span>
            <span className="text-red-500 text-xs">{item.productBrand}</span>
            {/* <a
              href="/"
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </a> */}
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <button
            onClick={() => {
              if (itemCount > 1) {
                setItemCount(itemCount - 1);
              }
            }}
            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {itemCount}
          </div>
          <button
            onClick={() => setItemCount(itemCount + 1)}
            className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">
          ${item.price}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          ${item.price * itemCount}
        </span>
        <svg
          onClick={removefromCart}
          className="fill-gray-400 hover:fill-red-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
        </svg>
      </div>
    </>
  );
};

const OrderSummary = (props) => {
  let navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);

  // const cart = [
  //   {
  //     id: 1,
  //     productName: "Iphone 6S",
  //     productBrand: "Apple Inc",
  //     quantity: 2,
  //     price: 400,
  //   },
  //   {
  //     id: 2,
  //     productName: "Xiaomi 20000 mAH power bank",
  //     productBrand: "Xiaomi",
  //     quantity: 1,
  //     price: 10,
  //   },
  //   {
  //     id: 3,
  //     productName: "Apple Airpods",
  //     productBrand: "Apple Inc",
  //     quantity: 1,
  //     price: 150,
  //   },
  //   {
  //     id: 4,
  //     productName: "Zebronics Bluetooh Speaker",
  //     productBrand: "Zebronics",
  //     quantity: 1,
  //     price: 400,
  //   },
  // ];

  const getCartItems = () => {
    setCartItems(JSON.parse(localStorage.getItem("cart")));
    getOrderTotal();
  };

  const getOrderTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = total + cartItems[i].quantity * cartItems[i].price;
    }
    setOrderTotal(total);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const placeOrder = () => {
    console.log(cartItems);
    return <>order Has been placed</>;
  };

  // trash can svg ref
  // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-none">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <div>
            <div className="container mx-auto mt-10">
              <div className="flex shadow-md my-10">
                <div className="w-3/4 bg-white px-10 py-10">
                  <div className="flex justify-between border-b pb-8">
                    <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 className="font-semibold text-2xl">
                      {cartItems.length} Items
                    </h2>
                  </div>
                  <div className="flex mt-10 mb-5">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                      Product Details
                    </h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                      Quantity
                    </h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                      Price
                    </h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                      Total
                    </h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-5">
                      Action
                    </h3>
                  </div>

                  {cartItems &&
                    cartItems.map((item, index) => (
                      <div key={index}>
                        <LoadCartItem item={item} updateCart={getCartItems} />
                      </div>
                    ))}

                  <div
                    onClick={() => navigate("/store")}
                    className="flex font-semibold text-indigo-600 text-sm mt-10 hover:cursor-pointer"
                  >
                    <svg
                      className="fill-current mr-2 text-indigo-600 w-4"
                      viewBox="0 0 448 512"
                    >
                      <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                  </div>
                </div>

                <div id="summary" className="w-1/4 px-8 py-10">
                  <h1 className="font-semibold text-2xl border-b pb-8">
                    Order Summary
                  </h1>
                  {/* <div className="flex justify-between mt-10 mb-5">
                    <span className="font-semibold text-sm uppercase">
                      Items 3
                    </span>
                    <span className="font-semibold text-sm">${orderTotal}</span>
                  </div>
                  <div>
                    <label className="font-medium inline-block mb-3 text-sm uppercase">
                      Shipping
                    </label>
                    <select className="block p-2 text-gray-600 w-full text-sm">
                      <option>Standard shipping - $10.00</option>
                    </select>
                  </div>
                  <div className="py-10">
                    <label
                      htmlFor="promo"
                      className="font-semibold inline-block mb-3 text-sm uppercase"
                    >
                      Promo Code
                    </label>
                    <input
                      type="text"
                      id="promo"
                      placeholder="Enter your code"
                      className="p-2 text-sm w-full"
                    />
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                    Apply
                  </button> */}
                  <div className="border-t mt-8">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                      <span>Total cost</span>
                      <span>${orderTotal}</span>
                    </div>
                    <button
                      onClick={placeOrder}
                      className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
