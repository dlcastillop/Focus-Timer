import { React, useState } from "react";
// Componentes
import Boton from "../../Boton/Boton";

function ToDo() {
  let [tareas, setTareas] = useState([]);

  function añadirTarea() {
    setTareas((prev) => {
      return [...prev, document.getElementById("tarea").value];
    });
  }

  function terminarTarea() {
    let checkboxs = document.getElementsByClassName("checkbox");
    let labels = document.getElementsByClassName("label");

    for (let i = 0; i < checkboxs.length; i++) {
      if (checkboxs[i].checked === true) {
        checkboxs[i].disabled = true;
        labels[i].classList.add("tarea-terminada");
      }
    }
  }

  return (
    <section id="to-do">
      <h2>To-Do</h2>

      <ul>
        {tareas.map((elemento, llave) => (
          <li key={llave}>
            <input
              type="checkbox"
              className="checkbox"
              onClick={terminarTarea}
            />
            <label htmlFor="" className="label">
              {elemento}
            </label>
          </li>
        ))}
      </ul>

      <input type="text" name="" id="tarea" />
      <Boton nombre="Añadir" fun={añadirTarea} />
    </section>
  );
}

export default ToDo;
