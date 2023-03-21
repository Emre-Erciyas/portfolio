import { EB_Garamond } from 'next/font/google'
import rose from '@/public/rose.svg'
import Image from 'next/image'
const garamond = EB_Garamond({ subsets: ['latin'] })

export default function About() {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center h-screen w-screen bg-gradient-to-br from-[#2B2B33] to-[#3e3e48]'>
      <article className=' m-12 flex flex-col justify-center items-center lg:items-start max-w-[80%] md:max-w-[70%] lg:max-w-[45%]'>
        <h1 className={`text-[#F0F0FF] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-9xl p-4 tracking-wide ${garamond.className}`}>About me</h1>
        
        <p className={`text-[#B1B1BD] text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-5xl p-4 break-words tracking-wide ${garamond.className}`}>
          I'm Emre Erciyas, a full-stack developer. I graduated from Bilkent University Computer Science in 2022.
          On the front-end, I'm skilled in HTML, CSS, and JavaScript and I'm comfortable working with popular frameworks like React
          and Next.js. I also have decent knowledge in back-end development and worked with Java, Python, C++, Firebase and mySQL.
        </p>
        
        
      </article>
      <div>
        <Image src = {rose} alt = 'rose'  className =  'h-[160px] w-[102px] md:h-[200px] md:w-[140px] lg:h-[300px] lg:w-[210px] 3xl:h-[500px] 3xl:w-[350px]' />
      </div>
    </div>
  )
}