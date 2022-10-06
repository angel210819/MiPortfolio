import React from 'react'

const AcercaDeMi = () => {
  return (
    <section className='flex flex-col pt-20 pl-6' id='Acerca_de_mi'>
      <div className='flex gap-10 pl-3'>
        <p className='text-2xl text-modelo-150'> 02. </p>
        <h2 className='text-2xl text-gray-400'> Acerca de mi </h2>
      </div>
      <div className='md:flex md:flex-row'>
      <div className='flex flex-col gap-6 p-4 text-gray-500 md:w-1/2'>
        <p>Holaa! Mi nombre es Angel y soy un apasionado por la tecnologia,
        me gusta estar en continuo aprendizaje, me gusta trabajar en equipo y poder enseñar todo lo que voy aprendiendo.
        </p>
        <p> Me gusta trabajar en frontend, pero tambien estoy interesado en aprender backend, asi que
        actualmente me encuentro aprendiendo Node JS con Express.</p>
      </div>
      <div className='flex justify-center w-full p-5 h-72 md:w-1/3'>
      <div className='flex items-center justify-center w-full h-full px-5'>
        <img className='w-56 h-56 border-2 border-solid rounded-full border-modelo-150' src={require('../images/mirko.jpeg')} alt=''/>
      </div>
      </div>
      </div>
    </section>
  )
}

export default AcercaDeMi