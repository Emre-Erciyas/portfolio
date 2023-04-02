"use client"
import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link';
import {Fredericka_the_Great, EB_Garamond} from 'next/font/google'

const txt = Fredericka_the_Great({ weight: '400', subsets: ['latin'] })
const garamond = EB_Garamond({ weight: '700', subsets: ['latin'] })


export default function Header(): JSX.Element {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  function handleMenu( ): void{
    setIsMenuOpen(true)
  }
  function handleClose( ): void{
    setIsMenuOpen(false)
  }
  
  return (
    <header className={`${garamond.className}`}>
      <div className='fixed w-full z-10 bg-[#2B2B33] bg-opacity-10 opacity-70'>
        <RxHamburgerMenu className='absolute right-4 top-2 h-9 w-9 text-[#F0F0FF] hover:cursor-pointer md:hidden' onClick={handleMenu}/>
        <div className='hidden md:flex justify-end '>
          <button type = 'button' className={`text-[#F0F0FF] text-2xl tracking-wide hover:text-[#6f6f78] duration-[400ms] mx-4 my-2`}>Home</button>
          <button type = 'button' className={`text-[#F0F0FF] text-2xl tracking-wide hover:text-[#6f6f78] duration-[400ms] mx-4 my-2`}>Projects</button>
          <button type = 'button' className={`text-[#F0F0FF] text-2xl tracking-wide hover:text-[#6f6f78] duration-[400ms] mx-4 my-2`}>About</button>
          <button type = 'button' className={`text-[#F0F0FF] text-2xl tracking-wide hover:text-[#6f6f78] duration-[400ms] mx-4 my-2`}>Contact</button>
        </div>
      </div>
      {isMenuOpen && (
      <div className='fixed flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#9191AB] to-[#646467] z-10'>
        <AiOutlineClose onClick={handleClose} className = {'text-[#F0F0FF] absolute left-4 top-2 h-9 w-9 hover:cursor-pointer'}/>
        <Link href='/' onClick = {() => setIsMenuOpen(false)} className={`mb-4 text-7xl text-[#F0F0FF] tracking-wide hover:text-[#4d4d55] duration-[400ms] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}>Home</Link>
        <Link href='/about' onClick = {() => setIsMenuOpen(false)} className={`mb-4 text-7xl text-[#F0F0FF] tracking-wide duration-[400ms] hover:text-[#4d4d55] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}>About</Link>
        <Link href='/projects' onClick = {() => setIsMenuOpen(false)} className={`mb-4 text-7xl text-[#F0F0FF] tracking-wide duration-[400ms] hover:text-[#4d4d55] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}>Projects</Link>
        <Link href='/contact' onClick = {() => setIsMenuOpen(false)} className={`mb-4 text-7xl text-[#F0F0FF] tracking-wide hover:text-[#4d4d55] duration-[400ms] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}>Contact</Link>
      </div>
      )}
    </header>
  )
}
