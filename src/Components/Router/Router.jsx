import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materia";
import { InicioGeneral } from "../Inicio/inicioGeneral";
import { Dashboard } from "../Dashboard/Dashboard";

export default function Router() {
    return (
      
      <BrowserRouter>
        <Routes>
        
          <Route path="/Materia" element={<Materias />} />
          <Route path="/" element={<InicioGeneral/>} />     
          <Route path="/Dashboard" element={<Dashboard/>} />     
         
        </Routes>
      </BrowserRouter>
    );
  }
  