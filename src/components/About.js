/** @format */

import React from 'react';

const About = () => {
	return (
		<div>
			<div id='about' className='text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]'>
				Let me tell you a little more about myself
			</div>
			<div className='flex flex-col items-center xl:items-stretch xl:flex-row gap-9 mt-[40px]'>
				<img
                    className='object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[20px]'
					src={require('../assets/photo.jpg')}
					alt=''
				/>
				<div className='bg-[#323443] p-[20px] text-slate-400 rounded-[20px] md:mr-20'>
				Adi Suwandika adalah seorang Food Reviewer berpengalaman dan blogger yang berdedikasi untuk mengungkap kompleksitas budaya kuliner. Dengan lidah yang halus yang terasah melalui tahun-tahun eksplorasi, ia menjelajahi lanskap kuliner yang beragam, mulai dari pasar-pasar jalanan hingga restoran mewah, untuk mengungkapkan rasa paling memikat dan pengalaman bersantap. Misiya adalah tidak hanya untuk menggambarkan hidangan, tetapi untuk membangkitkan emosi dan sensasi yang mereka timbulkan, menjadi panduan melalui kaya akan ragam kuliner global. Melalui ulasan yang teliti dan kisah-kisah, Adi mengundang pembaca untuk bergabung dengannya dalam perjalanan sensori yang merayakan keberagaman dan kekayaan gastronomi, membentuk komunitas para pecinta kuliner yang bersatu oleh cinta mereka terhadap pengalaman bersantap yang luar biasa.
				</div>
			</div>
		</div>
	);
};

export default About;