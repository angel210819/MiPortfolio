import pdf from "../images/curriculum vitae CV trabajo.pdf"

const Main = () => {
  return (
    <section
      id="main"
      className="flex flex-col justify-center h-full px-3 py-10 overflow-x-hidden lg:pt-28 -top-10 xl:-top-40 xl:scroll-mt-64 scroll-mt-10 bg-modelo-50">
      <div className="md:ml-48">
        <div className="">
          <p className="font-mono text-teal-300 "> hola, mi nombre es: </p>
          <h2 className="mb-1 font-sans text-4xl font-bold text-purple-500 sm:text-2xl xl:text-7xl lg:mb-5">
            Angel Juarez
          </h2>
          <div>
            <div className="containerTransition">
              <span className='text-2xl text-white efecto-nombre'> y soy Junior Fullstack Developer </span>
            </div>
          </div>
          <div>
            <p className="my-6 text-gray-400 text-md xl:my-10 xl:text-lg xl:w-3/4">
              Bienvenido, soy un entusiasta de la tecnología e informatica, me
              encanta aprender y compartir conocimiento relacionado, asi como
              enfrentarme a retos en equipo. Actualmente estoy enfocado en
              seguir creciendo y aprendiendo ReactJS a profundidad.
            </p>
            <button className="px-5 py-1 font-mono text-lg font-semibold text-purple-500 border-2 border-purple-600 rounded-md w-max xl:px-8 xl:py-2 active:translate-y-2 active:bg-modelo-200 active:duration-200 active:transition-all">
              <a href="https://www.linkedin.com/in/angel-mirko-juarez-166776224/"> contáctame </a>
            </button>
            <button className="px-5 py-1 mt-3 overflow-x-hidden font-mono text-lg font-semibold text-purple-500 border-2 border-purple-600 rounded-md sm:ml-4 w-max xl:px-8 xl:py-2 active:translate-y-2 active:bg-modelo-200 active:duration-200 active:transition-all">
            <a href={pdf} rel="noopener noreferrer" download="curriculum vitae"> descargar mi cv  </a>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
