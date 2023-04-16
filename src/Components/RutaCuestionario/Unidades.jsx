import { Link } from "react-router-dom";
import "./materia.css";
import { NavbarEstudiante } from "../NavbarEstudiante";
import desbloqueado from "../../images/desbloqueado.png";
import bloqueado from "../../images/bloqueado.png";
import Swal from "sweetalert2";

export const Unidades = () => {
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
      title: "Unidad no desbloqueada",
    });
  };
  return (
    <div className="unidades">
      <NavbarEstudiante />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <div className="pt-8 font-thin">
              <h1>Biología</h1>
            </div>
          </div>
          <div className="unidadB flex flex-wrap m-4 -mt-10 ">
            {/* Unidad disponible 1*/}
            <div className="unidadCenter xl:w-1/3 md:w-1/2 w-full p-4">
              <Link to="/dashboard">
                <img
                  src={desbloqueado}
                  width={250}
                  className="justify-self-center"
                ></img>
                <h2>
                  Unidad <span>1</span>
                </h2>
                <h3>Aprendamos a ser científicos y científicas</h3>
              </Link>
            </div>

            {/* Unidad no disponible 2*/}
            <div className="unidadCenter xl:w-1/3 md:w-1/2 w-full p-4" onClick={funcionBloqued}>
              <Link>
                <img
                  src={bloqueado}
                  width={250}
                  className="justify-self-center"
                ></img>
                <h2>
                  Unidad <span>1</span>
                </h2>
                <h3>Aprendamos a ser científicos y científicas</h3>
              </Link>
            </div>

            {/* Unidad no disponible 3*/}
            <div className="unidadCenter xl:w-1/3 md:w-1/2 w-full p-4" onClick={funcionBloqued}>
              <Link>
                <img
                  src={bloqueado}
                  width={250}
                  className="justify-self-center"
                ></img>
                <h2>
                  Unidad <span>1</span>
                </h2>
                <h3>Aprendamos a ser científicos y científicas</h3>
              </Link>
            </div>

            {/* Unidad no disponible 4*/}
            <div className="unidadCenter xl:w-1/3 md:w-1/2 w-full p-4" onClick={funcionBloqued}>
              <Link>
                <img
                  src={bloqueado}
                  width={250}
                  className="justify-self-center"
                ></img>
                <h2>
                  Unidad <span>1</span>
                </h2>
                <h3>Aprendamos a ser científicos y científicas</h3>
              </Link>
            </div>

            {/* Unidad no disponible 5*/}
            <div className="unidadCenter xl:w-1/3 md:w-1/2 w-full p-4" onClick={funcionBloqued}>
              <Link>
                <img
                  src={bloqueado}
                  width={250}
                  className="justify-self-center"
                ></img>
                <h2>
                  Unidad <span>1</span>
                </h2>
                <h3>Aprendamos a ser científicos y científicas</h3>
              </Link>
            </div>

            {/* Unidad no disponible 6*/}
            <div className="unidadCenter xl:w-1/3 md:w-1/2 w-full p-4" onClick={funcionBloqued}>
              <Link>
                <img
                  src={bloqueado}
                  width={250}
                  className="justify-self-center"
                ></img>
                <h2>
                  Unidad <span>1</span>
                </h2>
                <h3>Aprendamos a ser científicos y científicas</h3>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
