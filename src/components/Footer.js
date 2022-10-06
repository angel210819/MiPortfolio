import {FaLinkedin,FaGithub,FaWhatsapp} from 'react-icons/fa'
export default function Footer() {
  return (
    <footer className='flex pt-5'>
      <div className='flex w-full h-48 text-xl text-white'>
        <div className='flex items-center justify-around w-full text-4xl text-modelo-100 '>
          <a 
          className='hover:text-modelo-150'
          href='https://www.linkedin.com/in/angel-mirko-juarez-166776224/'>
          <FaLinkedin />
          </a>
          <a
          className='hover:text-modelo-150'
          href='https://github.com/angel210819'>
            <FaGithub />
          </a>
          <a 
          className='hover:text-modelo-150'
          href='https://wa.me/5493885836779'>
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}
