import { NavbarEstudiante } from "../NavbarEstudiante";
import { Footer } from "../Footer";
import biologia from "../Dashboard/Materias/biolo.png";
import quimica from "../Dashboard/Materias/quimica.png";
import ciencia from "../Dashboard/Materias/ciencia.png";
import fisica from "../Dashboard/Materias/fisica.png";

export const Profile = () => {
    return (
        <div>
            <NavbarEstudiante />

            {/*-- component --*/}


            <div class="p-16 mt-20 bg-cyan-50">
                <div class="grid grid-cols-6 gap-3">
                    <div class="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
                        <div class="h-48 w-full checker-bg flex items-center justify-center p-4 text-blue-500">
                            <div class="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/564x/79/fc/ef/79fcefa398abd3d4f4c2e462b8614408.jpg')` }}>
                            </div>
                        </div>        <div class="p-4 border-t border-gray-200">
                            <div class="flex items-center justify-between">
                                <h3 class="text-gray-600 font-medium">Juan Perez</h3>
                                <button class="text-gray-500 hover:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>        </button>
                            </div>
                            <p class="text-gray-400 text-sm my-1">Nie ###</p>
                        </div>
                    </div>


                    <div class="col-start-1 col-end-7...">
                    <div class="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
            <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:bg-navy-800 dark:text-white dark:shadow-none p-3">
                <div class="mt-2 mb-8 w-full">
                <p class="mt-2 px-2 text-base text-teal-600">
                    Información Estudiante
                    </p>
                    <p class="mt-2 px-2 text-base text-gray-600">
                    La educación es el arma más poderosa que puedes usar para cambiar el mundo.
                    </p>
                </div> 
                <div class="grid grid-cols-2 gap-4 px-2 w-full">

                <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Género</p>
                    <p class="text-base font-xs text-teal-700">
                        m/f
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Cumpleaños</p>
                    <p class=" font-xs text-teal-700">
                        20/07/2009
                    </p>
                    </div>
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Nivel</p>
                    <p class="text-base font-xs text-teal-700 ">
                       Primer año Bachillerato
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Centro escolar</p>
                    <p class="text-base font-xs text-teal-700 ">
                        Dr.José Menjivar
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Departamento</p>
                    <p class="text-base font-xs text-teal-700">
                        San Salvador
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Municipio</p>
                    <p class="text-base font-medium text-teal-700">
                        Mejicanos
                    </p>
                    </div>
                </div>
            </div>  
        </div>

                    </div>
                    <div class="col-start-2 col-span-4...">

                    </div>
                    <div class="col-start-2 col-span-4...">

                    </div>

                    <div class="col-span-2 ...">04</div>
                    <div class="...">05</div>
                    <div class="...">06</div>
                    <div class="col-span-2 ...">07</div>
                </div>
            </div>



            <Footer></Footer>
        </div>
    );
};