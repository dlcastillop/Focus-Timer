import React from "react";
import { Link } from "react-router-dom";
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
      <nav className="navbar navbar-expand margen-abajo">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <Logo />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/app" className="nav-link">
                  <Boton nombre="Concéntrate" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="row margen-abajo">
        <p className="col-lg-6">
          Focus Timer te ayuda a mantener la concentración usando la técnica del
          pomodoro.
          <br /> ⏱ Ajustes personalizados
          <br /> 📢 Notificaciones de audio
          <br /> ✔ Lista de tareas
        </p>
        <img src={heroImg} alt="" className="col-lg-6 img-fluid" />
      </header>

      <section className="row margen-abajo">
        <h2>¿Qué es la técnica del pomodoro?</h2>
        <img src={queEsImg} alt="" className="col-lg-6 img-fluid" />
        <p className="col-lg-6">
          Es un método para mejorar la administración del tiempo dedicado a una
          actividad.​
        </p>
      </section>

      <section className="margen-abajo">
        <h2>¿Cómo funciona?</h2>
        <div className="row reverse">
          <p className="col-lg-6">
            Se usa un temporizador para dividir el tiempo en intervalos fijos de
            25 minutos seguidos de 5 minutos de descanso, con pausas más largas
            cada cuatro ciclos.
          </p>
          <img src={comoFuncImg} alt="" className="col-lg-6 img-fluid" />
        </div>
      </section>

      <section className="row margen-abajo">
        <h2>¿Cuáles son sus beneficios?</h2>
        <img src={cualesBenefImg} alt="" className="col-lg-6 img-fluid" />
        <p className="col-lg-6">
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
