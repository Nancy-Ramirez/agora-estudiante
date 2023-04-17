import { NavbarEstudiante } from "../NavbarEstudiante";
import { Footer } from "../Footer";
import biologia from "../Dashboard/Materias/biolo.png";
import quimica from "../Dashboard/Materias/quimica.png";
import ciencia from "../Dashboard/Materias/ciencia.png";
import fisica from "../Dashboard/Materias/fisica.png";

export const Dashboard = () => {
    return (
        <div>
            <NavbarEstudiante></NavbarEstudiante>

            <header aria-label="Page Header" class="bg-cyan-50 mt-20">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg--100">

                    <div class="mt-8">
                        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Bienvenido nuevamente, Estudiante!
                        </h2>

                        <p class="mt-1.5 text-sm text-gray-500">
                            ¿Listo para una nueva sesión de estudio?
                            ponte comodo y busca el contenido que conecte contigo.
                        </p>

                        <div class="flex flex-col">
                            <h2 class="mb-4 text-2xl font-bold"></h2>

                            <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                    <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                        </svg>

                                    </div>

                                    <div class="ml-4">
                                        <h2 class="font-semibold">Más de # usuarios activos</h2>
                                        <p class="mt-2 text-sm text-gray-500">Los ultimos días</p>
                                    </div>
                                </div>

                                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                    <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>

                                    </div>

                                    <div class="ml-4">
                                        <h2 class="font-semibold">Cada vez más centros escolares</h2>
                                        <p class="mt-2 text-sm text-gray-500">Han ingresado a nuestra app</p>
                                    </div>
                                </div>

                                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                    <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>

                                    <div class="ml-4">
                                        <h2 class="font-semibold">Más de # quizes</h2>
                                        <p class="mt-2 text-sm text-gray-500">Actualizados para el refuerzo.</p>
                                    </div>
                                </div>

                                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                    <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </div>

                                    <div class="ml-4">
                                        <h2 class="font-semibold">99 reseñas positivas</h2>
                                        <p class="mt-2 text-sm text-gray-500">Gracias por hacer uso de nuestra app</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="mx-20 px-4 pt-6 ">

                <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 mx-15">
                    {/*-- Main widget --*/}
                    <div class="p-4 bg-white border border-cyan-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-cyan-700 sm:p-6 dark:bg-cyan-800">
                        <div class="w-full">
                            <h3 class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Unidades completadas</h3>
                            <div class="flex items-center mb-2">
                                <div class="w-16 text-sm font-medium dark:text-white">Unidad 1</div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500" style={{ width: `18%` }}></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-2">
                                <div class="w-16 text-sm font-medium dark:text-white">Unidad 2</div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500" style={{ width: `15%` }}></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-2">
                                <div class="w-16 text-sm font-medium dark:text-white">Unidad 3</div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-primary-600 h-2.5 rounded-full dark:bg-teal-500" style={{ width: `60%` }}></div>
                                </div>
                            </div>
                        </div>
                        <div id="traffic-channels-chart" class="w-full"></div>

                    </div>

                    <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-cyan-800">
                        <div class="flex items-center mb-4">
                            <div class="flex-shrink-0">
                                <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">Materias</span>
                                <h3 class="text-base font-light text-gray-200 dark:text-gray-200">materias inscritas</h3>
                            </div>
                        </div>
                        <div id="main-chart"></div>
                        <div className="flex flex-col items-rigth">
                            <div className="flex space-x-5">
                                <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-teal-500 ring-cyan-400 ring-offset-gray-800" src={quimica} />
                                <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-teal-500 ring-cyan-400 ring-offset-gray-800" src={ciencia} />
                                <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-teal-500 ring-cyan-400 ring-offset-gray-800" src={fisica} />
                                <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-teal-500 ring-gray-700 ring-offset-gray-800" src={biologia} />
                            </div>
                        </div>

                    </div>

                </div>

                <div>
                    <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                        <section class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                            <article class="p-10 min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer">
                                <h1 class="mt-5 text-2xl md:text-3xl font-light leading-snug min-h-33">One small step for man one giant leap for mankind
                                </h1>
                                <div class="mt-20">
                                    <span class="text-xl">Moonlanding - </span>
                                    <span class="font-bold text-xl">Neil Armstrong</span>
                                </div>
                                <div class="mt-16 flex justify-between">
                                    <span class="p-3 pl-0 font-bold">Story</span>
                                    <span class="p-3  border-2 border-gray-500 rounded-md text-base hover:bg-black hover:border-gray-200 cursor-pointer hover:text-white ">Paid
                                        Membership</span>
                                </div>
                            </article>


                            <article class="p-10 min-h-116 max-w-3xl w-full bg-purple-600 rounded-xl text-gray-100 xl:col-span-2 transform duration-500 hover:-translate-y-1 cursor-pointer">
                                <h1 class="mt-5 text-5xl font-light text-gray-100 leading-snug  min-h-33">One small step for man one giant leap for mankind
                                </h1>
                                <div class="mt-20">
                                    <span class="text-xl">Moonlanding - </span>
                                    <span class="font-bold text-xl">Neil Armstrong</span>
                                </div>
                                <div class="mt-16 flex justify-between ">
                                    <span class="p-3 pl-0 font-bold">Quotes</span>
                                    <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">Paid
                                        Membership</span>
                                </div>
                            </article>


                            <article class="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)" }}>
                                <h1 class="mt-5 text-4xl text-gray-100 leading-snug  min-h-33">One small step for man one giant leap for mankind
                                </h1>
                                <div class="mt-20">
                                    <span class="text-xl">Moonlanding - </span>
                                    <span class="font-bold text-xl">Neil Armstrong</span>
                                </div>
                                <div class="mt-16 flex justify-between ">
                                    <span class="p-3 pl-0 font-bold">Travel Guide</span>
                                    <span class="p-3 px-5 bg-gray-200  rounded-md text-base hover:bg-orange-600 cursor-pointer hover:text-white text-black ">Paid
                                        Membership</span>
                                </div>
                            </article>

                            <article class="p-10 min-h-116 max-w-xl w-full bg-cyan-600 rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer">
                                <h1 class="mt-5 text-3xl text-gray-100 leading-snug  min-h-33">One small step for man one giant leap for mankind
                                </h1>
                                <div class="mt-20">
                                    <span class="text-xl">Moonlanding - </span>
                                    <span class="font-bold text-xl">Neil Armstrong</span>
                                </div>
                                <div class="mt-16 flex justify-between ">
                                    <span class="p-3 pl-0">Story</span>
                                    <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">Paid
                                        Membership</span>
                                </div>
                            </article>

                            <article class="flex flex-col-reverse p-10 min-h-116 max-w-xl w-full bg-orange-600 rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer">
                                <h1 class="mt-10 text-3xl text-gray-100 leading-snug  min-h-33">One small step for man one giant leap for mankind
                                </h1>
                                <div class="mt-24">
                                    <span class="text-xl">Moonlanding - </span>
                                    <span class="font-bold text-xl">Neil Armstrong</span>
                                </div>
                                <div class="mt-4 flex justify-between ">
                                    <span class="p-3 pl-0">Story</span>
                                    <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">Paid
                                        Membership</span>
                                </div>
                            </article>
                        </section>
                    </section>
                </div>

                {/*-- 2 columns -*/}
                <div class="grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4">

                    <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Latest Activity</h3>
                            <a href="#" class="inline-flex items-center p-2 text-sm font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                                View all
                            </a>
                        </div>
                        <ol class="relative border-l border-gray-200 dark:border-gray-700">
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2023</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI design in Figma</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI code in Flowbite</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                <a href="https://flowbite.com/blocks/" class="inline-flex items-center text-xs font-medium hover:underline text-primary-700 sm:text-sm dark:text-primary-500">
                                    Go to Flowbite Blocks
                                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2023</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                            </li>
                        </ol>
                    </div>

                    <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                        <div id="carousel" class="relative" data-carousel="">
                            <div class="relative mx-auto overflow-hidden h-[36rem] lg:h-[24rem]">
                                <div class="hidden duration-700 ease-in-out bg-white dark:bg-gray-800" data-carousel-item>
                                    <div class="flex items-center mb-4 text-lg font-medium text-primary-600">
                                        <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"></path>
                                        </svg>
                                        Insights
                                    </div>
                                    <h3 class="mb-4 text-2xl font-medium text-gray-900 dark:text-white">You are going to grow by 44% next year</h3>
                                    <p class="mb-4 text-gray-500 dark:text-gray-400">Get started with a free and open-source admin dashboard layout built with Tailwind CSS and Flowbite featuring charts, widgets, CRUD layouts, authentication pages, and more</p>
                                    <p class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Key Takeaways:</p>
                                    <ul class="pl-4 mb-4 space-y-3 text-gray-500 list-disc dark:text-gray-400">
                                        <li>What are the new challenges in the delivery industry due to new consumer expectations.</li>
                                        <li>How the online delivery business model is diversifying to meet new demands.</li>
                                        <li>Which new technology requirements must be met to ensure true retail experiences.</li>
                                        <li>How a headless commerce architecture solves challenges in the industry.</li>
                                    </ul>
                                    <a href="#" class="inline-flex items-center p-2 font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                                        Get me there
                                        <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="hidden duration-700 ease-in-out bg-white dark:bg-gray-800" data-carousel-item>
                                    <div class="flex items-center mb-4 text-lg font-medium text-teal-500">
                                        <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"></path>
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"></path>
                                        </svg>
                                        Tips to grow
                                    </div>
                                    <p class="mb-4 text-gray-500 dark:text-gray-400">Marketing, sales & business growth for small business. Improve your marketing & promotion results - and grow your sales!</p>
                                    <p class="mb-4 text-lg font-medium text-gray-900 dark:text-white">What you'll learn:</p>
                                    <ul role="list" class="pl-2 mb-4 space-y-3 text-gray-500 list-disc dark:text-gray-400">
                                        <li class="flex space-x-2">

                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                            </svg>
                                            <span class="leading-tight">Dynamic reports and dashboards</span>
                                        </li>
                                        <li class="flex space-x-2">

                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                            </svg>
                                            <span class="leading-tight">Learn from competitors about what to do, and not to do</span>
                                        </li>
                                        <li class="flex space-x-2">

                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                            </svg>
                                            <span class="leading-tight">Take their business to the next level</span>
                                        </li>
                                        <li class="flex space-x-2">

                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                            </svg>
                                            <span class="leading-tight">Limitless business automation</span>
                                        </li>
                                        <li class="flex space-x-2">

                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                            </svg>
                                            <span class="leading-tight">Build relationships with other businesses to co-promote</span>
                                        </li>
                                        <li class="flex space-x-2">

                                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                            </svg>
                                            <span class="leading-tight">Make their customers feel loved and apprecaited</span>
                                        </li>
                                    </ul>
                                    <a href="#" class="inline-flex items-center p-2 font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                                        Let's start
                                        <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="hidden duration-700 ease-in-out bg-white dark:bg-gray-800" data-carousel-item>
                                    <div class="flex items-center mb-4 text-lg font-medium text-purple-600">
                                        <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"></path>
                                        </svg>
                                        Features
                                    </div>
                                    <h3 class="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Go next level with Flowbite</h3>
                                    <p class="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>

                                    <ul role="list" class="pl-2 my-5 mb-4 space-y-3 text-gray-500 list-disc dark:text-gray-400">
                                        <li class="flex space-x-3">

                                            <svg class="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span class="leading-tight">Dynamic reports and dashboards</span>
                                        </li>
                                        <li class="flex space-x-3">

                                            <svg class="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span class="leading-tight">Templates for everyone</span>
                                        </li>
                                        <li class="flex space-x-3">

                                            <svg class="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span class="leading-tight">Development workflow</span>
                                        </li>
                                        <li class="flex space-x-3">

                                            <svg class="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span class="leading-tight">Limitless business automation</span>
                                        </li>
                                    </ul>
                                    <button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        View more
                                        <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <button type="button" class="flex items-center justify-center h-full mr-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                    <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="hidden">Previous</span>
                                    </span>
                                </button>
                                <button type="button" class="flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                                    <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="hidden">Next</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <main className="bg-cyan-50">
                <div class="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10">
                    <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">


                        <div
                            class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                            <span class="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                                xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg></span>
                            <p class="text-xl font-medium text-slate-700 mt-3">Most Experienced Team</p>
                            <p class="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                                set of people.</p>
                        </div>

                        <div
                            class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                            <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
                                xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg></span>
                            <p class="text-xl font-medium text-slate-700 mt-3">Best
                                Test preparation</p>
                            <p class="mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p>
                        </div>

                        <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                            <span class="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                                xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg></span>
                            <p class="text-xl font-medium text-slate-700 mt-3">Admission process Guidance</p>
                            <p class="mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                                top institutions worldwide.</p>
                        </div>


                        <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                            <span class="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
                                xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg></span>
                            <p class="text-xl font-medium text-slate-700 mt-3">Best
                                Track Record</p>
                            <p class="mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p>
                        </div>

                        <div class="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                            <span class="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
                                xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg></span>
                            <p class="text-xl font-medium text-slate-700 mt-3">Free
                                Mock Exams</p>
                            <p class="mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
                                preparation.</p>
                        </div>

                        <div class="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                            <span class="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
                                xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg></span>
                            <p class="text-xl font-medium text-slate-700 mt-3">Genuine
                                Visa Advice</p>
                            <p class="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation
                            </p>
                        </div>




                    </div>

                </div>
            </main>





            <Footer></Footer>
        </div>
    );
};