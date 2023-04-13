import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materia";
import { InicioGeneral } from "../Inicio/inicioGeneral";


import { Dashboard } from "../Dashboard/Dashboard";
import { Reseñas } from "../Reseñas/Reseñas";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General */}
        <Route path="/" element={<InicioGeneral />} />
         
        <Route path="/Materia" element={<Materias />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Reseña" element={<Reseñas />} />
      </Routes>
    </BrowserRouter>
  );
}
