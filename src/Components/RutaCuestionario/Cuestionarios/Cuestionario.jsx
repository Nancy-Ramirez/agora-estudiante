import preguntas from "../../jsDePruebas/preguntas";
import { useState, useEffect } from "react";
import "../Cuestionarios/cuest.css";
import { NavbarEstudiante } from "../../NavbarEstudiante";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Cuestionario = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [puntosT, setPuntosT] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswerSubmit(puntuacion, isCorrect, e) {
    //añadir puntuación
    if (isCorrect) setPuntaje(puntaje + puntuacion);
    setPuntosT(puntosT + puntuacion);
    console.log(puntosT);
    //Añadir estilos respuesta correcta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    //Cambiar la pregunta
    
    setTimeout(()=>{
      if(preguntaActual === preguntas.length -1){
        setIsFinished(true);
    } else {
        setPreguntaActual(preguntaActual + 1);
    }
    }, 500);
    
  }


  if(isFinished) return(
    <main>
    <NavbarEstudiante />
    <section className=" relative overflow-x-auto shadow-md sm:rounded-lg p-12 pt-21">
      <div className="flex justify-start p-12 text-center  text-white w-full">
        <Link
          to="/cuestionario/ver-cuestionario"
          className="flex justify-start"
        >
          <Icon icon="lucide:arrow-big-left" width="35" height="35" />
        </Link>
      </div>
      <div className="flex justify-center bg-opacity-25">
      <div className="app">
      <div className="juego-teerminado">
        <span className="">Obtuviste {puntaje} de {puntosT} puntos</span>
        <button className="buttonPuntos" onClick={()=> window.location.href="/temas"}>Volver a cuestionarios</button>
      </div>
    </div>
      </div>
    </section>
  </main>
    
  )

  return (
    <main>
      <NavbarEstudiante />
      <section className=" relative overflow-x-auto shadow-md sm:rounded-lg p-12 pt-21">
        <div className="flex justify-start p-12 text-center  text-white w-full">
          <Link
            to="/cuestionario/ver-cuestionario"
            className="flex justify-start"
          >
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
        </div>
        <div className="flex justify-center bg-opacity-25">
          <div className="app">
            <div className="Lado-izquierdo text-center">
              <div></div>
              <div className="pregunta-numero p-2 ">
                <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
              </div>
              <div className="pregunta-numero flex justify-end -mt-6">
                <span>{preguntas[preguntaActual].puntuacion}pts.</span>
              </div>

              <div className="pregunta-titulo text-lg">
                {preguntas[preguntaActual].pregunta}
              </div>
            </div>
            <div className="Lado-derecho">
              {preguntas[preguntaActual].opciones.map((resp) => (
                <button
                  className="btnRespuesta"
                  key={resp.respuesta}
                  onClick={(e) =>
                    handleAnswerSubmit(preguntas[preguntaActual].puntuacion, resp.isCorrect, e)
                  }
                >
                  {resp.respuesta}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
