import React from "react";

function Boton(props) {
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={props.fun}>
        {props.nombre}
      </button>
    </>
  );
}

export default Boton;
