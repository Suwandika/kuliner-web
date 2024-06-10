import React from 'react';
import { facebook, globe, instagram, twitter } from '../assets/svg/svg';

const Home = () => {
    return (
        <div id='home' className='md:py-[30px] py-[30px] flex flex-col gap-63px'>
            <div className='font-sora font-bold md:text-[56px] text-[24px] md:leading-[72px] md:tracking-[1px] w-full md:w-[80%] bg-gradient-to-r from-rose-500 to-cyan-500 text-transparent bg-clip-text'>
                Semanis Madu, Sehangat kain Wool, aku akan bikin kalian berkata jujur,
                Aku Akidnawus
            </div>

            <div className='flex flex-col md:flex-row gap-[30px] mt-[35px] md:mt-[69px]'>
                <div className='flex-[2]'>
                    <div className='text-[15px] md:text-[28px] font-sora text-[#FBFBFB] md:leading-[72px]'>
                        What I do
                    </div>
                    <div className='text-[10px] md:text-[18px] text-[#d6d6d6] '>
                    Adi Suwandika adalah seorang Food Reviewer dan blogger yang mencicipi dan mengevaluasi makanan, serta membuat dan membagikan konten daring tentang pengalaman kuliner kepada pembaca.
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center md:justify-normal md:flex-row gap-[30px]  flex-[3]'>
                    <div className='relative flex flex-col justify-center items-center px-3 pt-8 pb-4 w-[262px] bg-[#323443] rounded-[12px] mt-[36px] md:mt-0 hover:scale-110 ease-in-out duration-300'>
                        <div className='absolute top-[-36px] p-[1px] rounded-full bg-gradient-to-r from-rose-500 to-cyan-500'>
                            <div className='bg-[#3A3636] p-[17px] rounded-full'>{globe}</div>
                        </div>
                        <div className='font-sora text-white text-[16px] font-semibold leading-[72px] tracking-[1px]'>
                            Riviewer
                        </div>
                        <div className='text-slate-400 text-[14px] tracking-[1px] leading-6'>
                            Reviewer makanan mencicipi dan menilai hidangan dari restoran untuk memberikan ulasan kepada masyarakat.
                        </div>
                    </div>
                    <div className='relative flex flex-col justify-center items-center px-3 pt-8 pb-4 w-[262px] bg-[#323443] rounded-[12px] mt-[36px] md:mt-0 hover:scale-110 ease-in-out duration-300'>
                        <div className='absolute top-[-36px] p-[1px] rounded-full bg-gradient-to-r from-rose-500 to-cyan-500'>
                            <div className='bg-[#3A3636] p-[17px] rounded-full'>{globe}</div>
                        </div>
                        <div className='font-sora text-white text-[16px] font-semibold leading-[72px] tracking-[1px]'>
                            Blogger
                        </div>
                        <div className='text-slate-400 text-[14px] tracking-[1px] leading-6'>
                            Blogger membuat dan membagikan konten daring untuk memberi informasi atau hiburan kepada pembaca mereka.
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row mt-[35px] md:mt-[45px]'>
                <div className='flex md:items-start items-center justify-center md:justify-normal gap-3'>
                    <div className='md:w-[157px] md:h-[157px] w-[50px] h-[50px] rounded-full bg-gradient-to-r from-rose-500 to-cyan-500 flex justify-center items-center'>
                        <div className='md:w-[155px] md:h-[155px] w-[49px] h-[49px]  rounded-full bg-[#3A3636]'>
                            <img
                                src={require('../assets/photo.jpg')}
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='flex flex-col ml-2 md:ml-9 mr-5 flex-1 max-w-[499px] '>
                        <div className='text-[15px] md:text-[28px] font-sora text-[#FBFBFB] md:leading-[72px]'>
                            Life goals
                        </div>
                        <div className='text-[10px] md:text-[18px] text-[#d6d6d6] '>
                            Membangun reputasi sebagai sumber terpercaya untuk mereview dan mendokumentasikan kekayaan kuliner lokal.
                        </div>
                    </div>
                </div>
                <div className='mt-[35px] md:mt-0 md:ml-[86px] flex flex-col gap-3'>
                    <div className='text-[15px] md:text-[28px] font-sora text-[#FBFBFB] md:leading-[72px]'>
                        Lets Connect
                    </div>
                    <div className='flex gap-[17px]'>
                        <div className='hover:scale-[150%] ease-in-out duration-300 cursor-pointer'>
                            {instagram}
                        </div>
                        <div className='hover:scale-[150%] ease-in-out duration-300 cursor-pointer'>
                            {twitter}
                        </div>
                        <div className='hover:scale-[150%] ease-in-out duration-300 cursor-pointer'>
                            {facebook}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;