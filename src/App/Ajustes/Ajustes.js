import { React, useState } from "react";
// Componentes
import Boton from "../../Boton/Boton";

function Ajustes(props) {
  return (
    <>
      <h4>Ajustes</h4>
      <hr />

      <h5>Tiempo (minutos)</h5>
      <label>Pomodoro</label>
      <input type="number" id="ajuste-pomodoro" />
      <label>Descanso corto</label>
      <input type="number" id="ajuste-corto" />
      <label>Descanso largo</label>
      <input type="number" id="ajuste-largo" />
      <hr />

      <h5>Cambios automáticos</h5>
      <div class="form-check form-switch">
        <label class="form-check-label" for="flexSwitchCheckDefault">
          ¿Comenzar automáticamente los descansos?
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked="true"
        />
      </div>

      <div class="form-check form-switch">
        <label class="form-check-label" for="flexSwitchCheckDefault">
          ¿Comenzar automáticamente los pomodoros?
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
      <hr />

      <Boton nombre="Ok" fun={props.funcion} />
    </>
  );
}

export default Ajustes;
