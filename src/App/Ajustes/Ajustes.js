import { React } from "react";
// Componentes
import Boton from "../../Boton/Boton";

function Ajustes() {
  function hola() {
    document.getElementById("pomodoro1").value = "25";
  }

  return (
    <>
      <h3>Ajustes</h3>
      <hr />

      <h4>Tiempo (minutos)</h4>
      <label>Pomodoro</label>
      <input type="text" id="pomodoro1" />
      <label>Descanso corto</label>
      <input type="text" />
      <label>Descanso largo</label>
      <input type="text" />
      <hr />

      <h4>Cambios automáticos</h4>
      <div class="form-check form-switch">
        <label class="form-check-label" for="flexSwitchCheckDefault">
          ¿Comenzar automáticamente los descansos?
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
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

      <Boton nombre="Ok" fun={hola} />
    </>
  );
}

export default Ajustes;
