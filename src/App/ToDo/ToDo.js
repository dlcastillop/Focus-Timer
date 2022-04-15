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

    for (let i = 0; i < checkboxs.length; i++) {
      if (checkboxs[i].checked === true) {
        checkboxs[i].disabled = true;
      }
    }

    // Falta aplicar CSS rayando el texto de la tarea
  }

  return (
    <section>
      <h4>To-Do</h4>
      <ul>
        {tareas.map((elemento, llave) => (
          <li key={llave}>
            <input
              type="checkbox"
              className="checkbox"
              onClick={terminarTarea}
            />
            {" " + elemento}
          </li>
        ))}
      </ul>
      <input type="text" name="" id="tarea" />
      <Boton nombre="Añadir" fun={añadirTarea} />
    </section>
  );
}

export default ToDo;
