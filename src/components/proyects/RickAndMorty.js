import mockRick from '../../images/mocknuevo.png'
import { FaGithub, FaSignOutAlt } from 'react-icons/fa'

export default function RickAndMorty() {
  return (
    <div className="gap-3 mx-4 ">
          <h2 className="p-4 px-5 text-2xl font-extrabold text-modelo-100">
            Rick and Morty
          </h2>
          <div className="p-5 px-5 border-2 rounded-xl border-modelo-200 bg-modelo-200 md:flex">
            <p className="max-w-sm text-lg text-gray-400 md:mt-10 lg:mt-20 ">
              Una clasica pagina de Rick and Morty, incorporada con una barra buscadora para buscar 
              cualquier personaje, y ver dinamicamente si algun personaje está "vivo" o saber su "especie".
              para la paginacion usé react-router-dom y para las peticiones utilicé la libreria Axios.
              Para darle estilos a los componentes utilicé un framework de CSS llamado TailwindCSS.
              
            </p>
            <div className="flex flex-col">
              <div className="max-h-62">
                <img
                  src={mockRick}
                  className="object-fill w-full max-h-80"
                  alt="proyecto rick y morty"
                />
              </div>
              <div className="px-5 pt-3 pb-4 text-gray-400 rounded-lg shadow-lg bg-modelo-200 md:mt-5">
                #REACT #REACT-ROUTER-DOM #AXIOS #TAILWINDCSS
              </div>
              <div className="flex">
              <a href="https://github.com/angel210819/Rick-y-Morty-" className="px-4 pt-3 text-gray-400">
                <FaGithub className="text-3xl hover:text-green-500"/>
              </a>
              <a href="https://rick-y-morty-two.vercel.app/" className="px-4 pt-3 text-gray-400">
                <FaSignOutAlt className="text-3xl hover:text-green-500"/>
              </a>
              </div>
            </div>
          </div>
        </div>
  )
}
