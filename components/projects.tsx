'use client'
import React from 'react'
import Project from './project'
import Crush from '@/public/Crush.svg'
import {SiNextdotjs, SiFirebase, SiTailwindcss, SiTypescript} from 'react-icons/si'


//import Portfolio from '@/public/Portfolio.svg'


export default function Projects() {
  
  return (
    <div className={`w-full bg-gradient-to-br to-[#B1B1BD] from-[#e1e1f0] m-0`}>
      <h1 className={`text-[#2B2B33] text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl my-8 tracking-wide mt-0 ml-[10%] pt-3`}>Projects</h1>
      <div className='w-full flex flex-col justify-center items-center lg:items-baseline'>
        <Project 
          staticIMG = {Crush} 
          name = 'Fruit Crush'
          description= {'Fruit Crush is a puzzle game where the players try to score as many points as possible within 30 moves. The game features a leaderboard of 10, where the top 10 players with the highest scores will be listed.'}
          stack = {[SiNextdotjs, SiFirebase]}
          live = ''
          isLive = {true}
          source= {'https://www.google.com'}
          />
        <Project 
          staticIMG= {Crush} 
          name = 'Personal Web Site'
          description='Personal Web Site' 
          stack = {[SiNextdotjs, SiTailwindcss, SiTypescript]}
          live = ''
          isLive = {false}
          source= {'https://www.google.com'}
          />
      </div>
    </div>
  )
}