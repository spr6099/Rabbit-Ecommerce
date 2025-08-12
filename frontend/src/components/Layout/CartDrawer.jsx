import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  //   const [drawerOpen, setdrawerOpen] = useState("");

  //   const toggleCartDrawer = () => {
  //     setdrawerOpen(!drawerOpen);
  //   };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close button */}

      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Cart contents with scrollable area */}
      <div className="flex-grow overflow-y-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      </div>

      {/* checkout button fixed at bottom */}

      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p>Shipping,taxes and discount codes calculated at checkout</p>
      </div>
    </div>
  );
};

export default CartDrawer;
