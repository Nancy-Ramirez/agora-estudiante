import { NavbarGeneral } from "../NavbarGeneral";

export const InicioGeneral = () => {
  return (
    <div>
      <NavbarGeneral></NavbarGeneral>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
