import { Link } from "react-router-dom";
import menu from "../images/iconos/menu.png";
import logo from "../images/Logo.png";

export const NavbarEstudiante = () => {
  return (
    <div className="opacity-2 border-gray-200 mx-auto fixed w-full flex-wrap z-20 top-0">
      <div className="wrapper justify-between">
        <nav>
          <a href="/inicio" className="logo">
            <img src={logo} width="60px" alt="" />
          </a>
          <input type="checkbox" className="" id="toogle" />
          <label htmlFor="toogle">
            <img src={menu} width="25px" alt="" />
          </label>
          <div className="menu justify-between">
            <ul>
              <li>
                <Link to="/dashboard">Inicio</Link>
              </li>
              <li>
                <div class="dropdown">
                  <button class="dropbtn">
                    Cuestionarios
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <Link to="/dashboard">Séptimo</Link>
                    <Link to="/dashboard">Óctavo</Link>
                    <Link to="/dashboard">Noveno</Link>
                    <Link to="/Materia">Primer año</Link>
                    <Link to="/Materia">Segundo año</Link>
                    
                  </div>
                </div>
              </li>
              <li>
                <Link to="/dashboard">Perfil</Link>
              </li>
              <li>
                <Link to="/dashboard">Reseñas</Link>
              </li>
              <li>
                <Link to="/dashboard">Salir</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
