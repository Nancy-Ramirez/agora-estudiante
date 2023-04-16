import { Link } from "react-router-dom";
import "./materia.css"
import biologia from "../../images/Biologia.png"
import quimica from "../../images/Quimica.png"
import fisica from "../../images/Fisica.png"
import { NavbarEstudiante } from "../NavbarEstudiante";

export const Materias = () => {
  return (
    <div className="materias">
      <NavbarEstudiante/>
      <div className="pt-24 font-thin">
        <h1>Materias</h1>
      </div>
    <div className="boxesContainer flex flex-wrap justify-center -my-10 ">
      {/*Biología */}
      <div className="cardBox">
        <div className="card">
          <div className="front">
          <Link to="/unidades">
            <img src={biologia}></img>
              <button className="pt-3">Biología</button>
            </Link>
          </div>
          <div className="back">
          <Link to="/unidades">
          <img src={biologia}></img>
              <button className="pt-3">Biología</button>
            </Link>
          </div>
        </div>
        
      </div>
      {/*Química */}
      <div className="cardBox">
        <div className="card">
          <div className="front">
          <Link to="/unidades">
            <img src={quimica}></img>
              <button className="pt-3">Química</button>
            </Link>
          </div>
          <div className="back">
          <Link to="/unidades">
            <img src={quimica}></img>
              <button className="pt-3">Química</button>
            </Link>
          </div>
        </div>
        
      </div>
      {/*Física */}
      <div className="cardBox">
        <div className="card">
          <div className="front">
          <Link to="/unidades">
            <img src={fisica}></img>
              <button className="pt-3">Física</button>
            </Link>
          </div>
          <div className="back">
          <Link to="/">
            <img src={fisica}></img>
              <button className="pt-3">Física</button>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};
