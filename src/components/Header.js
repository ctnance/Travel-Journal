import React from "react";
import GlobeIcon from "../images/globe.svg";

export default function Header() {
  return (
    <header>
      <img src={GlobeIcon} alt="" />
      <h1>My Travel Journal</h1>
    </header>
  );
}
