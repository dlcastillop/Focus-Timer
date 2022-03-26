import React from "react";
// Componentes
import Logo from "../Logo/Logo";
import Boton from "../Boton/Boton";
import Footer from "../Footer/Footer";
// Imágenes
import heroImg from "../images/undraw_Order_confirmed_re_g0if.jpg";
import queEsImg from "../images/undraw_working_remotely_jh40.jpg";
import comoFuncImg from "../images/undraw_Time_management_re_tk5w.jpg";
import cualesBenefImg from "../images/undraw_Nature_benefits_re_kk70.jpg";

function Landing() {
  return (
    <>
      <nav>
        <Logo />
        <Boton nombre="Concéntrate" />
      </nav>

      <header>
        <p>
          Focus Timer te ayuda a mantener la concentración usando la técnica del
          pomodoro. ⏱ Ajustes personalizados 📢 Notificaciones de audio ✔ Lista
          de tareas
        </p>
        <img src={heroImg} alt="" />
      </header>

      <section>
        <h2>¿Qué es la técnica del pomodoro?</h2>
        <img src={queEsImg} alt="" />
        <p>
          Es un método para mejorar la administración del tiempo dedicado a una
          actividad.​
        </p>
      </section>

      <section>
        <h2>¿Cómo funciona?</h2>
        <p>
          Se usa un temporizador para dividir el tiempo en intervalos fijos de
          25 minutos seguidos de 5 minutos de descanso, con pausas más largas
          cada cuatro ciclos.
        </p>
        <img src={comoFuncImg} alt="" />
      </section>

      <section>
        <h2>¿Cuáles son sus beneficios?</h2>
        <img src={cualesBenefImg} alt="" />
        <p>
          Las pausas regulares pueden mejorar la agilidad mental​, motiva una
          respuesta eficiente, previene la multitarea y ayuda a alcanzar un
          estado de foco más elevado.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Landing;
