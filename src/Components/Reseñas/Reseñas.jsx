import { NavbarEstudiante } from "../NavbarEstudiante";
import "../Reseñas/Reseñas.css"
import bg from "../Reseñas/background.png"

export const Reseñas = () => {
  return (

    <div style={{backgroundImage:`url(${bg})`}}>
      <NavbarEstudiante></NavbarEstudiante>


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
    </div>
  );
};