import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import List from "./List";

const Navbar = () => {

  return (
    <nav>
      <NavLink to="/" element={<Home />}>
        Home
      </NavLink>
      <NavLink to="/list" element={<List />}>
        List
      </NavLink>
    </nav>
  );
};

export default Navbar;