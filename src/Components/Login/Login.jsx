import imagenLogin from "../../images/Gif/login.gif";
import { NavbarGeneral } from "../NavbarGeneral";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

export const Login = () => {
  const Navigate = useNavigate();
  const cookies = new Cookies();

  //Valores validos para el correo
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //!Estado inicial del formulario
  const datosLogin = {
    email: "",
    password: "",
  };

  //Estado inicial de la alerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosLogin);

  //Estado para manejar las alertas de validación
  const [alerta, setAlerta] = useState([initialStateInput]);

  //Función para obtener lo de los inputs
  const ManejarEventoDeInputs = (event) => {
    //La propiedad target del event nos permitirá obtener los valores
    const name = event.target.name;
    const value = event.target.value;

    //Actualizamos los valores capturados a nuestro estado de formulario
    setFormulario({ ...formulario, [name]: value });
  };

  //Funcion que se va a encargar de validar los campos
  const handleLoginSession = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto que trae consigo el evento

    //!Ordenamos los datos para enviarlos a la validación
    let verificarInputs = [
      { nombre: "email", value: formulario.email },
      { nombre: "password", value: formulario.password },
    ];

    //Enviamos los datos a la funcion de validación y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);

    //Obtenemos el total de validación
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });

    console.log("Total de validaciones", totalValidaciones.length);

    //!Validacion para enviar los datos al servidor
    if (totalValidaciones.length >= 2) {
      console.log("Enviar al servidor");

      const tokenApp = "fs654+6df45sd0fs6f54";
      const typeUser = 3;
      cookies.set(
        "tokenSessionApp",
        {
          token: tokenApp,
          type: typeUser,
        },
        { path: "/" }
      );

      //ALERT TO NAVIGATE
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Ingreso existoso",
      });

      //NAVIGATE ROUTE
      setTimeout(() => {
        Navigate("/dashboard");
      }, 2000);
    }
  };
  const ValidarInputs = (data) => {
    console.log(data);
    //Declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];

    //Recibidos los datos a validar
    const datosDelFormulario = data;

    //!Proceso de validacion
    // eslint-disable-next-line array-callback-return
    datosDelFormulario.map((valorInput) => {
      // eslint-disable-next-line default-case
      switch (valorInput.nombre) {
        case "email": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingresa tu correo electrónico",
              estado: true,
            });
          } else if (!isValidEmail.test(valorInput.value)) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingresa un correo electrónico válido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }

          break;
        }

        case "password": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingresar tu contraseña",
              estado: true,
            });
          } else if (valorInput.value.length < 8) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "La contraseña debe tener al menos 8 caracteres",
              estado: true,
            });
          } else {
            var mayus = false;
            var minus = false;
            var num = false;
            var caracter_raro = false;

            for (var i = 0; i < valorInput.value.length; i++) {
              if (
                valorInput.value.charCodeAt(i) >= 65 &&
                valorInput.value.charCodeAt(i) <= 90
              ) {
                mayus = true;
              } else if (
                valorInput.value.charCodeAt(i) >= 97 &&
                valorInput.value.charCodeAt(i) <= 122
              ) {
                minus = true;
              } else if (
                valorInput.value.charCodeAt(i) >= 48 &&
                valorInput.value.charCodeAt(i) <= 57
              ) {
                num = true;
              } else {
                caracter_raro = true;
              }
            }

            if (
              mayus === true &&
              minus === true &&
              num === true &&
              caracter_raro === true
            ) {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje: "",
                estado: false,
              });
            } else {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje:
                  "Ingresar una combinación correcta de almenos 8 caracteres",
                estado: false,
              });
            }
            break;
          }
        }
      }
    });
    //Retornamos el total de validaciones
    return errors;
  };

  console.log(formulario);

  return (
    <main>
      <NavbarGeneral />
      {/*Login */}
      <section className="text-black body-font flex justify-center">
        <div class="px-5 pt-12 flex flex-wrap">
          <div class="w-1/2 lg:mb-0 rounded-lg overflow-hidden pt-5">
            <img alt="feature" class="" src={imagenLogin} />
          </div>
          <div class=" w-1/2 flex justify-center pt-24 -mb-10  text-center">
            <div class="flex flex-col lg:items-start items-center">
              <div class="flex-grow">
                {/*Formulario ingresar */}
                <div className=" bg-white px-12 rounded-lg shadow pt-5 ">
                  <div className="p-6 space-y-4 md:space-y-6">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xltext-center">
                      ¡Bienvenido de vuelta!
                    </h1>
                    <form
                      onSubmit={handleLoginSession}
                      className="space-y-4 md:space-y-6"
                    >
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0"
                          placeholder="nombre@xxxxx.com"
                          value={formulario.email}
                          onChange={ManejarEventoDeInputs}
                        />
                        {alerta
                          .filter(
                            (input) =>
                              input.valorInput === "email" &&
                              input.estado === true
                          )
                          .map((message) => (
                            <div className="py-2">
                              <span className="text-red-500 mt-2">
                                {message.mensaje}
                              </span>
                            </div>
                          ))}
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Contraseña
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          value={formulario.password}
                          onChange={ManejarEventoDeInputs}
                        />
                        {alerta
                          .filter(
                            (input) =>
                              input.valorInput === "password" &&
                              input.estado === true
                          )
                          .map((message) => (
                            <div className="py-2">
                              <span className="text-red-500 mt-2">
                                {message.mensaje}
                              </span>
                            </div>
                          ))}
                      </div>
                      <div className="flex items-center justify-between"></div>
                      <div className="log flex justify-center">
                        <button className="button text">
                          <svg>
                            <rect
                              x="0"
                              y="0"
                              fill="none"
                              width="100%"
                              height="100%"
                            />
                          </svg>
                          Ingresar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
