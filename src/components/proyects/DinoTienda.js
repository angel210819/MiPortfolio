import { FaGithub, FaSignOutAlt } from 'react-icons/fa'
import dinoTienda from '../../images/dino (1).png'

export default function DinoTienda() {
  return (
    <div className="gap-3 mx-4 ">
          <h2 className="p-4 px-5 text-2xl font-extrabold text-modelo-100">
            Dino Mascotas
          </h2>
          <div className="p-5 px-5 border-2 rounded-xl border-modelo-200 bg-modelo-200 md:flex">
            <p className="max-w-sm text-lg text-gray-400 md:mt-10 lg:mt-20">
              Dino Mascotas es una tienda de mascotas que hicimos en grupo,
              usando para la interfaz de usuario React JS con un framework de CSS llamado Material UI.
              la pagina dispone de un carrusel principal, una seccion para alimentos de mascotas con su carrito de compras
              funcional y para simular un backend utilizamos JSON-SERVER, la peticion la hicimos con la libreria Axios.
            </p>
            <div className="flex flex-col ">
              <div className="md:pt-5 max-h-62">
                <img
                  src={dinoTienda}
                  className="object-fill w-full max-h-80"
                  alt="tienda de mascotas"
                />
              </div>
              <div className="px-5 pb-4 text-gray-400 rounded-lg shadow-lg lg:pt-20 bg-modelo-200 md:mt-5">
                #REACT #JSON-SERVER #AXIOS #MATERIAL UI
              </div>
              <div className="flex">
              <a href="https://github.com/angel210819/Rick-y-Morty-" className="px-4 pt-3 text-gray-400">
                <FaGithub className="text-3xl hover:text-orange-400"/>
              </a>
              <a href="https://tienda-dino-mascotas.vercel.app/" className="px-4 pt-3 text-gray-400">
                <FaSignOutAlt className="text-3xl hover:text-orange-400"/>
              </a>
              </div>
            </div>
          </div>
        </div>
  )
}
