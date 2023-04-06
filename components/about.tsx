'use client'
import { EB_Garamond } from 'next/font/google'
import rose from '@/public/Rose.svg'
import Image from 'next/image'
import React, { MutableRefObject } from 'react'
const garamond = EB_Garamond({ weight:'400', subsets: ['latin'] })

interface Props{
  aboutRef: MutableRefObject<null>
}

export default function About(props: Props) {
  const [areVisible, setAreVisible] = React.useState([false,false]);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAreVisible((prev) => {
              const arr = [...prev];
              if(entry.target.getAttribute('data-id')){
                (arr[parseInt(entry.target.getAttribute('data-id')!)] = true)
              }
              return arr;
            });
          } else {
            setAreVisible((prev) => {
              const arr = [...prev];
              if(entry.target.getAttribute('data-id')){
                (arr[parseInt(entry.target.getAttribute('data-id')!)] = false)
              }
              return arr;
            });
          }
        })
      },
      {
        threshold: 0.5,
      }
    );

    if (ref1.current) {
      observer.observe(ref1.current);
    }
    if (ref2.current) {
      observer.observe(ref2.current);
    }
    return () => {
      if (ref1.current) {
        observer.unobserve(ref1.current);
      }
      if (ref2.current) {
        observer.unobserve(ref2.current);
      }
    };
  }, []);
  return (
    <div ref={props.aboutRef} className='flex flex-col lg:flex-row justify-around items-center h-screen w-full bg-gradient-to-br from-[#2B2B33] to-[#3e3e48] m-0'>
      <article data-id = '0' ref={ref1} style={garamond.style} className= {`${areVisible[0] ? 'opacity-100' : 'opacity-0'} delay-100 duration-1000 m-12 flex flex-col justify-center items-center lg:items-start max-w-[80%] md:max-w-[70%] lg:max-w-[45%]`}>
        <h1 className={`text-[#fefeff] text-3xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-9xl p-4 3xl:p-10 tracking-wide`}>About me</h1>
        
        <p className={`text-[#B1B1BD] sm:text-xl md:text-2xl xl:text-3xl 3xl:text-5xl p-1 md:p-4 3xl:p-10 break-words tracking-wide italic`}>
          I am Emre Erciyas, a <span className='italic'>Full-stack Web Developer</span>. I graduated from Bilkent University Computer Science in 2022.
          On the front-end I am comfortable working with React.js and 
          Next.js. I have decent knowledge in back-end development and worked with Node.js, Java, Python and Firebase.
        </p>
        
        
      </article>
      <div>
        <Image data-id = '1' ref={ref2} src = {rose} alt = 'rose'  className = {`${areVisible[1] ? 'opacity-100' : 'opacity-0'} delay-100 duration-1000 h-[160px] w-[102px] md:h-[200px] md:w-[140px] lg:h-[300px] lg:w-[210px] 3xl:h-[500px] 3xl:w-[350px]`} />
      </div>
    </div>
  )
}