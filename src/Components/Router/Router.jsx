import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materia";
import { InicioGeneral } from "../Inicio/inicioGeneral";

import { Dashboard } from "../Dashboard/Dashboard";
import { Reseñas } from "../Reseñas/Reseñas";
import { Perfil } from "../Perfil/Perfil";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General */}
        <Route path="/" element={<InicioGeneral />} />
        

        {/*Estudiante */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Reseña" element={<Reseñas />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Materia" element={<Materias />} />
      </Routes>
    </BrowserRouter>
  );
}
