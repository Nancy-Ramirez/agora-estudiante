import { NavbarGeneral } from "../NavbarGeneral";
import "../Inicio/inicio.css";
import imginicio from "../../images/Gif/Inicio1.gif";

export const InicioGeneral = () => {
  return (
    <div className="container w-full flex-wrap">
      <NavbarGeneral></NavbarGeneral>

      {/*Inicio */}
      <section className="Inicio">
        <div className="mx-auto flex md:flex-row flex-col">
          <div class="containerTitle">
            <h2 class="title pl-8 font-bold">
              <p class="title-word title-word-1">Mide </p>
              <span class="title-word title-word-2">tus </span>
              <span class="title-word title-word-3">Conocimientos </span>
              <span class="title-word title-word-4"> </span>
            </h2>
            <p className="p2 pt-8 pl-8 text-lg tracking-wider font-bold">
              Agora es una aplicación web diseñada para apoyarte en tu recorrido
              en el aprendizaje de las ciencias naturales y sus ramificaciones.
            </p>
            <div className="px-12 pt-12">
              <button className="button1">
                <span> Registrate </span>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full pt-24 md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={imginicio}
            />
          </div>
        </div>
      </section>

      
    </div>
  );
};
