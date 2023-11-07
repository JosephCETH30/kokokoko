import React from 'react'
// import HeroImage from '../assets/HeroImage.png';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => { 
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl text-white font-bold'>
                    I'm a Front End Web Developer 
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 2 years of experience building and designing Website.
                    Currently, I love to work on Web Development using Tech like Javascript, Next JS, CSS.
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={19} className='ml-1' /></span>
                        
                    </button>
                </div>
            </div>

            <div>
                {/* YOUR IMAGE IS ERROR FUCKTARDS */}
                {/* <img src="{HeroImage}" alt="my picture" className='rounded-2xl mx-auto w-2/3 md:w-full'/> */}
            </div>
        </div>
    </div>
  )
}

export default Home;