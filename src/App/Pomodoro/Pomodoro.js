import { React, useState, useEffect } from "react";
// Componentes
import Boton from "../../Boton/Boton";
// Audio
import beepAudio from "../../audio/build_testable-projects-fcc_audio_BeepSound.wav";

function Pomodoro() {
  // Variables del temporizador
  let [minuto1, setMinuto1] = useState(0);
  let [minuto2, setMinuto2] = useState(0);
  let [segundo1, setSegundo1] = useState(2);
  let [segundo2, setSegundo2] = useState(5);
  // Variables para el cambio entre los temporizadores
  let [isPomodoroOn, setIsPomodoroOn] = useState(true);
  let [cantPomodoro, setcantPomodoro] = useState(1);
  // Variables para iniciar/detener la app
  let [iniciar, setIniciar] = useState(false);

  // Controla el cambio entre los temporizadores
  function controlTiempos() {
    if (isPomodoroOn && cantPomodoro < 4) {
      setMinuto1(0);
      setMinuto2(0);
      setSegundo1(0);
      setSegundo2(5);
      setIsPomodoroOn(false);
    } else if (isPomodoroOn && cantPomodoro === 4) {
      setMinuto1(0);
      setMinuto2(0);
      setSegundo1(1);
      setSegundo2(5);
      setIsPomodoroOn(false);
    } else {
      setMinuto1(0);
      setMinuto2(0);
      setSegundo1(2);
      setSegundo2(5);
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
  }, [segundo2]);

  return (
    <>
      <section>
        <h4>Pomodoro</h4>
        <h4>Descanso corto</h4>
        <h4>Descanso largo</h4>
        <p>
          {minuto1}
          {minuto2}:{segundo1}
          {segundo2}
        </p>
        <Boton nombre="Iniciar" fun={contador} />
        <p>#{cantPomodoro}</p>
        <audio id="beep" preload="auto" src={beepAudio}></audio>
      </section>
    </>
  );
}

export default Pomodoro;