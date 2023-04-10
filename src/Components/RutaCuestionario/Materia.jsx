import { Link } from "react-router-dom";
import "./materia.css"

export const Materias = () => {
  return (
    <div className="boxesContainer">
      <div className="cardBox">
        <div className="card">
          <div className="front">
            <h3> Carta uno</h3>
            <p>Hover the flip</p>
          </div>
          <div className="back">
            <h3>Back side one</h3>
            <p> Content in card one</p>
            <Link to="/">
              <button>Click aqui</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
