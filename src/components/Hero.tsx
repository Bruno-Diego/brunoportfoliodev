'use client'
import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`relative flex flex-column w-full h-screen mx-auto overflow-hidden`}>
        <div
            // className={`absolute inset-0 top-[120px] max-w-7xl mx-5 flex flex-row items-start gap-5`}
            className={`inset-0 top-[120px] max-w-7xl mx-5 flex flex-row  gap-5`}
        >
            {/* <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-white' />
                <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div> */}

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white font-extrabold text-6xl mx-auto'>
                    <span className="ease-in">DEDICATED TO THE ESSENCE OF YOUR ONLINE PRESENCE</span>
                </h1>
            </div>
        </div>
                
        <div className='absolute xs:bottom-3 bottom-32 w-full flex justify-center items-center gap-5 z-45 px-5 py-5'>
            {/* Make the message stand out */}
            <a href='#about'>
                <p className='flex flex-row justify-center items-center gap-5 mb-2'>
                    <span className='text-white text-2xl uppercase font-bold cursor-pointer ease-in hover:scale-110 duration-300 transition-all hover:rounded-lg hover:outline hover:outline-4 hover:outline-white outline-none'>
                        UNDER CONSTRUCTION
                    </span>
                </p>
                <div className='w-[35px] h-[64px]  flex justify-center items-start p-2 mx-auto'>
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className='w-3 h-3 rounded-full bg-white mb-1'
                    />
                </div>
            </a>
        </div>
    </section>
  )
}

export default Hero;