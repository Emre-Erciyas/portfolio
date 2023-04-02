'use client'
import React from 'react'
import { EB_Garamond } from 'next/font/google'
import Project from './project'
import Crush from '@/public/Crush.svg'
//import Portfolio from '@/public/Portfolio.svg'


const garamond = EB_Garamond({ weight: '400', subsets: ['latin'] })
export default function Projects() {
  
  return (
    <div className={`w-full bg-gradient-to-br to-[#B1B1BD] from-[#e1e1f0] m-0 ${garamond.className}`}>
      <h1 className={`text-[#2B2B33] text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl my-8 tracking-wide mt-0 ml-[10%] pt-3`}>Projects</h1>
      <div className='w-full flex flex-col justify-center items-center lg:items-baseline'>
        <Project 
          staticIMG = {Crush} 
          name = 'Fruit Crush'
          description= {'Fruit Crush is a puzzle game that is designed to test your skills in matching and crushing fruits of different colors and shapes. The objective of the game is to score as many points as possible within 30 moves. The game features a leaderboard of 10, where the top 10 players with the highest scores will be listed.'}
          stack = {['Next.js', 'Firebase']}
          />
        <Project 
          staticIMG= {Crush} 
          name = 'Personal Web Site'
          description='Personal Web Site' 
          stack = {['Next.js', 'Tailwind CSS', 'Typescript']}
          />
      </div>
    </div>
  )
}