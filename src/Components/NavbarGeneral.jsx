import { Link } from "react-router-dom";
import menu from "../images/iconos/menu.png";
import logo from "../images/Logo.png";

export const NavbarGeneral = () => {
  return (
    <div className="bg-gray-300 text-black opacity-2 border-gray-200 mx-auto fixed w-full flex-wrap z-20 top-0">
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
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/">SobreNosotros</Link>
              </li>
              <li>
                <Link to="/">Ingresar</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
