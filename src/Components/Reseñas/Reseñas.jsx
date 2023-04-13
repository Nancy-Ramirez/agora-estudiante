import { NavbarEstudiante } from "../NavbarEstudiante";
import "../Reseñas/Reseñas.css"
import reseña from "../Reseñas/reseña.png"

export const Reseñas = () => {
  return (

    <div>
      <NavbarEstudiante></NavbarEstudiante>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={reseña}/>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          </div>
        </div>
      </section>




      <div class="py-16 bg-cyan-100 mt-20">


        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">

          <div class="py-3 sm:max-w-xl sm:mx-auto text-center">

            <a href="#" class="font-display max-w-sm text-3xl font-bold leading-tight">
              <span class="link link-underline link-underline-black text-black"> Reseñas </span>
            </a>
            <br />
          </div>
          <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-xl">Califica nuestros servicios, para poder mejorar nuestros servicios</h2>
          <div class="flex flex-col w-full lg:w-2/3 aling-center">
            <div class="container w-full px-4">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-6/12 px-4">
                  <div
                    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div class="flex-auto p-5 lg:p-10">
                      <h4 class="text-2xl mb-4 text-black font-semibold">¿Tienes algo que aportar?</h4>
                      <p class="text-lg mb-4 text-black font-semibold">Tus comentarios y dudas nos ayudan a crecer y a mejorar como app</p>
                      <form id="feedbackForm" action="" method="">
                        <div class="relative w-full mb-3">
                          <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="email">Usuario</label><input type="email" name="email" id="email" class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                              style={{ transition: "all 0.15s ease 0s" }} required />
                        </div>
                        <div class="relative w-full mb-3">
                          <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="message">Reseña</label><textarea maxlength="300" name="feedback" id="feedback" rows="4"
                              cols="80"
                              class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                              placeholder="" required></textarea>
                        </div>
                        <div class="text-center mt-6">
                          <button id="feedbackBtn"
                            class="bg-teal-600 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit" style={{ transition: "all 0.15s ease 0s" }}>Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};