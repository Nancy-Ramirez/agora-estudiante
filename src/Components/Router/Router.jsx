import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materia";
import { InicioGeneral } from "../Inicio/inicioGeneral";

import { Dashboard } from "../Dashboard/Dashboard";
import { Reseñas } from "../Reseñas/Reseñas";
import { Perfil } from "../Perfil/Perfil";
import { Unidades } from "../RutaCuestionario/Unidades";
import { Temas } from "../RutaCuestionario/Cuestionarios/Temas";
import { Cuestionario } from "../RutaCuestionario/Cuestionarios/Cuestionario";
import { Descripcioncuest } from "../RutaCuestionario/Cuestionarios/DescripcionCuest";

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
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/temas" element={<Temas/>} />
        <Route path="/cuestionario" element={<Descripcioncuest/>} />
        <Route path="/preguntas" element={<Cuestionario/>}/>

      </Routes>
    </BrowserRouter>
  );
}
