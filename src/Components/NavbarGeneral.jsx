import { Link } from "react-router-dom";
import menu from "../images/iconos/menu.png";
import logo from "../images/Logo.png";

export const NavbarGeneral = () => {
  return (
    <div className="bg-gray-100 text-black opacity-2 border-gray-200 mx-auto fixed w-full flex-wrap z-20 top-0">
      <div className="wrapper flex justify-evenly font-bold">
        <nav>
          <a href="/inicio" className="logo pr-32">
            <img src={logo} width="60px" alt="" />
          </a>
          <input type="checkbox" className="" id="toogle" />
          <label htmlFor="toogle">
            <img src={menu} width="25px" alt="" />
          </label>
          <div className="menu justify-between">
            <ul className="wrapped flex justify-center">
              <li className="pl-8">
                <Link to="/">Inicio</Link>
              </li>
              <li className="pl-8">
                <Link to="/">Nosotros</Link>
              </li>
              <li className="pl-8 flex wrapped">
                <Link to="/">Servicio</Link>
              </li>
            </ul>
          </div>
        </nav>
        <button class="inline-flex items-center  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Ingresar
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
      </div>
    </div>
  );
};
