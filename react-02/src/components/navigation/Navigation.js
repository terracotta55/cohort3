import React from "react";
import "./Navigation.css";
import Image_1 from "./svg_images/001-barcode.svg";
import Image_2 from "./svg_images/002-calendar.svg";
import Image_3 from "./svg_images/003-price.svg";
import Image_4 from "./svg_images/004-discount.svg";
import Image_5 from "./svg_images/009-location.svg";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <header className="Images-header">
      <NavLink to="/">
        <img alt="" src={Image_2} className="Images-svg"></img>
        <p>Home</p>
      </NavLink>
      <NavLink to="/game">
        <img alt="" src={Image_3} className="Images-svg"></img>
        <p>Game</p>
      </NavLink>
      <NavLink to="/account">
        <img alt="" src={Image_5} className="Images-svg"></img>
        <p>Account</p>
      </NavLink>
      <NavLink to="/city">
        <img alt="" src={Image_4} className="Images-svg"></img>
        <p>City</p>
      </NavLink>
      <NavLink to="/hooks">
        <img alt="" src={Image_1} className="Images-svg"></img>
        <p>Linked List</p>
      </NavLink>
    </header>
  );
};
export default Navigation;
