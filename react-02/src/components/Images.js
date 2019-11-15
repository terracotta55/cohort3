import React from "react";
import "./Images.css";
import Image_1 from "./svg_images/001-barcode.svg";
import Image_2 from "./svg_images/002-calendar.svg";
import Image_3 from "./svg_images/003-price.svg";
import Image_4 from "./svg_images/004-discount.svg";
import Image_5 from "./svg_images/009-location.svg";

export const Images = props => {
  return (
    <header className="Images-header">
      <img
        onMouseOver={props.someHovering}
        onMouseOut={props.noHovering}
        alt=""
        src={Image_2}
        className="Images-svg"
      ></img>
      <img
        onMouseOver={props.someHovering}
        onMouseOut={props.noHovering}
        alt=""
        src={Image_3}
        className="Images-svg"
      ></img>
      <img
        onMouseOver={props.someHovering}
        onMouseOut={props.noHovering}
        alt=""
        src={Image_5}
        className="Images-svg"
      ></img>
      <img
        onMouseOver={props.someHovering}
        onMouseOut={props.noHovering}
        alt=""
        src={Image_4}
        className="Images-svg"
      ></img>
      <img
        onMouseOver={props.someHovering}
        onMouseOut={props.noHovering}
        alt=""
        src={Image_1}
        className="Images-svg"
      ></img>
    </header>
  );
};
