import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({ subsets: ['latin'] })

export default function Footer() {
  return (
    <div className='w-full bg-gradient-to-br to-[#B1B1BD] from-[#F0F0FF] m-0 flex justify-center'>
      <form className='flex flex-col justify-center'>
        <h1 className='text-2xl text-[#2B2B33]'>Contact</h1>
        <div className='w-96 flex justify-between'>
          <label >Name: </label>
          <input placeholder='Name' className='m-3 shadow-sm border border-black overflow-hidden'/>
        </div>
        <div className='w-96 flex justify-between overflow-hidden'>
          <label >Email: </label>
          <input placeholder='Email' className='m-3 shadow-sm border border-black'/>
        </div>
        <div className='w-96 flex justify-between overflow-hidden'>
          <label >Message: </label>
          <input placeholder='Message' type={'text'} className='m-3 shadow-sm border border-black'/>
        </div>
      </form>
    </div>
  )
}