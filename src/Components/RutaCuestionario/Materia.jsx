import { Link } from "react-router-dom";
import "./materia.css"
import biologia from "../../images/Biologia.png"
import quimica from "../../images/Quimica.png"
import fisica from "../../images/Fisica.png"
import { NavbarEstudiante } from "../NavbarEstudiante";

export const Materias = () => {
  return (
    <div >
      <NavbarEstudiante/>
    <div className="boxesContainer flex justify-evenly pt-24">
      {/*Biología */}
      <div className="cardBox">
        <div className="card">
          <div className="front">
          <Link to="/">
            <img src={biologia}></img>
              <button className="pt-3">Biología</button>
            </Link>
          </div>
          <div className="back">
          <Link to="/">
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
          <Link to="/">
            <img src={quimica}></img>
              <button className="pt-3">Química</button>
            </Link>
          </div>
          <div className="back">
          <Link to="/">
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
          <Link to="/">
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
