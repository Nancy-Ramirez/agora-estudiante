import imagenLogin from "../../images/Gif/login.gif"
import { NavbarGeneral } from "../NavbarGeneral";

export const Login = () => {
    
    return (
        <main>
            <NavbarGeneral/>
        {/*Login */}
        <section id="Nosotros" class="text-gray-600 body-font">
          <div class="container px-5 pt-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img alt="feature" class="" src={imagenLogin} />
            </div>
            <div class="flex flex-col flex-wrap pt-24 -mb-10 lg:w-1/2 lg:text-left text-center">
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="flex-grow">
                  {/*Formulario ingresar */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}