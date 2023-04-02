import Image from 'next/image'
import { EB_Garamond } from 'next/font/google'
import {AiFillLinkedin, AiFillGithub, AiFillFilePdf} from 'react-icons/ai'
import gull from '@/public/gull.png'
import Link from 'next/link'

const garamond = EB_Garamond({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main  className={`relative h-screen w-full bg-gradient-to-br from-[#2B2B33] to-[#3e3e48] m-0 ${garamond.className}`}>
      <div className=' flex flex-col h-screen top-0 justify-around items-center absolute left-[10%] lg:flex-row lg:top-1/3 lg:h-fit w-4/5'>
        <div className='mt-8 flex flex-col justify-center items-center lg:mt-0 lg:justify-start lg:items-start'>
          <h1 className= {`text-[#F0F0FF] text-3xl xs:text-4xl sm:text-5xl lg:text-[3.4rem] 3xl:text-9xl mb-7 ml-1 font-medium tracking-wide`}>Emre Erciyas</h1>
          <h1 className={`text-[#B1B1BD] text-xl xs:text-2xl sm:text-3xl lg:text-[2.5rem] 3xl:text-7xl mb-7 ml-1 font-medium tracking-wide italic`}>Full Stack Web Developer</h1>
          <div className='flex mt-4 '>
            <Link href={'https://www.google.com'} target='_blank'><AiFillLinkedin className='text-[#F0F0FF] h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:w-16 lg:h-16 3xl:w-24 3xl:h-24 mr-9 ml-0.5' /></Link>
            <Link href={'https://www.google.com'} target='_blank'><AiFillGithub className='text-[#F0F0FF] h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:w-16 lg:h-16 mr-9 3xl:w-24 3xl:h-24' /></Link>
            <Link href={'https://www.google.com'} target='_blank'><AiFillFilePdf className='text-[#F0F0FF] h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:w-16 lg:h-16 3xl:w-24 3xl:h-24' /></Link>
          </div>
        </div>
        <div className='flex items-center'>
          <Image src = {gull} alt = 'gull-img' className='h-32 w-64 3xl:h-48 3xl:w-96' />
        </div>
      </div>
    </main>
  )
}
