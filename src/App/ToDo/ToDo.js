import { React, useState } from "react";
// Componentes
import Boton from "../../Boton/Boton";

function ToDo() {
  let [tareas, setTareas] = useState([]);

  // Añade tareas
  function añadirTarea() {
    let textoTarea = document.getElementById("tarea").value;

    document.getElementById("tarea").value = "";

    setTareas((prev) => {
      if (textoTarea.length === 0 || /^\s+$/.test(textoTarea)) {
        return [...prev];
      } else {
        return [...prev, textoTarea];
      }
    });
  }

  // Finaliza las tareas
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
    <section id="to-do" className="form-check">
      <h2 className="margen-abajo-pomodoro">To-Do</h2>

      <ul className="row margen-abajo-pomodoro">
        {tareas.map((elemento, llave) => (
          <li key={llave} className="col-lg-4 col-sm-6">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              id="flexCheckDefault"
              onClick={terminarTarea}
            />
            <label
              className="form-check-label label"
              htmlFor="flexCheckDefault"
            >
              {elemento}
            </label>
          </li>
        ))}
      </ul>

      <div id="añadir-tareas" className="margen-abajo-pomodoro">
        <input
          type="text"
          className="form-control col-6"
          id="tarea"
          placeholder="¿Qué quieres conseguir hoy?"
        />
        <Boton nombre="Añadir" fun={añadirTarea} />
      </div>
    </section>
  );
}

export default ToDo;
