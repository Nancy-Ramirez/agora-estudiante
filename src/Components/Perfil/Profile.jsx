import { NavbarEstudiante } from "../NavbarEstudiante";
import { Footer } from "../Footer";

export const Profile = () => {
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
                    </div>
                </div>
            </header>

            <div className="bg-cyan-50 mt-25">
            <div class="w-full px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500">
            <div class="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border mb-4">
                <div class="flex flex-wrap -mx-3">
                    <div class="flex-none w-auto max-w-full px-3">
                        <div class="text-size-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                            <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/bruce-mars.jpg" alt="profile_image" class="w-full shadow-soft-sm rounded-xl"/>
                        </div>
                    </div>
                    <div class="flex-none w-auto max-w-full px-3 my-auto">
                        <div class="h-full">
                            <h5 class="mb-1">Alexander Martinez</h5>
                            <p class="mb-0 font-semibold leading-normal text-size-sm">Nie #######</p>
                        </div>
                    </div>
                    <div class="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};