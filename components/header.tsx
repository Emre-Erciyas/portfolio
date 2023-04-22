'use client';
import React, { MutableRefObject } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Fredericka_the_Great, EB_Garamond } from 'next/font/google';

const txt = Fredericka_the_Great({ weight: '400', subsets: ['latin'] });
const garamond = EB_Garamond({ weight: '700', subsets: ['latin'] });

interface Props {
	homeRef: MutableRefObject<null | HTMLDivElement>;
	projectsRef: MutableRefObject<null | HTMLDivElement>;
	aboutRef: MutableRefObject<null | HTMLDivElement>;
	contactRef: MutableRefObject<null | HTMLDivElement>;
}

export default function Header(props: Props): JSX.Element {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	function handleMenu(): void {
		setIsMenuOpen(true);
	}
	function handleClose(): void {
		setIsMenuOpen(false);
	}

	function handleHome() {
		props.homeRef.current!.scrollIntoView({ behavior: 'smooth' });
	}
	function handleProject() {
		props.projectsRef.current!.scrollIntoView({ behavior: 'smooth' });
	}
	function handleAbout() {
		props.aboutRef.current!.scrollIntoView({ behavior: 'smooth' });
	}
	function handleContact() {
		props.contactRef.current!.scrollIntoView({ behavior: 'smooth' });
	}
	return (
		<header className={`${garamond.className}`}>
			<div className="fixed w-full z-10 bg-[#2B2B33] bg-opacity-10 opacity-70">
				<RxHamburgerMenu
					className="absolute right-4 3xl:right-6 top-2 h-9 w-9 text-[#fefeff] hover:cursor-pointer md:hidden"
					onClick={handleMenu}
				/>
				<div className="hidden md:flex justify-end ">
					<button
						type="button"
						onClick={handleHome}
						className={`text-[#fefeff] text-2xl 3xl:text-4xl tracking-wide hover:text-[#6f6f78] duration-[400ms] mx-4 my-2`}
					>
						Home
					</button>
					<button
						type="button"
						onClick={handleProject}
						className={`text-[#fefeff] text-2xl 3xl:text-4xl tracking-wide hover:text-[#6f6f78] duration-[400ms] mx-4 my-2`}
					>
						Projects
					</button>
					<button
						type="button"
						onClick={handleAbout}
						className={`text-[#fefeff] text-2xl 3xl:text-4xl tracking-wide hover:text-[#6f6f78] duration-[400ms] mx-4 my-2`}
					>
						About
					</button>
					<button
						type="button"
						onClick={handleContact}
						className={`text-[#fefeff] text-2xl 3xl:text-4xl tracking-wide hover:text-[#6f6f78] duration-[400ms] mx-4 my-2`}
					>
						Contact
					</button>
				</div>
			</div>
			<div
				className={`${
					isMenuOpen
						? 'visible opacity-100 duration-500'
						: 'opacity-0 invisible duration-[25ms]'
				} flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#9191AB] to-[#646467] z-10 fixed`}
			>
				<AiOutlineClose
					onClick={handleClose}
					className={
						'text-[#fefeff] absolute left-4 top-2 h-9 w-9 hover:cursor-pointer'
					}
				/>
				<button
					onClick={() => {
						setIsMenuOpen(false);
						handleHome();
					}}
					className={`mb-4 text-5xl xs:text-7xl text-[#fefeff] tracking-wide hover:text-[#4d4d55] duration-[400ms] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}
				>
					Home
				</button>
				<button
					onClick={() => {
						setIsMenuOpen(false);
						handleProject();
					}}
					className={`mb-4 text-5xl  xs:text-7xl text-[#fefeff] tracking-wide duration-[400ms] hover:text-[#4d4d55] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}
				>
					Projects
				</button>
				<button
					onClick={() => {
						setIsMenuOpen(false);
						handleAbout();
					}}
					className={`mb-4 text-5xl  xs:text-7xl text-[#fefeff] tracking-wide duration-[400ms] hover:text-[#4d4d55] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}
				>
					About
				</button>
				<button
					onClick={() => {
						setIsMenuOpen(false);
						handleContact();
					}}
					className={`mb-4 text-5xl  xs:text-7xl text-[#fefeff] tracking-wide hover:text-[#4d4d55] duration-[400ms] ${txt.className} p-3 pt-2 pb-2 3xl:text-9xl`}
				>
					Contact
				</button>
			</div>
		</header>
	);
}
