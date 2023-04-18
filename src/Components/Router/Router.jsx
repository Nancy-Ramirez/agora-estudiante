import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InicioGeneral } from "../Inicio/inicioGeneral";

import { Dashboard } from "../Dashboard/Dashboard";
import { Reseñas } from "../Reseñas/Reseñas";
import { Profile } from "../Perfil/Profile";
import { Unidades } from "../RutaCuestionario/Unidades";
import { Temas } from "../RutaCuestionario/Cuestionarios/Temas";
import { Cuestionario } from "../RutaCuestionario/Cuestionarios/Cuestionario";
import { Descripcioncuest } from "../RutaCuestionario/Cuestionarios/DescripcionCuest";
import { Login } from "../Login/Login";
import { Nosotros } from "../Inicio/Nosotros";
import { Materias } from "../RutaCuestionario/Cuestionarios/Materias/Materia";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General */}
        <Route index element={<InicioGeneral />} />
        <Route path="/sobre-nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />

        {/*Estudiante */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Reseña" element={<Reseñas />} />
        <Route path="/Perfil" element={<Profile />} />
        <Route path="/Materia" element={<Materias />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/temas" element={<Temas />} />
        <Route path="/cuestionario" element={<Descripcioncuest />} />
        <Route path="/preguntas" element={<Cuestionario />} />
      </Routes>
    </BrowserRouter>
  );
}
