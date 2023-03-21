"use client"
import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link';
import {Fredericka_the_Great} from 'next/font/google'

const txt = Fredericka_the_Great({ weight: '400', subsets: ['latin'] })

export default function Header(): JSX.Element {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  function handleMenu( ): void{
    setIsMenuOpen(true)
  }
  function handleClose( ): void{
    setIsMenuOpen(false)
  }
  
  return (
    <div>
      <RxHamburgerMenu className=' absolute right-4 top-2 h-9 w-9 text-[#F0F0FF] hover:cursor-pointer z-10' onClick={handleMenu}/>
      
      {isMenuOpen && (
      <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen bg-gradient-to-br from-[#9191AB] to-[#646467] z-10'>
        <AiOutlineClose onClick={handleClose} className = {'text-[#F0F0FF] absolute left-4 top-2 h-9 w-9 hover:cursor-pointer'}/>
        <Link href='/' onClick = {() => setIsMenuOpen(false)} className={`mb-4 text-7xl text-[#F0F0FF] tracking-wide hover:text-[#4d4d55] duration-[400ms] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}>Home</Link>
        <Link href='/about' onClick = {() => setIsMenuOpen(false)} className={`mb-4 text-7xl text-[#F0F0FF] tracking-wide duration-[400ms] hover:text-[#4d4d55] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}>About</Link>
        <Link href='/projects' onClick = {() => setIsMenuOpen(false)} className={`mb-4 text-7xl text-[#F0F0FF] tracking-wide duration-[400ms] hover:text-[#4d4d55] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}>Projects</Link>
        <Link href='/contact' onClick = {() => setIsMenuOpen(false)} className={`mb-4 text-7xl text-[#F0F0FF] tracking-wide hover:text-[#4d4d55] duration-[400ms] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}>Contact</Link>
      </div>
      )}
    </div>
  )
}
