'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { MutableRefObject } from 'react';
import { IconType } from 'react-icons/lib';
import { HiOutlineExternalLink } from 'react-icons/hi';

interface Props {
	staticIMG: StaticImageData;
	name: String;
	description: String;
	stack: IconType[];
	isLive: boolean;
	source: string;
	live: string;
}

export default function Project(props: Props) {
	const [isVisible, setIsVisible] = React.useState(false);
	const ref = React.useRef(null);
	React.useEffect(() => {
		let observerRefValue: MutableRefObject<HTMLDivElement> | null = null;
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				threshold: 0.6,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
			observerRefValue = ref.current;
		}

		return () => {
			if (observerRefValue && observerRefValue.current) {
				observer.unobserve(observerRefValue.current);
			}
		};
	}, []);
	React.useEffect(() => {});
	return (
		<div
			ref={ref}
			className={`${
				isVisible ? 'opacity-100' : 'opacity-0'
			} duration-1000 relative w-[95%] md:h-[400px] xl:h-[440px] xl:w-3/4 bg-[#e5e5ee] my-3 md:my-5 rounded-lg shadow-lg md:ml-5 xl:ml-[10%] flex flex-col items-center md:flex-row`}
		>
			<Link
				className="relative rounded-lg md:m-5 mt-5  md:mr-0 w-[95%] md:max-w-[min(480px,_60%)] lg:max-w-[min(560px,_60%)] xl:max-w-[min(600px,_60%)] overflow-hidden"
				href={props.source}
			>
				<img className="w-full" src={props.staticIMG.src} alt="Project Image" />
			</Link>
			<div className="relative flex flex-col md:w-1/2 3xl:w-full items-center mx-3 md:h-[400px] xl:h-[440px]">
				<h1 className={`mt-5 text-[#2B2B33] text-xl xl:text-3xl 3xl:text-5xl`}>
					{props.name}
				</h1>
				<p
					className={`mt-3 3xl:mt-6 mx-3 xs:mx-6 md:mx-3 xl:mx-6 text-[#68687A] 3xl:text-3xl tracking-wide italic text-sm lg:text-lg xl:text-base`}
				>
					{props.description}
				</p>
				<div className="flex justify-center w-full mt-6 mb-24 xl:mt-8 3xl:mt-10 xl:mb-28 2xl:mb-40">
					{props.stack.map((Element: IconType, index) => {
						return (
							<Element
								key={index}
								className=" text-4xl 3xl:text-6xl text-[#2B2B33] hover:text-[#5e5e68] duration-[400ms] mx-5"
							/>
						);
					})}
				</div>
				<div
					className={`w-full flex absolute bottom-4 md:bottom-8 justify-around`}
				>
					<Link
						href={props.source}
						className="flex items-center xl:text-base text-sm 3xl:text-2xl bg-[#B1B1BD] hover:bg-[#9999a3] active:bg-[#83838f] duration-[400ms] py-2 px-4 3xl:py-4 3xl:px-8 rounded tracking-wide shadow-sm"
					>
						Source Code {<HiOutlineExternalLink className="ml-1" />}
					</Link>
					<Link
						href={props.live}
						className={`flex items-center xl:text-base text-sm 3xl:text-2xl bg-[#B1B1BD] hover:bg-[#9999a3] active:bg-[#83838f] duration-[400ms] py-2 px-4 3xl:py-4 3xl:px-8 rounded tracking-wide shadow-sm ${
							!props.isLive && 'hidden'
						}`}
					>
						Demo {<HiOutlineExternalLink className="ml-1" />}
					</Link>
				</div>
			</div>
		</div>
	);
}
