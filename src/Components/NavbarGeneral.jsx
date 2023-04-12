import { Link } from "react-router-dom";
import menu from "../images/iconos/menu.png";
import logo from "../images/Logo.png";

export const NavbarGeneral = () => {
  return (
    <div className=" text-black opacity-2 fixed w-full flex-wrap z-20 top-0">
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
                <a href="/">Inicio</a>
              </li>
              <li className="pl-8">
                <a href="#Nosotros">Nosotros</a>
              </li>
              <li className="pl-8 flex wrapped">
                <a href="#Servicios">Servicio</a>
              </li>
              <li className="pl-8 flex wrapped">
                <a href="/">Ingresar</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
