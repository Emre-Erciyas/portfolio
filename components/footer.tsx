'use client';
import { EB_Garamond } from 'next/font/google';
import { MutableRefObject, useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from 'react-icons/ai';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const garamond = EB_Garamond({ weight: '400', subsets: ['latin'] });

interface Props {
	contactRef: MutableRefObject<null>;
}

export default function Footer(props: Props) {
	const formRef = useRef(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		let observerRefValue: MutableRefObject<HTMLDivElement> | null = null;
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				threshold: 0.6,
			}
		);

		if (formRef.current) {
			observer.observe(formRef.current);
			observerRefValue = formRef.current;
		}

		return () => {
			if (observerRefValue && observerRefValue.current) {
				observer.unobserve(observerRefValue.current);
			}
		};
	}, []);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		try {
			emailjs.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID!,
				process.env.NEXT_PUBLIC_TEMPLATE_ID!,
				formRef.current!,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			);
			setName('');
			setEmail('');
			setMessage('');
			toast.success('Success', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		}
	}

	return (
		<footer
			ref={props.contactRef}
			className={`relative w-full bg-gradient-to-br to-[#B1B1BD] from-[#fefeff] m-0 flex flex-col justify-center ${garamond.className}`}
		>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className={`${
					isVisible ? 'opacity-100' : 'opacity-0'
				} duration-1000 flex flex-col justify-center items-center`}
			>
				<h1
					className={`text-[#2B2B33] text-3xl lg:text-4xl xl:text-5xl 3xl:text-7xl my-10 3xl:my-14`}
				>
					Contact me
				</h1>
				<div className="flex flex-col justify-center items-center">
					<div className="w-[90vw] xs:w-80 sm:w-[25rem] 3xl:w-[40rem] flex flex-col  xs:flex-row xs:justify-between xs:items-center my-2">
						<label
							className={`text-[#2B2B33] text-base sm:text-xl 3xl:text-4xl italic`}
						>
							Name:{' '}
						</label>
						<input
							placeholder="name"
							name="name"
							maxLength={16}
							minLength={3}
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							className={`mt-2 xs:m-3 shadow-sm border 3xl:text-4xl 3xl:w-96 border-black overflow-hidden w-full xs:w-52 italic rounded`}
						/>
					</div>
					<div className=" w-[90vw] xs:w-80 sm:w-[25rem] 3xl:w-[40rem] my-4 flex flex-col  xs:flex-row xs:justify-between xs:items-center">
						<label
							className={`text-[#2B2B33] text-base sm:text-xl 3xl:text-4xl italic`}
						>
							Email:{' '}
						</label>
						<input
							placeholder="email"
							name="email"
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mt-2 xs:m-3 shadow-sm border 3xl:text-4xl 3xl:w-96 border-black w-full xs:w-52 italic rounded "
						/>
					</div>
					<div className="w-[90vw] xs:w-80 sm:w-[25rem] 3xl:w-[40rem] flex flex-col  xs:flex-row xs:justify-between mt-4 mb-10 h-24">
						<label
							className={`text-[#2B2B33] text-base sm:text-xl 3xl:text-4xl italic`}
						>
							Message:{' '}
						</label>
						<textarea
							placeholder="message"
							name="message"
							minLength={10}
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="mt-2 xs:mt-0 xs:mr-3 3xl:text-4xl shadow-sm border border-black w-full xs:w-52 3xl:w-96 h-full italic rounded"
						/>
					</div>
				</div>
				<button
					type="submit"
					className={`text-[#fefeff] mb-24 mt-6 font-bold bg-[#2B2B33] py-2 px-8 rounded`}
				>
					Send
				</button>
			</form>
			<div className="relative w-full bg-[#494954] h-24 3xl:h-40 md:h-24 flex flex-col xs:flex-row justify-center xs:justify-start items-center">
				<h1 className="text-[#fefeff] text-xs xs:text-base md:text-xl 3xl:text-3xl xs:ml-10 md:ml-14 tracking-wide">
					Copyright © 2023. All rights are reserved
				</h1>
				<div className="flex xs:absolute xs:right-5 3xl:right-10 mt-4 xs:mt-0">
					<Link href={'https://www.linkedin.com/in/emreerciyas/'}>
						<AiFillLinkedin className="text-[#fefeff] hover:text-[#B1B1BD] duration-[400ms] h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 3xl:w-24 3xl:h-24 mr-4 md:mr-8 ml-0.5" />
					</Link>
					<Link href={'https://github.com/Emre-Erciyas'}>
						<AiFillGithub className="text-[#fefeff] hover:text-[#B1B1BD] duration-[400ms] h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 mr-4 md:mr-8 3xl:w-24 3xl:h-24" />
					</Link>
					<Link
						href={
							'https://drive.google.com/file/d/1N_wdWPVutX7_2lnRcXygPCXcESfcuI-4/view?usp=sharing'
						}
					>
						<AiFillFilePdf className="text-[#fefeff] hover:text-[#B1B1BD] duration-[400ms] h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 3xl:w-24 3xl:h-24" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
