import { useRef } from "react";
import { FaAlignRight, FaAlignLeft } from "react-icons/fa";
import '../index.css'

const NavBar = () => {
  const menuHamburguesa = useRef(),
    barraNavegacion = useRef();


  const cambioMenu = () => {
    menuHamburguesa.current.firstChild.classList.toggle("hidden");
    menuHamburguesa.current.lastChild.classList.toggle("hidden");
    barraNavegacion.current.classList.toggle("hidden")
  };

  

  
  const textonav =[ '<Acerca de mi/>', '<Skills/>', '<Proyectos/>']

  return (
    <header className="fixed z-50 w-full h-16 p-4 bg-modelo-default sm:header">
      <section className="flex items-start justify-between w-full">
        <div className="px-4">
          <a className="text-gray-400 min" href="#main">
            ANGEL JUAREZ
          </a>
        </div>
        <button
          onClick={cambioMenu}
          className="flex px-4 pt-1 sm:menuBtn"
          ref={menuHamburguesa}
        >
          <FaAlignRight className="text-2xl text-gray-500" />
          <FaAlignLeft className="hidden text-2xl text-modelo-100" />
        </button>
        <nav
        onClick={cambioMenu}
          ref={barraNavegacion}
          className="fixed left-0 flex flex-col hidden w-full sm:inline sm:pt-5 bg-modelo-200 top-16 sm:navigation"
        >
          <a
            className="enlaces"
            href="#Acerca_de_mi"
          >
            {textonav[0]}
          </a>
          <a 
            className="enlaces"
            href="#Skills"
          >
            {textonav[1]}
          </a>
          <a
            className="enlaces"
            href="#proyectos"
          >
            {textonav[2]}
          </a>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
