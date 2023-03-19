import { EB_Garamond } from 'next/font/google'
import rose from '@/public/rose.svg'
import Image from 'next/image'
const garamond = EB_Garamond({ subsets: ['latin'] })

export default function About() {
  return (
    <div className='flex justify-center md:justify-around items-center h-screen w-screen bg-gradient-to-br from-[#2B2B33] to-[#3e3e48]'>
      <article className='flex flex-col justify-center items-center md:items-start border border-white max-w-[80%] md:max-w-[45%]'>
        <h1 className={`text-[#F0F0FF] text-6xl p-4 ${garamond.className}`}>About me</h1>
        
        <p className={`text-[#B1B1BD] text-2xl p-4 break-words ${garamond.className}`}>
          In this section I am going to talk about myself. I am Emre Erciyas and I am a computer science graduate. Falan filan 
          fişm xd.
        </p>
        
      </article>
      <div>
        <Image src = {rose} alt = 'rose' height={300} className = 'hidden md:inline-block' />
      </div>
    </div>
  )
}