import { NavbarEstudiante } from "../../NavbarEstudiante";
import "../Cuestionarios/temas.css";
import cuestR from "../../../images/cuestionarioR.png"
import cuestNR from "../../../images/cuestionarioNR.png"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Temas = () => {

     //validar que este bloqueado
  const funcionBloqued = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "Cuestionario bloqueado",
    });
  };

  return (
    <div>
      <NavbarEstudiante></NavbarEstudiante>
      <section className="temas pt-24 text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Cuestionarios
            </h1>
          </div>
          <div className="flex flex-wrap m-4 -mt-10 ">
            {/* Tema 1 */}
            <div className="xl:w-1/4 md:w-1/3 w-full p-4 text-center">
              <div className=" p-6 rounded-lg">
                <Link to="/dashboard">
              <img src={cuestR} alt="" width={100} />
                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                  Pequeñas células
                </h2>
                <p className="text-xs">10 preguntas</p>
                </Link>
              </div>
            </div>
            {/* Tema 2 */}
            <div className="xl:w-1/4 md:w-1/3 w-full p-4 text-center">
              <div className=" p-6 rounded-lg" onClick={funcionBloqued}>
                <Link>
              <img src={cuestNR} alt="" width={100} />
                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                  Célula Eucariota
                </h2>
                <p className="text-xs">12 preguntas</p>
                </Link>
              </div>
            </div>

            {/* Tema 3 */}
            <div className="xl:w-1/4 md:w-1/3 w-full p-4 text-center">
              <div className=" p-6 rounded-lg" onClick={funcionBloqued}>
                <Link>
              <img src={cuestNR} alt="" width={100} />
                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                  Célula Procariota
                </h2>
                <p className="text-xs">8 preguntas</p>
                </Link>
              </div>
            </div>

            {/* Tema 4 */}
            <div className="xl:w-1/4 md:w-1/3 w-full p-4 text-center">
              <div className=" p-6 rounded-lg" onClick={funcionBloqued}>
                <Link>
              <img src={cuestNR} alt="" width={100} />
                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                  Cuerpos unicelulares
                </h2>
                <p className="text-xs">15 preguntas</p>
                </Link>
              </div>
            </div>

            {/* Tema 5 */}
            <div className="xl:w-1/4 md:w-1/3 w-full p-4 text-center">
              <div className=" p-6 rounded-lg" onClick={funcionBloqued}>
                <Link>
              <img src={cuestNR} alt="" width={100} />
                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                  Cuerpos pluricelulares
                </h2>
                <p className="text-xs">10 preguntas</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
