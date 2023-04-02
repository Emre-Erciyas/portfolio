import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  staticIMG: StaticImageData,
  name: String,
  description: String,
  stack: string[]
}

export default function Project(props: Props) {
  return (
    <div className='w-[90%] lg:w-3/4 bg-[#e5e5f3] my-3 lg:my-5 rounded-lg shadow-lg  lg:ml-[10%] flex flex-col lg:flex-row'>

        <Image 
          className='rounded-lg my-3 ml-3'
          src={props.staticIMG} 
          alt = 'Project Image'
          priority
        />
  
      <div className='flex flex-col w-1/2 h-full items-center mx-3'>
        <h1 className='mt-3 text-[#2B2B33] text-xl'>{props.name}</h1>
        <p className='mt-3 mx-6 text-[#68687A] text-lg tracking-wide italic'>{props.description}</p>
      </div>

    </div>
  )
}
