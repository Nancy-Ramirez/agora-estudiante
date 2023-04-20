import { Link, useNavigate } from "react-router-dom";
import menu from "../images/iconos/menu.png";
import logo from "../images/Logo.png";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

export const NavbarEstudiante = () => {
  const cookies = new Cookies();
  const Navigate = useNavigate();

  const validateSSession = cookies.get("tokenSessionApp");

  console.log(validateSSession);

  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      showCancelButton: true,
      confirmButtonText: "Salir",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        cookies.remove("tokenSessionApp");
        Swal.fire(
          "¡Esperamos verte pronto!",
          "",
          setTimeout(() => {
            window.location.href = "http://localhost:3001/";
          }, 2000)
        );
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="opacity-2 border-gray-200 mx-auto fixed w-full flex-wrap z-20 top-0">
      <div className="wrapper estudianteMenu justify-between">
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
              {validateSSession.type === 3 && (
                <li>
                  <Link to="/dashboard">Inicio</Link>
                </li>
              )}
              {validateSSession.type === 3 && (
              <li>
                <div class="dropdown">
                  <button class="dropbtn">
                    Cuestionarios
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <Link to="/unidades/">Séptimo</Link>
                    <Link to="/unidades">Óctavo</Link>
                    <Link to="/unidades">Noveno</Link>
                    <Link to="/Materia">Primer año</Link>
                    <Link to="/Materia">Segundo año</Link>
                  </div>
                </div>
              </li>)}
              {validateSSession.type === 3 && (
              <li>
                <Link to="/Perfil">Perfil</Link>
              </li>)}
              {validateSSession.type === 3 && (
              <li>
                <Link to="/Reseña">Reseñas</Link>
              </li>)}

              <li>
                <Link onClick={() => cerrarSesion()}>Salir</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
