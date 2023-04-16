import preguntas from "../../jsDePruebas/preguntas";
import { useState, useEffect } from "react";

export const Cuestionario = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <main className="app">
      <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <span>Pregunta {preguntaActual + 1} de </span>
          {preguntas.length}
        </div>
        <div className="titulo-pregunta">
            {preguntas[preguntaActual].pregunta}
        </div>
      </div>
      <div className="lado-derecho">
        {preguntas[preguntaActual].opciones.map((resp) =>(
            <button>{resp.respuesta}</button>
        ))}
      </div>
    </main>
  );
};
