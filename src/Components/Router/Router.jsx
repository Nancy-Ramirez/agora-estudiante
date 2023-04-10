import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materia";


export default function Router() {
    return (
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Materias />} />
          
        </Routes>
      </BrowserRouter>
    );
  }
  