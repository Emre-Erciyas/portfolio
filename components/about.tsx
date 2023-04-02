import { EB_Garamond } from 'next/font/google'
import rose from '@/public/rose.svg'
import Image from 'next/image'
const garamond = EB_Garamond({ subsets: ['latin'] })

export default function About() {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center h-screen w-full bg-gradient-to-br from-[#2B2B33] to-[#3e3e48] m-0'>
      <article className={` m-12 flex flex-col justify-center items-center lg:items-start max-w-[80%] md:max-w-[70%] lg:max-w-[45%] ${garamond.className}`}>
        <h1 className={`text-[#F0F0FF] text-3xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-9xl p-4 tracking-wide`}>About me</h1>
        
        <p className={`text-[#B1B1BD] text-base sm:text-xl md:text-2xl xl:text-3xl 3xl:text-5xl p-4 break-words tracking-wide italic`}>
          I am Emre Erciyas, a <span className='italic'>Full-stack Web Developer</span>. I graduated from Bilkent University Computer Science in 2022.
          On the front-end, I'm skilled in HTML, CSS and JavaScript and I'm comfortable working with React.js and 
          Next.js. I also have decent knowledge in back-end development and worked with Node.js, Java, Python and Firebase.
        </p>
        
        
      </article>
      <div>
        <Image src = {rose} alt = 'rose'  className =  'h-[160px] w-[102px] md:h-[200px] md:w-[140px] lg:h-[300px] lg:w-[210px] 3xl:h-[500px] 3xl:w-[350px]' />
      </div>
    </div>
  )
}