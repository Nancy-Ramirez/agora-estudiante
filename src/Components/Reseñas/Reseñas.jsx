import { NavbarEstudiante } from "../NavbarEstudiante";
import "../Reseñas/Reseñas.css"
import bg from "../Reseñas/background.png";
import { Footer } from "../Footer";

export const Reseñas = () => {

  return (

    <div style={{ backgroundColor: `white` }}>
      <NavbarEstudiante></NavbarEstudiante>


      


      <section className="my-8 dark:text-gray-100 mt-20">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <a href="#" class="font-display max-w-sm text-4xl font-bold leading-tight text-center">
              <span class="link link-underline link-underline-black text-black"> Lo que nuestros estudiantes dicen </span>
            </a>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-cyan-950">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-teal-400">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>La aplicación actualmente es de bastente ayuda, con los quizes interactivos y sus recursos motivan a seguir estudiando.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-teal-400">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-teal-400 dark:text-gray-900">
              <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
              <p className="text-xl font-semibold leading-tight">Johnny Suh</p>
              <p className="text-sm uppercase">chicago@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-cyan-900">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-teal-400">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-teal-400">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-teal-400 dark:text-gray-900">
              <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
              <p className="text-xl font-semibold leading-tight">Calvin Perez</p>
              <p className="text-sm uppercase">nct@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-cyan-900">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-teal-400">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-teal-400">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-teal-400 dark:text-gray-900">
              <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
              <p className="text-xl font-semibold leading-tight">Omar Apollo</p>
              <p className="text-sm uppercase">evergreen@gmail.com</p>
            </div>
          </div>
        </div>
      </section>



      <div class="py-16 mt-20">


        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">

          <div class="py-3 sm:max-w-xl sm:mx-auto text-center">

            <a href="#" class="font-display max-w-sm text-3xl font-bold leading-tight">
              <span class="link link-underline link-underline-black text-black"> Deja tu reseña aquí </span>
            </a>
            <br />
          </div>
          <br />
          <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-xl">Califica nuestros servicios, para poder mejorar tu experiencia como usuario.</h2>
          <div class="flex  items-center justify-start">
            <div class="mx-auto w-full max-w-lg">
              <p class="mt-3">Colaboranos con tu mensaje aquí</p>

              <form action="https://api.web3forms.com/submit" class="mt-10">


                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <div class="grid gap-6 sm:grid-cols-2">
                  <div class="relative z-0">
                    <input type="text" name="username" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-cyan-600 focus:outline-none focus:ring-0" placeholder=" " required />
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-800 peer-focus:dark:text-teal-500">Usuario</label>
                  </div>
                  <div class="relative z-0">
                    <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-cyan-600 focus:outline-none focus:ring-0" placeholder=" " required />
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-800 peer-focus:dark:text-teal-500">Correo Electronico</label>
                  </div>
                  <div class="relative z-0 col-span-2">
                    <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-cyan-600 focus:outline-none focus:ring-0" placeholder=" 
                    " required></textarea>
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-800 peer-focus:dark:text-teal-500">Tu mensaje</label>
                  </div>
                </div>
                <button type="submit" class="mt-5 rounded-md bg-cyan-400 px-10 py-2 text-white">Enviar</button>
              </form>
            </div>
          </div>


        </div>
      </div>
      <Footer></Footer>
    </div>
  );

};