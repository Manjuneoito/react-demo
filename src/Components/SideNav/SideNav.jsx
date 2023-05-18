import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-between items-center p-4 bg-white h-20 fixed inset-x-0 top-0 z-10">
      <div className="text-black font-bold text-2xl">Logo</div>
      <div className="flex space-x-4 text-black text-lg font-bold">
        <NavLink to="/" exact>
          Counter
        </NavLink>
        <NavLink to="/secondpage">Popup</NavLink>
      </div>
    </div>
  );
}

export default Nav;
