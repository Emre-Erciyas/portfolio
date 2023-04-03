import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'
import {HiOutlineExternalLink} from 'react-icons/hi'
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({ weight: '400', subsets: ['latin'] })
const garamondBold = EB_Garamond({ weight: '700', subsets: ['latin'] })

interface Props {
  staticIMG: StaticImageData,
  name: String,
  description: String,
  stack: IconType[],
  isLive: boolean,
  source: string,
  live: string
}

export default function Project(props: Props){
  return (
    <div className='relative w-[95%] md:h-[400px] xl:h-[440px] xl:w-3/4 bg-[#e5e5f3] my-3 md:my-5 rounded-lg shadow-lg md:ml-5 xl:ml-[10%] flex flex-col items-center md:flex-row'>
      <Image 
        className='rounded-lg md:m-5 mt-5  md:mr-0 w-[95%] md:max-w-[min(480px,_60%)] lg:max-w-[min(560px,_60%)] xl:max-w-[min(600px,_60%)]'
        src={props.staticIMG} 
        alt = 'Project Image'
        priority
      />
      <div className='relative flex flex-col md:w-1/2 items-center mx-3 md:h-[400px] xl:h-[440px]'>
        <h1 className='mt-5 text-[#2B2B33] text-xl'>{props.name}</h1>
        <p className='mt-3 mx-6 md:mx-3 xl:mx-6 text-[#68687A] 3xl:text-lg tracking-wide italic text-sm xl:text-base'>{props.description}</p>
        <div className='w-full mt-6 flex justify-center mb-24'>
          {props.stack.map((Element: IconType) =>{
            return <Element className=' text-3xl text-[#2B2B33] mx-5'/>
          })}
        </div>
        <div className={`w-full flex absolute bottom-4 md:bottom-8 justify-around`}>
          <Link href = {props.source} className='flex items-center xl:text-base text-sm bg-[#B1B1BD] py-2 px-4 rounded tracking-wide shadow-sm'>Source Code {<HiOutlineExternalLink className='ml-1' />}</Link>
          <Link href = {props.live} className={`flex items-center xl:text-base text-sm bg-[#B1B1BD] py-2 px-4 rounded tracking-wide shadow-sm ${!props.isLive && 'hidden'}`}>Demo {<HiOutlineExternalLink className='ml-1' />}</Link>
        </div>
      </div>

    </div>
  )
}
