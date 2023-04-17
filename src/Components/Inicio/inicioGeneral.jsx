import { NavbarGeneral } from "../NavbarGeneral";
import "../Inicio/inicio.css";
import imginicio from "../../images/Gif/Inicio1.gif";
import imagesNosotros from "../../images/Gif/SobreNosotros1.gif";
import { Footer } from "../Footer";

export const InicioGeneral = () => {
  return (
    <div>
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
      {/*Servicios*/}

      <section id="Servicios" class="text-gray-600 body-font py-12">
        <div class="container px-5 py-7 mx-auto">
          <div class="flex flex-col text-center w-full">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Servicios
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-300 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Interactividad
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Agora ofrece una experiencia de aprendizaje interactivo que
                    permite a los estudiantes aprender de una manera divertida y
                    atractiva.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-300 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Personalización
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    La plataforma de Agora permite a los estudiantes trabajar a
                    su propio ritmo, lo que les permite aprender a su manera y
                    en su propio tiempo.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-300 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Eficiencia
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Agora ayuda a los profesores a ahorrar tiempo y a evaluar el
                    desempeño de los estudiantes de manera efectiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
