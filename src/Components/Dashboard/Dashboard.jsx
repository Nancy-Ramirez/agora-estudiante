import { NavbarEstudiante } from "../NavbarEstudiante";
import { Footer } from "../Footer";
import biologia from "../Dashboard/Materias/biolo.png";
import quimica from "../Dashboard/Materias/quimica.png";
import ciencia from "../Dashboard/Materias/ciencia.png";
import fisica from "../Dashboard/Materias/fisica.png";
import "../Dashboard/Cards.css";
import imgInsignia from "../../images/insignias/Platino I.png";

export const Dashboard = () => {
  return (
    <div>
      <NavbarEstudiante></NavbarEstudiante>

      <header aria-label="Page Header" class="mt-20">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg--100">
          <div class="mt-8">
            <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              Bienvenido nuevamente, Estudiante!
            </h2>

            <p class="mt-1.5 text-sm text-gray-500">
              ¿Listo para una nueva sesión de estudio? ponte comodo y busca el
              contenido que conecte contigo.
            </p>

            <div class="flex flex-col">
              <h2 class="mb-4 text-2xl font-bold"></h2>

              <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">Más de # usuarios activos</h2>
                    <p class="mt-2 text-sm text-gray-500">Los ultimos días</p>
                  </div>
                </div>

                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">
                      Cada vez más centros escolares
                    </h2>
                    <p class="mt-2 text-sm text-gray-500">
                      Han ingresado a nuestra app
                    </p>
                  </div>
                </div>

                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">Más de # quizes</h2>
                    <p class="mt-2 text-sm text-gray-500">
                      Actualizados para el refuerzo.
                    </p>
                  </div>
                </div>

                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">99 reseñas positivas</h2>
                    <p class="mt-2 text-sm text-gray-500">
                      Gracias por hacer uso de nuestra app
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="px-4 pt-6 ">
        <div class="">
          {/*-- Main widget --*/}
          <div className="flex flex-wrap m-4 -mt-10 pt-5 ">
            {/* Card 1 */}
            <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
              <div className="border border-gray-200 p-6 rounded-lg bg-teal-800 bg-opacity-90">
                <div className="text-center text-white">
                  <h1 className="text-xl">Biología</h1>
                  <h3 class="mb-2 text-sm ">
                    Porcentaje de aprobación por unidad
                  </h3>
                </div>
                {/*Dato 1 */}
                <div class=" flex justify-between items-center mb-2">
                  <h1 class="w-16 text-sm  dark:text-white">Unidad 1</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500"
                      style={{ width: `75%` }}
                    ></div>
                  </div>
                  <div>
                    <span className="px-2 text-white text-sm">75%</span>
                  </div>
                </div>
                {/*Dato 2 */}
                <div class=" flex justify-between items-center mb-2">
                  <h1 class="w-16 text-sm  dark:text-white">Unidad 2</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500"
                      style={{ width: `95%` }}
                    ></div>
                  </div>
                  <div>
                    <span className="px-2 text-white text-sm">95%</span>
                  </div>
                </div>
                {/*Dato 3 */}
                <div class=" flex justify-between items-center mb-2">
                  <h1 class="w-16 text-sm text-white">Unidad 3</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500"
                      style={{ width: `70%` }}
                    ></div>
                  </div>
                  <div>
                    <span className="px-2 text-white text-sm">70%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
              <div className="border border-gray-200 p-6 rounded-lg bg-teal-800 bg-opacity-90">
                <div className="text-center text-white">
                  <h1 className="text-xl">Química</h1>
                  <h3 class="mb-2 text-sm ">
                    Porcentaje de aprobación por unidad
                  </h3>
                </div>
                {/*Dato 1 */}
                <div class=" flex justify-between items-center mb-2">
                  <h1 class="w-16 text-sm  text-white">Unidad 1</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500"
                      style={{ width: `90%` }}
                    ></div>
                  </div>
                  <div>
                    <span className="px-2 text-white text-sm">90%</span>
                  </div>
                </div>
                {/*Dato 2 */}
                <div class=" flex justify-between items-center mb-2">
                  <h1 class="w-16 text-sm  text-white">Unidad 2</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500"
                      style={{ width: `95%` }}
                    ></div>
                  </div>
                  <div>
                    <span className="px-2 text-white text-sm">95%</span>
                  </div>
                </div>
                {/*Dato 3 */}
                <div class=" flex justify-between items-center mb-2">
                  <h1 class="w-16 text-sm  dark:text-white">Unidad 3</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500"
                      style={{ width: `80%` }}
                    ></div>
                  </div>
                  <div>
                    <span className="px-2 text-white text-sm">80%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
              <div className="border border-gray-200 p-6 rounded-lg bg-teal-800 bg-opacity-90">
                <div className="text-center text-white">
                  <h1 className="text-xl">Física</h1>
                  <h3 class="mb-2 text-sm ">
                    Porcentaje de aprobación por unidad
                  </h3>
                </div>
                {/*Dato 1 */}
                <div class=" flex justify-between items-center mb-2">
                  <h1 class="w-16 text-sm text-white">Unidad 1</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500"
                      style={{ width: `80%` }}
                    ></div>
                  </div>
                  <div>
                    <span className="px-2 text-white text-sm">80%</span>
                  </div>
                </div>
                {/*Dato 2 */}
                <div class=" flex justify-between items-center mb-2">
                  <h1 class="w-16 text-sm text-white">Unidad 2</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500"
                      style={{ width: `75%` }}
                    ></div>
                  </div>
                  <div>
                    <span className="px-2 text-white text-sm">75%</span>
                  </div>
                </div>
                {/*Dato 3 */}
                <div class=" flex justify-between items-center mb-2">
                  <h1 class="w-16 text-sm text-white">Unidad 3</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500"
                      style={{ width: `60%` }}
                    ></div>
                  </div>
                  <div>
                    <span className="px-2 text-white text-sm">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <section class="container mx-auto p-10 py-5 px-0 md:p-10 md:px-0">
            <section class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
              <article class="p-10 min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer bg-opacity-40">
                <div className="text-center">
                  <h1 class="mt-5 text-2xl md:text-3xl font-light leading-snug min-h-33 text-center">
                    ¡FELICIDADES!
                  </h1>
                  <p className="text-sm pt-2">Estás en Platino I</p>
                </div>
                <div className="pt-5">
                  <img src={imgInsignia} alt="" />
                </div>
              </article>

              <article class="p-10 min-h-116 max-w-3xl w-full bg-purple-600 rounded-xl text-gray-100 xl:col-span-2 transform duration-500 hover:-translate-y-1 cursor-pointer">
                <h1 class="mt-5 text-5xl font-light text-gray-100 leading-snug  min-h-33">
                  One small step for man one giant leap for mankind
                </h1>
                <div class="mt-20">
                  <span class="text-xl">Moonlanding - </span>
                  <span class="font-bold text-xl">Neil Armstrong</span>
                </div>
                <div class="mt-16 flex justify-between ">
                  <span class="p-3 pl-0 font-bold">Quotes</span>
                  <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">
                    Paid Membership
                  </span>
                </div>
              </article>
            </section>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
