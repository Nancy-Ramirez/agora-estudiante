import { NavbarEstudiante } from "../NavbarEstudiante";
import { Footer } from "../Footer";
import biologia from "../Dashboard/Materias/biolo.png";
import quimica from "../Dashboard/Materias/quimica.png";
import ciencia from "../Dashboard/Materias/ciencia.png";
import fisica from "../Dashboard/Materias/fisica.png";

export const Profile = () => {
    return (
        <div>
            <NavbarEstudiante/>

             <div class="p-16 mt-20 bg-cyan-50">
                <div class="p-8 bg-white shadow mt-24">  
                <div class="grid grid-cols-1 md:grid-cols-3">  
               <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">      
                </div>    
                <div class="relative">      
                <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">  
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>      
                </div>    
                </div>    
                <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <div class="flex items-center justify-between mb-4">
                            <div class="flex-shrink-0">
                                <h3 class="text-base font-light text-gray-600">materias inscritas</h3>
                            </div>
                            <br/>
                            
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex space-x-5">
                                    <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-teal-500 ring-cyan-400 ring-offset-gray-800" src={quimica} />
                                    <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-teal-500 ring-cyan-400 ring-offset-gray-800" src={ciencia} />
                                    <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-teal-500 ring-cyan-400 ring-offset-gray-800" src={fisica} />
                                    <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-teal-500 ring-gray-700 ring-offset-gray-800" src={biologia} />
                                </div>
                            </div>
                        </div>   
                </div>  
                </div>  
                <div class="mt-20 text-center border-b pb-12">    
                <h2 class="text-4xl font-medium text-gray-700">Juan Perez <span class="font-light text-gray-500"></span></h2>    
                <p class="font-light text-gray-600 mt-3">Nie #####</p>      
                <p class="mt-2 text-gray-500">Centro Escolar Dr. José Cantú</p>  
                </div>  
                <div class="mt-12 flex flex-col justify-center">    
                <div class="flex flex-col justify-center items-center h-[100vh]">
            <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:bg-navy-800 dark:text-white dark:shadow-none p-3">
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-white">
                    General Information
                    </h4>
                    <p class="mt-2 px-2 text-base text-gray-600">
                    As we live, our hearts turn colder. Cause pain is what we go through
                    as we become older. We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to
                    give others a hand. We get our heart broken by people we love, even
                    that we give them all...
                    </p>
                </div> 
                <div class="grid grid-cols-2 gap-4 px-2 w-full">
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Education</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        Stanford University
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Languages</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        English, Spanish, Italian
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Department</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        Product Design
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Work History</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        English, Spanish, Italian
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Organization</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        Simmmple Web LLC
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Birthday</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        20 July 1986
                    </p>
                    </div>
                </div>
            </div>  
            <p class="font-normal text-navy-700 mt-20 mx-auto w-max">Profile Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" class="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>  
        </div>   
                
                </div>
                </div>
                </div>
           
           
        </div>
    );
};