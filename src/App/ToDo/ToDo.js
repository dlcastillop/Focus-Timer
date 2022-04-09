import { React, useState } from "react";
// Componentes
import Boton from "../../Boton/Boton";

function ToDo() {
  return (
    <section>
      <h4>To-Do</h4>
      <p>
        <input type="checkbox" name="" id="" />
        Hacer el diseño
      </p>
      <input type="text" name="" id="" />
      <Boton nombre="Añadir" />
    </section>
  );
}

export default ToDo;
