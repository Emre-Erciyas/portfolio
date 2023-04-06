'use client'
import Image from 'next/image'
import { EB_Garamond } from 'next/font/google'
import {AiFillLinkedin, AiFillGithub, AiFillFilePdf} from 'react-icons/ai'
import gull from '@/public/gull.png'
import Link from 'next/link'
import Header from '@/components/header'
import Projects from '@/components/projects'
import About from '@/components/about'
import Footer from '@/components/footer'
import { useEffect, useRef, useState} from 'react'

const garamond = EB_Garamond({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const home = useRef(null)
  const projects = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)
  const [areVisible, setAreVisible] = useState([false,false]);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
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
        threshold: 0.7,
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
    <>
      <Header homeRef = {home} contactRef={contact} aboutRef={about} projectsRef={projects}/>
      <main ref={home}  className={`relative h-screen w-full bg-gradient-to-br from-[#2B2B33] to-[#3e3e48] m-0 ${garamond.className}`}>
        <div className=' flex flex-col h-screen top-0 justify-around items-center absolute left-[10%] lg:flex-row lg:top-1/3 lg:h-fit w-4/5'>
          <div data-id = '0' ref={ref1} className={`${areVisible[0] ? 'opacity-100' : 'opacity-0'} duration-1000 mt-8 flex flex-col justify-center items-center lg:mt-0 lg:justify-start lg:items-start`}>
            <h1 data-aos='zoom-in' className= {`text-[#fefeff] text-3xl xs:text-4xl sm:text-5xl lg:text-[3.4rem] 3xl:text-9xl mb-7 ml-1 font-medium tracking-wide`}>Emre Erciyas</h1>
            <h1 data-aos='zoom-in' className={`text-[#B1B1BD] text-xl xs:text-2xl sm:text-3xl lg:text-[2.5rem] 3xl:text-7xl mb-7 ml-1 font-medium tracking-wide italic`}>Full Stack Web Developer</h1>
            <div className='flex mt-4 '>
              <Link href={'https://www.linkedin.com/in/emreerciyas/'} target='_blank'><AiFillLinkedin className='text-[#fefeff] hover:text-[#B1B1BD] duration-[400ms] h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:w-16 lg:h-16 3xl:w-24 3xl:h-24 mr-9 ml-0.5' /></Link>
              <Link href={'https://github.com/Emre-Erciyas'} target='_blank'><AiFillGithub className='text-[#fefeff] hover:text-[#B1B1BD] duration-[400ms] h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:w-16 lg:h-16 mr-9 3xl:w-24 3xl:h-24' /></Link>
              <Link href={'https://drive.google.com/file/d/1i0xaURPajxnPuuFRLP8ao21B6gMZELdZ/view?usp=sharing'} target='_blank'><AiFillFilePdf className='text-[#fefeff] hover:text-[#B1B1BD] duration-[400ms] h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:w-16 lg:h-16 3xl:w-24 3xl:h-24' /></Link>

            </div>
          </div>
          <div data-id = '1' ref={ref2} className={`${areVisible[1] ? 'opacity-100' : 'opacity-0'} duration-1000 flex items-center`}>
            <Image src = {gull} alt = 'gull-img' className='h-24 w-48 sm:h-32 sm:w-64 3xl:h-48 3xl:w-96' />
          </div>
        </div>
      </main>
      <Projects projectsRef = {projects} />
      <About aboutRef = {about}/>
      <Footer contactRef = {contact}/>
    </>
  )
}
