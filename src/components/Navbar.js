import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 100) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	const handleNavClick = () => {
		setNav(!nav);
	};

	return (
		<div
			className={`${
				shadow ? 'shadow-xl shadow-slate-900' : ''
			} fixed right-0 px-[30px] md:px-[100px] bg-black-2 h-[70px] md:h-[100px] w-full z-[1000]  flex items-center justify-between text-white`}>
			<div className='font-Pacifico font-bold text-[24px]'>Akidnafood</div>
			<ul
				className={`md:flex gap-2 md:items-center md:pb-0 pb-12 px-[30px] absolute md:static md:z-auto bg-black-2 z-[100] left-0 w-full md:w-auto  transition-all duration-300 ease-in ${
					nav ? 'top-[70px]' : 'top-[-490px]'
				}`}>
				<li className='bg-gradient-to-r from-rose-500 to-cyan-500 hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<Link to='home' smooth={true} duration={500}>Home</Link>
				</li>
				<li className='bg-gradient-to-r from-rose-500 to-cyan-500 hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<Link to='menu' smooth={true} duration={500}>Menu</Link>
				</li>
				<li className='bg-gradient-to-r from-rose-500 to-cyan-500 hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<Link to='about' smooth={true} duration={500}>About</Link>
				</li>
				<li className='bg-gradient-to-r from-rose-500 to-cyan-500 hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<Link to='contact' smooth={true} duration={500}>Contact</Link>
				</li>
			</ul>
			<div
				className='flex xl:hidden text-2xl font-bold '
				onClick={handleNavClick}>
				{!nav ? <AiOutlineMenu /> : <IoClose />}
			</div>
		</div>
	);
};

export default Navbar;
	