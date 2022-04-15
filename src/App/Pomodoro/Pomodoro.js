import { React, useState, useEffect } from "react";
// Componentes
import Boton from "../../Boton/Boton";
// Audio
import beepAudio from "../../audio/build_testable-projects-fcc_audio_BeepSound.wav";

function Pomodoro() {
  // Variables del temporizador
  let [minuto1, setMinuto1] = useState(2);
  let [minuto2, setMinuto2] = useState(5);
  let [segundo1, setSegundo1] = useState(0);
  let [segundo2, setSegundo2] = useState(0);
  // Variables para el cambio entre los temporizadores
  let [isPomodoroOn, setIsPomodoroOn] = useState(true);
  let [cantPomodoro, setcantPomodoro] = useState(1);
  // Variables para iniciar/detener la app
  let [iniciar, setIniciar] = useState(false);

  // Controla el cambio entre los temporizadores
  function controlTiempos() {
    // Descanso corto
    if (isPomodoroOn && cantPomodoro < 4) {
      setMinuto1(0);
      setMinuto2(5);
      setSegundo1(0);
      setSegundo2(0);
      setIsPomodoroOn(false);
      // Descanso largo
    } else if (isPomodoroOn && cantPomodoro === 4) {
      setMinuto1(1);
      setMinuto2(5);
      setSegundo1(0);
      setSegundo2(0);
      setIsPomodoroOn(false);
      // Pomodoro
    } else {
      setMinuto1(2);
      setMinuto2(5);
      setSegundo1(0);
      setSegundo2(0);
      setIsPomodoroOn(true);
      setcantPomodoro((prev) => {
        if (prev === 4) {
          return 1;
        }
        return prev + 1;
      });
    }
  }

  // Contador regresivo
  function contador() {
    setIniciar(true);
    if (minuto1 === 0 && minuto2 === 0 && segundo1 === 0 && segundo2 === 0) {
      let elementoAudio = document.getElementById("beep");
      elementoAudio.play();
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

  return (
    <section id="pomodoro">
      <div className="row margen-abajo-pomodoro">
        <span className="col-sm-4 col-6" id="pomodoro-span">
          Pomodoro
        </span>
        <span className="col-sm-4 col-6">Descanso corto</span>
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
        <Boton nombre="Iniciar" fun={contador} />
      </div>

      <div id="cant">#{cantPomodoro}</div>

      <audio id="beep" preload="auto" src={beepAudio}></audio>
    </section>
  );
}

export default Pomodoro;
