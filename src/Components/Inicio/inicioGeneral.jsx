import { NavbarGeneral } from "../NavbarGeneral";
import "../Inicio/inicio.css";
import imginicio from "../../images/Gif/Inicio1.gif";
import imagesNosotros from "../../images/Gif/SobreNosotros1.gif";

export const InicioGeneral = () => {
  return (
    <div className="container w-full flex-wrap">
      <NavbarGeneral></NavbarGeneral>

      {/*Inicio */}
      <section id="Inicio" className="Inicio">
        <div className=" flex md:flex-row flex-col">
          <div class="containerTitle">
            <h2 class="title pl-8 font-bold">
              <p class="title-word title-word-1">Mide </p>
              <span class="title-word title-word-2">tus </span>
              <span class="title-word title-word-3">Conocimientos </span>
              <span class="title-word title-word-4"> </span>
            </h2>
            <p className="p2 pt-8 pl-8 text-lg tracking-wider font-bold">
              Agora es una plataforma en línea diseñada para ofrecer una
              experiencia de aprendizaje divertida y efectiva para estudiantes
              en el área de Ciencias Naturales y sus ramificaciones.
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

      <section id="Nosotros" class="text-gray-600 body-font bg-gray-200 -mr-20">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" class="" src={imagesNosotros} />
          </div>
          <div class="flex flex-col flex-wrap pt-24 -mb-10 lg:w-1/2  lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <p class="leading-relaxed text-base pb-3">
                  Nuestro objetivo es ayudar a los estudiantes a mejorar su
                  comportamiento y conocimiento en ciencias a través de una
                  variedad de quiz interactivas con preguntas variadas.
                </p>
                <p className="leading-relaxed text-base">
                  Además de proporcionar preguntas que te ayuden a comprender
                  los temas. Agora tambien proporciona al estudiante la
                  capacidad de trabajar a su porpio ritmo y en cualquier momento
                  y lugar, lo que les permite aprender de manera más efectiva.
                </p>
                <div class="containerAbout">
                  <div class="wrapperAbout">
                    <div class="container">
                      <h1>Aprende de manera interactiva</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
