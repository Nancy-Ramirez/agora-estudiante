import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materia";
import Lobby from "../Lobby/Lobby";
import Nie from "../Registros/RegistroNie";
import PerfilEstudiante from "../Perfil/Perfil";


export default function Router() {
    return (
      
      <BrowserRouter>
        <Routes>
        
          <Route path="/Materia" element={<Materias />} />
          <Route path="/Home" element={<Lobby />} />
          <Route path="/Nie" element={<Nie />} />
          <Route path="/" element={<PerfilEstudiante />} />
          
          
        </Routes>
      </BrowserRouter>
    );
  }
  