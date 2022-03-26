import React from "react";
// Imágenes
import logoImg from "../images/stopwatch.jpg";

function Logo() {
  return (
    <>
      <a href="">
        <img src={logoImg} alt="Logo" />
        <p>Focus Timer</p>
      </a>
    </>
  );
}

export default Logo;
