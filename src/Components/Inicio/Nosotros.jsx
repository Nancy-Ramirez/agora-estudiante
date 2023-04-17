import { NavbarGeneral } from "../NavbarGeneral"
import imagesNosotros from "../../images/Gif/SobreNosotros1.gif"
import { Footer } from "../Footer";


export const Nosotros = () => {
    
    return (
      <main>
        <NavbarGeneral />
        {/*Sobre nosotros */}
        <section id="Nosotros" class="text-gray-600 body-font bg-gray-200">
          <div class="container px-5 pt-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:mb-0 rounded-lg overflow-hidden">
              <img alt="feature" class="" src={imagesNosotros} />
            </div>
            <div class="flex flex-col flex-wrap pt-24 lg:w-1/2 lg:text-left text-center">
              <div class="flex flex-col lg:items-start items-center">
                <div class="flex-grow">
                  <p class="leading-relaxed text-base pb-3">
                    Nuestro objetivo es ayudar a los estudiantes a mejorar su
                    comportamiento y conocimiento en ciencias a través de una
                    variedad de quiz interactivas con preguntas variadas.
                  </p>
                  <p className="leading-relaxed text-base">
                    Además de proporcionar preguntas que te ayuden a comprender
                    los temas. Agora tambien proporciona al estudiante la
                    capacidad de trabajar a su porpio ritmo y en cualquier
                    momento y lugar, lo que les permite aprender de manera más
                    efectiva.
                  </p>
                  <div class="containerAbout">
                    <div class="wrapperAbout">
                      <div class="container">
                        <h1>Aprende de manera interactiva</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </section>
            <Footer/>
      </main>
    );
}