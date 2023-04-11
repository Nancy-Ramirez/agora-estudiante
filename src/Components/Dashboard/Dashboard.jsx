import { NavbarEstudiante } from "../NavbarEstudiante";

export const Dashboard = () => {
    return (
        <div>
            <NavbarEstudiante></NavbarEstudiante>

            <header aria-label="Page Header" class="bg-gray-50">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-gary-100">

                    <div class="mt-8">
                        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Bienvenido nuevamente, Estudiante!
                        </h2>

                        <p class="mt-1.5 text-sm text-gray-500">
                            Your website has seen a 52% increase in traffic in the last month. Keep
                            it up! 🚀
                        </p>
                    </div>
                </div>
            </header>

        </div>
    );
};