import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materia";
import Lobby from "../Lobby/Lobby";
import Nie from "../Registros/RegistroNie";


export default function Router() {
    return (
      
      <BrowserRouter>
        <Routes>
        
          <Route path="/Materia" element={<Materias />} />
          <Route path="/Home" element={<Lobby />} />
          <Route path="/" element={<Nie />} />
          
          
        </Routes>
      </BrowserRouter>
    );
  }
  