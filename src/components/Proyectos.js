
import DinoTienda from "./proyects/DinoTienda";
import RickAndMorty from "./proyects/RickAndMorty";

const Proyectos = () => {
  return (
    <section id="proyectos" className="flex flex-col h-full pl-6 md:mt-16">
      <div>
        <div className="flex gap-10 pb-5 pl-3">
          <p className="text-2xl text-modelo-150">03.</p>
          <p className="text-2xl text-gray-400"> Proyectos </p>
        </div>
        <div className="flex flex-col md:grid-cols-2 md:grid">
        <RickAndMorty />
        <DinoTienda />
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
