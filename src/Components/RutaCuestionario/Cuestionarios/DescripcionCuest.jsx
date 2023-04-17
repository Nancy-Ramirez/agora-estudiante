import { Icon } from "@iconify/react";
import { NavbarEstudiante } from "../../NavbarEstudiante";
import { Link } from "react-router-dom";
import "../Cuestionarios/descrip.css"

export const Descripcioncuest = () => {
  return (
    <main>
      <NavbarEstudiante />
      <section className="relative overflow-x-auto px-12 sm:px-0 md:px-4 lg:px-8 pt-24 flex justify-center">
        <div className="flex justify-between pt-12 text-center  text-black w-full">
          <Link to="/temas" className="flex justify-start">
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
          <div className="flex flex-col">
            <h1 className="flex justify-center text-3xl">Pequeñas células </h1>
            <p className="flex justify-center text-sm pt-5">
              Unidad 1: Ciencia y Tecnología
            </p>
            <div className="px-20 text-black">
              <div className="flex justify-start p-4">
                <p className="leading-normal pt-8 text-sm sm:text-md md:text-xl lg:text-xl">
                  Si la ciencia es una actividad que produce resultados que son
                  aprovechados por las sociedades, de igual forma la tecnología
                  permite la creación de aparatos que contribuyen a satisfacer
                  necesidades vitales.{" "}
                </p>
              </div>
              {/*!--Ver preguntas-->*/}
              <div class="buttons">
                <Link to="/preguntas">
                <button class="btn">
                  <span></span>
                  <p
                    data-start="Buena suerte"
                    data-text="¡Empecemos!"
                    data-title="Nuevo intento"
                  ></p>
                </button>
                </Link>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
