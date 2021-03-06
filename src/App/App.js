import { React } from "react";
import { Link } from "react-router-dom";
// Componentes
import Logo from "../Logo/Logo";
import Pomodoro from "./Pomodoro/Pomodoro";
import ToDo from "./ToDo/ToDo";
// Imágenes
import ajustesImg from "../images/gear.jpg";

function App() {
  function abrirAjustes() {
    document.getElementById("ajustes").classList.remove("cerrar");
    document.getElementById("ajustes").classList.add("abrir");
  }

  return (
    <>
      <nav className="navbar navbar-expand margen-abajo">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <Logo />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" id="li-ajustes" onClick={abrirAjustes}>
                <img src={ajustesImg} alt="" className="nav-link" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Pomodoro />
      <ToDo />
    </>
  );
}

export default App;
