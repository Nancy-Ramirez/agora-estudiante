import { NavbarGeneral } from "../NavbarGeneral";
import imgInicio from "../../images/inicio.svg"

export const InicioGeneral = () => {
  return (
    <div>
      <NavbarGeneral></NavbarGeneral>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={imgInicio}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-3xl">
                <span className="text-green-500">M</span>{" "}
                <span className="text-green-400">I</span>{" "}
                <span className="text-green-300">D</span>{" "}
                <span className="text-green-200">E</span> tus conocimientos
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
