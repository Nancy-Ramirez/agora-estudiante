import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materia";
import Lobby from "../Lobby/Lobby";


export default function Router() {
    return (
      
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Materias />} />
          <Route path="/Home" element={<Lobby />} />
          
          
        </Routes>
      </BrowserRouter>
    );
  }
  