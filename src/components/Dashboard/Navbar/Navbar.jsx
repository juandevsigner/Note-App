import React from "react";
import { NavbarBtnMenu, NavbarProfile } from "./children";
import NavbarSearch from "./children/NavbarSearch";

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarBtnMenu />
      <NavbarSearch />
      <NavbarProfile />
    </div>
  );
};
