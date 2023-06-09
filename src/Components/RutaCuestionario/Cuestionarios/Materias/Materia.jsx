import { Link } from "react-router-dom";
import "../Materias/materia.css"
import biologia from "../../../../images/Biologia.png"
import quimica from "../../../../images/Quimica.png"
import fisica from "../../../../images/Fisica.png"
import { NavbarEstudiante } from "../../../NavbarEstudiante";

export const Materias = () => {
  return (
    <div className="materias">
      <NavbarEstudiante />
      <div className="pt-24 ">
        <h1>Materias</h1>
      </div>
      <div className="boxesContainer flex flex-wrap justify-center space-x-11 -my-10 ">
        {/*Biología */}
        <div className="cardBox">
          <div className="card">
            <div className="front">
              <Link to="/unidades">
                <img src={biologia} alt="" width={250}></img>
                <button className="pt-3">Biología</button>
              </Link>
            </div>
            <div className="back">
              <Link to="/unidades">
                <img src={biologia} alt="" width={250}></img>
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
                <img src={quimica} alt="" width={250}></img>
                <button className="pt-3">Química</button>
              </Link>
            </div>
            <div className="back">
              <Link to="/unidades">
                <img src={quimica} alt="" width={250}></img>
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
                <img src={fisica} alt="" width={250}></img>
                <button className="pt-3">Física</button>
              </Link>
            </div>
            <div className="back">
              <Link to="/unidades">
                <img src={fisica} alt="" width={250}></img>
                <button className="pt-3">Física</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
