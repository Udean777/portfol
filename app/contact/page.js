import React from 'react'
import Navbar from '../components/Navbar'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export default function page() {
  return (
    <div className='min-h-screen'>
      <Navbar/>

      <div className='m-auto py-10 sm:py-20 md:py-28 max-w-6xl px-4 sm:px-6 md:px-8 animate__animated animate__fadeInDown text-stone-800 dark:text-stone-200 overflow-hidden'>
        <h1 className='font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8'>CONTACT</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

        <Link href='https://github.com/Udean777' target='__blank' className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white dark:hover:text-purple-600  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-purple-600 border-2
             border-zinc-500 dark:border-white dark:hover:border-purple-600  hover:border-purple-600  transition ease-in">
          <FaGithub className='m-auto w-auto py-5' size={150}/>
        </Link>

        <Link href='https://www.instagram.com/ssajudn/' target='__blank' className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white dark:hover:text-rose-600  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-rose-600 border-2
             border-zinc-500 dark:border-white dark:hover:border-rose-600 hover:border-rose-600 transition ease-in">
          <FaInstagram className='m-auto w-auto py-5' size={150}/>
        </Link>

        <Link href='https://www.linkedin.com/in/sajudin-ma-ruf-b9ba01265/' target='__blank' className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white dark:hover:text-blue-800  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-blue-800  border-2
             border-zinc-500 dark:border-white dark:hover:border-blue-800 hover:border-blue-800 transition ease-in">
          <FaLinkedinIn className='m-auto w-auto py-5' size={150}/>
        </Link>

        <Link href='https://wa.me/6285174363671' target='__blank' className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white dark:hover:text-green-600  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-green-600 border-2
             border-zinc-500 dark:border-white dark:hover:border-green-600  hover:border-green-600 transition ease-in">
          <FaWhatsapp className='m-auto w-auto py-5' size={150}/>
        </Link>

          </div>
        </div>
    </div>
  )
}
