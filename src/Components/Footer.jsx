import loguito from "../../src/images/Logo.png";

export const Footer = () => {
  return (
    <footer class="bg-gray-200 text-gray-600 body-font">
      <div class="container px-5 py-5 mx-auto flex justify-between items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={loguito} alt="" width="24" />
          <span class="ml-3 text-xl">AGORA</span>
        </a>
        <div>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Agora —
        </p>
        </div>
      </div>
    </footer>
  );
};
