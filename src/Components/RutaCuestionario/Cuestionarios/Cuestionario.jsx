import preguntas from "../../jsDePruebas/preguntas";
import { useState, useEffect } from "react";
import "../Cuestionarios/cuest.css";
import { NavbarEstudiante } from "../../NavbarEstudiante";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Footer } from "../../Footer";

export const Cuestionario = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [puntosT, setPuntosT] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [correct, setCorrect] = useState("Correcta");

  function handleAnswerSubmit(puntuacion, isCorrect, e) {
    //añadir puntuación
    if (isCorrect) setPuntaje(puntaje + puntuacion);
    setPuntosT(puntosT + puntuacion);
    console.log(puntosT);
    //Añadir estilos respuesta correcta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    //Cambiar la pregunta

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    }, 500);
  }

  if (isFinished)
    return (
      <main>
        <NavbarEstudiante />
        <section className="relative overflow-x-auto bg-opacity-50 sm:rounded-lg p-12 pt-32 text-center">
          <div className="">
            <div className="app">
              <div className="juego-terminado">
                <h1>
                  <span>H</span>
                  <span>A</span>
                  <span>Z</span>
                  <span className="px-2"> </span>
                  <span>T</span>
                  <span>E</span>
                  <span>R</span>
                  <span>M</span>
                  <span>I</span>
                  <span>N</span>
                  <span>A</span>
                  <span>D</span>
                  <span>O</span>
                  <span>!</span>
                </h1>
                <p className="text-3xl mt-12">
                  Obtuviste {puntaje} de {puntosT} puntos
                </p>
              </div>
              <div>
                <button
                  className="buttonPuntos mt-48 content-end"
                  onClick={() => (window.location.href = "/temas")}
                >
                  Volver a cuestionarios
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );

  return (
    <main>
      <NavbarEstudiante />
      <section className="mt-8 pb-48 relative overflow-x-auto sm:rounded-lg bg-gray-100 rounded-md">
        <div className="flex justify-start text-center  text-white w-full ">
          <Link
            to="/cuestionario/ver-cuestionario"
            className="flex justify-start"
          >
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
        </div>
        <div className=" bg-opacity-25 mt-9 mx-5 xl:mx-48 lg:mx-32 md:mx-24 xs:mx-5 ">
          <div className="py-4 text-center text-white bg-teal-700 rounded-md">
            <h1 className="">Pequeñas Células</h1>
            <p className="text-sm">Unidad 1: Ciencia y Tecnología</p>
          </div>
          <div className="app bg-gray-50 border border-gray-300 px-24 pb-8 rounded-md">
            <div className="Lado-izquierdo text-center">
              <div></div>
              <div className="pregunta-numero pt-5 font-bold ">
                <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
              </div>
              <div className="pregunta-numero flex justify-end -mt-6">
                <span>{preguntas[preguntaActual].puntuacion}pts.</span>
              </div>

              <div className="pregunta-titulo text-xl pb-2">
                {preguntas[preguntaActual].pregunta}
              </div>
            </div>
            <div className="Lado-derecho">
              {preguntas[preguntaActual].opciones.map((resp) => (
                <button
                  className="btnRespuesta"
                  key={resp.respuesta}
                  onClick={(e) =>
                    handleAnswerSubmit(
                      preguntas[preguntaActual].puntuacion,
                      resp.isCorrect,
                      e
                    )
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
