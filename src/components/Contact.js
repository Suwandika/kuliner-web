import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
    return (
        <div id='contact' className='w-full text-[#FBFBFB]'>
            <div className='flex flex-col '>
                <h1 className='text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]'>
                    Get in Touch
                </h1>
            </div>
            <div className='m-auto p-4  w-full font-ibm '>
                <div className='grid p-4 lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl  bg-[#323443] rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <div className='font-poppins'>
                                <h2 className='py-2 text-white font-bold  text-2xl'>
                                    Suwandika Adkidnawus
                                </h2>
                                <p>Student Of Software Engineering</p>
                                <p className='py-4'>
                                    Saya bersedia untuk menerima pendapat kalian,
                                    Silahkan diperbincangkan.
                                </p>
                            </div>
                            <div>
                                <p className='uppercase pt-8 font-poppins'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <a href=''>
                                        <div className='rounded-full shadow-lg hover:shadow-white bg-gradient-to-br from-[#F83B3B] to-[#06A6F1] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaLinkedinIn className='text-navbar' />
                                        </div>
                                    </a>
                                    <a href=''>
                                        <div className='rounded-full shadow-lg hover:shadow-white bg-gradient-to-br from-[#F83B3B] to-[#06A6F1] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaInstagram className='text-navbar' />
                                        </div>
                                    </a>

                                    <div className='rounded-full shadow-lg hover:shadow-white bg-gradient-to-br from-[#F83B3B] to-[#06A6F1] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineMail className='text-navbar' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-3 w-full h-auto shadow-xl  bg-[#323443] rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form
                                action=''
                                method='POST'
                                encType='multipart/form-data'
                                target='_blank'
                                className='text-black'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 text-white'>Name</label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-slate-300 outline-navbar'
                                            type='text'
                                            name='name'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 text-white'>
                                            Phone Number
                                        </label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-slate-300 outline-navbar'
                                            type='text'
                                            name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-slate-300 outline-navbar'
                                        type='email'
                                        name='email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 outline-navbar border-slate-300'
                                        rows='10'
                                        name='message'></textarea>
                                </div>

                                <button className='w-full p-4 bg-gradient-to-br from-[#F83B3B] to-[#06A6F1] text-navbar  mt-4'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <a href='/#kuliner'>
                        <div>
                            <div className='rounded-full shadow-lg hover:shadow-white bg-gradient-to-br from-[#F83B3B] to-[#06A6F1] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <HiOutlineChevronDoubleUp
                                    className='text-navbar'
                                    size={30}
                                />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Contact;
