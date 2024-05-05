"use client";

// Internal dependencies
import MobileNavBar from "./mobile";
import WebNavBar from "./web";
import { NavBarPropTypes } from "./_types";

const NavBar = (props: NavBarPropTypes) => {
  return (
    <>
      <WebNavBar {...props} />
      <MobileNavBar {...props} />
    </>
  );
};

export default NavBar;
