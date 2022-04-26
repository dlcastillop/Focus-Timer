import React from "react";
// Componentes
import Boton from "../../Boton/Boton";

function Ajustes(props) {
  return (
    <section id="ajustes" className="cerrar">
      <h4>Ajustes</h4>
      <hr />

      <div className="row">
        <h5>Tiempo (minutos)</h5>
        <div className="col-sm-4 col-6">
          <label>Pomodoro</label>
          <input type="number" className="form-control" id="ajuste-pomodoro" />
        </div>

        <div className="col-sm-4 col-6">
          <label>Descanso corto</label>
          <input type="number" className="form-control" id="ajuste-corto" />
        </div>

        <div className="col-sm-4 col-12">
          <label>Descanso largo</label>
          <input type="number" className="form-control" id="ajuste-largo" />
        </div>
      </div>
      <hr />

      <h5>Cambios automáticos</h5>
      <div class="form-check form-switch">
        <label class="form-check-label" for="auto-descansos">
          ¿Comenzar automáticamente los descansos?
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="auto-descansos"
        />
      </div>

      <div class="form-check form-switch">
        <label class="form-check-label" for="auto-pomodoro">
          ¿Comenzar automáticamente los pomodoros?
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="auto-pomodoro"
        />
      </div>
      <hr />

      <div className="boton-p">
        <Boton nombre="Ok" fun={props.funcion} />
      </div>
    </section>
  );
}

export default Ajustes;
