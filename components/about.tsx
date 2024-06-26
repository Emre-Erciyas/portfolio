'use client';
import rose from '@/public/Rose.svg';
import Image from 'next/image';
import React, { MutableRefObject } from 'react';

interface Props {
	aboutRef: MutableRefObject<null>;
}

export default function About(props: Props) {
	const [areVisible, setAreVisible] = React.useState([false, false]);
	const ref1 = React.useRef(null);
	const ref2 = React.useRef(null);
	React.useEffect(() => {
		let observerRefValue1: MutableRefObject<HTMLDivElement> | null;
		let observerRefValue2: MutableRefObject<HTMLDivElement> | null;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setAreVisible((prev) => {
							const arr = [...prev];
							if (entry.target.getAttribute('data-id')) {
								arr[parseInt(entry.target.getAttribute('data-id')!)] = true;
							}
							return arr;
						});
					} else {
						setAreVisible((prev) => {
							const arr = [...prev];
							if (entry.target.getAttribute('data-id')) {
								arr[parseInt(entry.target.getAttribute('data-id')!)] = false;
							}
							return arr;
						});
					}
				});
			},
			{
				threshold: 0.6,
			}
		);

		if (ref1.current) {
			observer.observe(ref1.current);
			observerRefValue1 = ref1.current;
		}
		if (ref2.current) {
			observer.observe(ref2.current);
			observerRefValue1 = ref2.current;
		}
		return () => {
			if (observerRefValue1 && observerRefValue1.current) {
				observer.unobserve(observerRefValue1.current);
			}
			if (observerRefValue2 && observerRefValue2.current) {
				observer.unobserve(observerRefValue2.current);
			}
		};
	}, []);
	return (
		<div
			ref={props.aboutRef}
			className="flex flex-col lg:flex-row justify-around items-center h-screen w-full bg-gradient-to-br from-[#2B2B33] to-[#3e3e48] m-0"
		>
			<article
				data-id="0"
				ref={ref1}
				className={`${
					areVisible[0] ? 'opacity-100' : 'opacity-0'
				} duration-1000 m-12 flex flex-col justify-center items-center lg:items-start max-w-[80%] md:max-w-[70%] lg:max-w-[45%]`}
			>
				<h1
					className={`text-[#fefeff] text-3xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-9xl p-4 3xl:p-10 tracking-wide`}
				>
					About me
				</h1>

				<p
					className={`text-[#B1B1BD] sm:text-xl md:text-2xl xl:text-3xl 3xl:text-5xl p-1 md:p-4 3xl:p-10 break-words tracking-wide italic`}
				>
					I am Emre Erciyas, a{' '}
					<span className="italic">Full-stack Web Developer</span> with a
					Computer Science degree from Bilkent University. I love keeping up
					with the latest tech and creating efficient solutions through
					technology, always ready to tackle challenges with a strategic and
					analytical approach.
				</p>
			</article>
			<div>
				<Image
					data-id="1"
					ref={ref2}
					src={rose}
					alt="rose"
					className={`${
						areVisible[1] ? 'opacity-100' : 'opacity-0'
					} duration-1000 h-[160px] w-[102px] md:h-[200px] md:w-[140px] lg:h-[300px] lg:w-[210px] 3xl:h-[500px] 3xl:w-[350px]`}
				/>
			</div>
		</div>
	);
}
