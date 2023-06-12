'use client';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/header'));
const About = dynamic(() => import('@/components/about'));
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });
const Projects = dynamic(() => import('@/components/projects'));
const Main = dynamic(() => import('@/components/main'));
export default function Home() {
	const home = useRef(null);
	const projects = useRef(null);
	const about = useRef(null);
	const contact = useRef(null);
	return (
		<>
			<Header
				homeRef={home}
				contactRef={contact}
				aboutRef={about}
				projectsRef={projects}
			/>
			<Main homeRef={home} />
			<Projects projectsRef={projects} />
			<About aboutRef={about} />
			<Footer contactRef={contact} />
		</>
	);
}
