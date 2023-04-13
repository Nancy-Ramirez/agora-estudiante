import { NavbarEstudiante } from "../NavbarEstudiante";
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

            <aside>
                <div class="bg-white shadow mt-6  rounded-lg p-6">
                    <h3 class="text-gray-600 text-sm font-semibold mb-4">Materias inscritas</h3>
                    <ul class="flex items-center justify-center space-x-2">

                        <li class="flex flex-col items-center space-y-2 m-5">
                            <a class="block bg-white p-1 rounded-full" href="#">
                                <img class="w-16 rounded-full" src={ciencia} />
                            </a>
                            <span class="text-xs text-gray-500  text-center">
                                Ciencias
                            </span>
                        </li>
                        <li class="flex flex-col items-center space-y-2 m-5">
                            <a class="block bg-white p-1 rounded-full" href="#">
                                <img class="w-16 rounded-full" src={quimica} />
                            </a>
                            <span class="text-xs text-gray-500">
                                Química
                            </span>
                        </li>
                        <li class="flex flex-col items-center space-y-2 m-5">
                            <a class="block bg-white p-1 rounded-full" href="#">
                                <img class="w-16 rounded-full" src={biologia} />
                            </a>
                            <span class="text-xs text-gray-500">
                                Biología
                            </span>
                        </li>
                        <li class="flex flex-col items-center space-y-2 m-5">
                            <a class="block bg-white p-1 rounded-full" href="#">
                                <img class="w-16 rounded-full" src={fisica} />
                            </a>
                            <span class="text-xs text-gray-500">
                                Física
                            </span>
                        </li>


                    </ul>
                </div>

            </aside>

            <aside>

            </aside>

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




        </div>
    );
};