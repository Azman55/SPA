import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Menu() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex justify-between m-auto p-3 md:items-center md:justify-between lg:m-2 lg:p-2">
      <h1 className="text-3xl font-bold text-gray-600">Ecommerce</h1>
      <NavLink to="/" activeClassName="active">
        <h1
          id="Menu"
          className="text-xl md:text-2xl font-bold text-gray-600 border-2 border-stone-600 p-2 md:p-2 rounded-lg md:rounded-2xl hover:bg-stone-300 hover:text-black focus:outline-none focus:border-none"
        >
          Menu
        </h1>
      </NavLink>

      <div>
        <NavLink to="/cart">
          <span className="font-bold border-2 p-2 rounded-xl hover:bg-violet-600 hover:text-white">
            Cart
            <span className="rounded-md text-xl text-red-400">
              ({cart.length})
            </span>
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
