import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materia";
import { InicioGeneral } from "../Inicio/inicioGeneral";

import { Nosotros } from "../Inicio/nosotros";

import { Dashboard } from "../Dashboard/Dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General */}
        <Route path="/" element={<InicioGeneral />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/Materia" element={<Materias />} />

        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
