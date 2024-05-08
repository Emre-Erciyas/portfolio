import React, { MutableRefObject } from 'react';
import Project from './project';
import Crush from '@/public/Crush.avif';
import {
	SiNextdotjs,
	SiFirebase,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';
import Portfolio from '@/public/Portfolio.avif';

interface Props {
	projectsRef: MutableRefObject<null>;
}

export default function Projects(props: Props) {
	return (
		<div
			ref={props.projectsRef}
			className={`w-full bg-gradient-to-br to-[#B1B1BD] from-[#fefeff] m-0 flex flex-col items-center md:items-start`}
		>
			<h1
				className={` text-[#2B2B33] text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl mb-8 tracking-wide mt-0 lg:ml-[2%] md:ml-9 xl:ml-[10%] pl-1 pt-5`}
			>
				Projects
			</h1>
			<div className="flex flex-col items-center justify-center w-full lg:items-baseline">
				<Project
					staticIMG={Crush}
					name="Fruit Crush"
					description={
						'Fruit Crush is a puzzle game where the players try to score as many points as possible within 30 moves. The game features a leaderboard of 10, where the top 10 players with the highest scores will be listed.'
					}
					stack={[SiNextdotjs, SiFirebase]}
					live="https://crush-jet.vercel.app/"
					isLive={true}
					source="https://github.com/Emre-Erciyas/Crush"
				/>
				<Project
					staticIMG={Portfolio}
					name="Personal Web Site"
					description="This site is created with Next.js, Tailwind CSS and Typescript."
					stack={[SiNextdotjs, SiTailwindcss, SiTypescript]}
					live=""
					isLive={false}
					source="https://github.com/Emre-Erciyas/portfolio"
				/>
			</div>
		</div>
	);
}
