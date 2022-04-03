import React from "react";
// Imágenes
import logoImg from "../images/stopwatch.jpg";

function Logo() {
  return (
    <>
      <img
        src={logoImg}
        alt="Logo"
        className="d-inline-block align-text-center"
      />
      <span>Focus Timer</span>
    </>
  );
}

export default Logo;
