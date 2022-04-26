import { React, useState, useEffect } from "react";
// Componentes
import Boton from "../../Boton/Boton";
import Ajustes from "../Ajustes/Ajustes";
// Audio
import beepAudio from "../../audio/build_testable-projects-fcc_audio_BeepSound.wav";

function Pomodoro() {
  // Variables de los tiempos
  let [tiempoPomodoro, setTiempoPomodoro] = useState(25);
  let [tiempoCorto, setTiempoCorto] = useState(5);
  let [tiempoLargo, setTiempoLargo] = useState(15);
  // Variables para los cambios automáticos
  let [comenzarDescanso, setComenzarDescanso] = useState(false);
  let [comenzarPomodoro, setComenzarPomodoro] = useState(false);
  // Variables del temporizador
  let [minuto1, setMinuto1] = useState(2);
  let [minuto2, setMinuto2] = useState(5);
  let [segundo1, setSegundo1] = useState(0);
  let [segundo2, setSegundo2] = useState(0);
  // Variables para el cambio entre los temporizadores
  let [isPomodoroOn, setIsPomodoroOn] = useState(true);
  let [cantPomodoro, setcantPomodoro] = useState(1);
  // Variable para iniciar/detener la app
  let [iniciar, setIniciar] = useState(false);
  // Variable para el bloquear/desbloquear el botón Iniciar
  let [boton, setBoton] = useState(true);

  // Comienza el temporizador
  function comenzar() {
    if (boton) {
      setBoton(false);
      setIniciar(true);
      contador();
    }
  }

  // Contador regresivo
  function contador() {
    if (minuto1 === 0 && minuto2 === 0 && segundo1 === 0 && segundo2 === 0) {
      let elementoAudio = document.getElementById("beep");
      elementoAudio.play();
      if (isPomodoroOn && comenzarDescanso === false) {
        setIniciar(false);
        setBoton(true);
      } else if (isPomodoroOn === false && comenzarPomodoro === false) {
        setIniciar(false);
        setBoton(true);
      }
      controlTiempos();
    } else if (minuto2 === 0 && segundo1 === 0 && segundo2 === 0) {
      setMinuto1((prev) => {
        return prev - 1;
      });
      setMinuto2(9);
      setSegundo1(5);
      setSegundo2(9);
    } else if (segundo1 === 0 && segundo2 === 0) {
      setMinuto2((prev) => {
        return prev - 1;
      });
      setSegundo1(5);
      setSegundo2(9);
    } else if (segundo2 === 0) {
      setSegundo1((prev) => {
        return prev - 1;
      });
      setSegundo2(9);
    } else {
      setSegundo2((prev) => {
        return prev - 1;
      });
    }
  }

  // Inicia/detiene el temporizador
  useEffect(() => {
    if (iniciar === false) {
      return;
    }
    const id = setInterval(contador, 1000);
    return () => clearInterval(id);
  }, [minuto2, minuto1, segundo2, segundo1]);

  // Controla el cambio entre los temporizadores
  function controlTiempos() {
    let pomodoroSpan = document.getElementById("pomodoro-span");
    let descansoCortoSpan = document.getElementById("corto-span");
    let descansoLargoSpan = document.getElementById("largo-span");

    // Descanso corto
    if (isPomodoroOn && cantPomodoro < 4) {
      setMinuto1(Math.floor(tiempoCorto / 10));
      setMinuto2(tiempoCorto % 10);
      setSegundo1(0);
      setSegundo2(0);
      setIsPomodoroOn(false);
      pomodoroSpan.classList.remove("señalar-temporizador");
      descansoCortoSpan.classList.add("señalar-temporizador");
      descansoLargoSpan.classList.remove("señalar-temporizador");
      // Descanso largo
    } else if (isPomodoroOn && cantPomodoro === 4) {
      setMinuto1(Math.floor(tiempoLargo / 10));
      setMinuto2(tiempoLargo % 10);
      setSegundo1(0);
      setSegundo2(0);
      setIsPomodoroOn(false);
      pomodoroSpan.classList.remove("señalar-temporizador");
      descansoCortoSpan.classList.remove("señalar-temporizador");
      descansoLargoSpan.classList.add("señalar-temporizador");
      // Pomodoro
    } else {
      setMinuto1(Math.floor(tiempoPomodoro / 10));
      setMinuto2(tiempoPomodoro % 10);
      setSegundo1(0);
      setSegundo2(0);
      setIsPomodoroOn(true);
      setcantPomodoro((prev) => {
        if (prev === 4) {
          return 1;
        }
        return prev + 1;
      });
      pomodoroSpan.classList.add("señalar-temporizador");
      descansoCortoSpan.classList.remove("señalar-temporizador");
      descansoLargoSpan.classList.remove("señalar-temporizador");
    }
  }

  // Establece los ajustes
  function establecerAjustes() {
    let ajustePomodoro = parseInt(
      document.getElementById("ajuste-pomodoro").value,
      10
    );
    let ajusteCorto = parseInt(
      document.getElementById("ajuste-corto").value,
      10
    );
    let ajusteLargo = parseInt(
      document.getElementById("ajuste-largo").value,
      10
    );
    let autoDescanso = document.getElementById("auto-descansos").checked;
    let autoPomodoro = document.getElementById("auto-pomodoro").checked;

    if (isNaN(ajustePomodoro) || isNaN(ajusteCorto) || isNaN(ajusteLargo)) {
      alert("Tienes que llenar todos los campos.");
    } else if (ajustePomodoro <= 0 || ajusteCorto <= 0 || ajusteLargo <= 0) {
      alert("Los tiempos tienen que ser mayores que cero");
    } else {
      setIniciar(false);
      setBoton(true);
      setTiempoPomodoro(ajustePomodoro);
      setTiempoCorto(ajusteCorto);
      setTiempoLargo(ajusteLargo);
      document.getElementById("ajustes").classList.remove("abrir");
      document.getElementById("ajustes").classList.add("cerrar");
    }

    setComenzarDescanso(autoDescanso);
    setComenzarPomodoro(autoPomodoro);
  }

  // Muestra los nuevos ajustes
  useEffect(() => {
    setMinuto1(Math.floor(tiempoPomodoro / 10));
    setMinuto2(tiempoPomodoro % 10);
    setSegundo1(0);
    setSegundo2(0);
  }, [tiempoPomodoro, tiempoCorto, tiempoLargo]);

  return (
    <>
      <section id="pomodoro">
        <div className="row margen-abajo-pomodoro">
          <span
            className="col-sm-4 col-6 señalar-temporizador"
            id="pomodoro-span"
          >
            Pomodoro
          </span>
          <span className="col-sm-4 col-6" id="corto-span">
            Descanso corto
          </span>
          <span className="col-sm-4 col-12" id="largo-span">
            Descanso largo
          </span>
        </div>

        <div id="temporizador" className="margen-abajo-pomodoro">
          {minuto1}
          {minuto2}:{segundo1}
          {segundo2}
        </div>

        <div id="boton" className="margen-abajo-pomodoro">
          <Boton nombre="Iniciar" fun={comenzar} />
        </div>

        <div id="cant" className="margen-abajo-pomodoro">
          #{cantPomodoro}
        </div>

        <audio id="beep" preload="auto" src={beepAudio}></audio>
      </section>
      <Ajustes funcion={establecerAjustes} />
    </>
  );
}

export default Pomodoro;
