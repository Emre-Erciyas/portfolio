import Image from 'next/image'
import { EB_Garamond } from 'next/font/google'
import {AiFillLinkedin, AiFillGithub, AiFillFilePdf} from 'react-icons/ai'
import gull from '@/public/gull.png'
import Link from 'next/link'

const garamond = EB_Garamond({ subsets: ['latin'] })

export default function Home() {
  return (
    <main  className=' relative h-screen w-screen bg-gradient-to-br from-[#2B2B33] to-[#3e3e48]'>
      <div className=' flex flex-col justify-center items-center absolute left-[10%] lg:flex-row lg:justify-around top-1/3 w-4/5'>
        <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start'>
          <h1 className= {`text-[#F0F0FF] text-4xl sm:text-5xl lg:text-[3.4rem] mb-7 ml-1 font-medium ${garamond.className}`}>Emre Erciyas</h1>
          <h1 className={` text-[#B1B1BD] text-3xl sm:text-4xl lg:text-[2.8rem] mb-7 ml-1 font-medium italic ${garamond.className}`}>Full Stack Web Developer</h1>
          <div className='flex mt-4 '>
            <Link href={'https://www.google.com'} target='_blank'><AiFillLinkedin className='text-[#F0F0FF] h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:w-16 lg:h-16 mr-9 ml-0.5' /></Link>
            <Link href={'https://www.google.com'} target='_blank'><AiFillGithub className='text-[#F0F0FF] h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:w-16 lg:h-16 mr-9' /></Link>
            <Link href={'https://www.google.com'} target='_blank'><AiFillFilePdf className='text-[#F0F0FF] h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:w-16 lg:h-16' /></Link>
          </div>
        </div>
        <div className='flex items-center'>
          <Image src = {gull} alt = 'gull-img' className='h-32 w-64 hidden lg:inline-block' />
        </div>
      </div>
    </main>
  )
}
