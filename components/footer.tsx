'use client'
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({ weight: '400', subsets: ['latin'] })

export default function Footer() {

  function handleSubmit():void{
    
  }

  return (
    <footer className={`w-full bg-gradient-to-br to-[#B1B1BD] from-[#F0F0FF] m-0 flex justify-center ${garamond.className}`}>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
        <h1 className={`text-[#2B2B33] text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl my-8`}>Contact me</h1>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-72 xs:w-80 sm:w-[25rem] flex flex-col  xs:flex-row xs:justify-between xs:items-center my-2'>
            <label className={`text-[#2B2B33] text-base sm:text-xl italic`}>Name: </label>
            <input placeholder='Name' maxLength={8} minLength={3} required className={`mt-2 xs:m-3 shadow-sm border border-black overflow-hidden w-full xs:w-52 italic rounded`}/>
          </div>
          <div className='w-72 xs:w-80 sm:w-[25rem] my-4 flex flex-col  xs:flex-row xs:justify-between xs:items-center'>
            <label className={`text-[#2B2B33] text-base sm:text-xl italic`}>Email: </label>
            <input placeholder='Email' type='email' required className='mt-2 xs:m-3 shadow-sm border border-black w-full xs:w-52 italic rounded '/>
          </div>
          <div className='w-72 xs:w-80 sm:w-[25rem] flex flex-col  xs:flex-row xs:justify-between mt-4 mb-10 h-24'>
            <label className={`text-[#2B2B33] text-base sm:text-xl italic`}>Message: </label>
            <textarea placeholder='Message' required className='mt-2 xs:mt-0 xs:mr-3 shadow-sm border border-black w-full xs:w-52 h-full italic rounded'/>
          </div>
        </div>
        <button type='submit' className={`text-[#F0F0FF] mb-10 font-bold bg-[#2B2B33] py-2 px-8 rounded`}>Send</button>
      </form>
    </footer>
  )
}