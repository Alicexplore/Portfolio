import React from 'react'
import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn} from '../variants'
import { Link } from 'react-scroll';


const Hero = () => {

    return (
    <section className='section bg-[#f2f2f2] dark:bg-[#222222] text-[#222222] dark:text-[#f2f2f2] min-h-[85vh] lg:min-h[78vh]'>
        <div className='container mx-auto'>
            <div className='flex flex-row'>
                <div className='mb-6'>
                    <motion.div 
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0}}
                    >
                        <h1 className='leading-none font-inter text-5xl mx-6 md:text-8xl lg:text-9xl'>SOFTWARE<br />DEVELOPER_</h1>
                        <div className='font-inter font-light text-lg mx-7 md:text-2xl lg:mx-8 lg:text-2xl'>
                            <h4>Front-End & Design Enthusiast</h4>
                        </div>              
                        <div className='flex items-center -gap-1'>
                            <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className='flex mx-7 lg:mx-8 my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2]  px-4 py-2 text-md rounded-sm 
                            border border-[#222222] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#222222] hover:text-[#d4d4d4] 
                          hover:bg-[#222222] duration-500 cursor-pointer'>Contact Me</button></Link>
                            <a href='https://www.linkedin.com/in/alicebergonhe/' target='blank' className='flex text-[2.9rem] -mx-2 cursor-pointer'><ion-icon name="logo-linkedin"></ion-icon></a>
                            <a href='https://github.com/Alicexplore' target='blank' className='flex text-[2.9rem] mx-5 cursor-pointer'><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </motion.div>
                </div>
                <div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero


// <div className='bg-[#f2f2f2] dark:bg-[#222222] h-[700px] w-full'>
// <div className='grid grid-rows-2 ml-10  text-[#222222] dark:text-[#f2f2f2]'>

//     <div className='mt-56 grid grid-rows-3 md:mt-80'>
//         <h1 className='text-6xl font-inter sm:text-7xl md:text-9xl'>SOFTWARE</h1>
//         <h1 className='-my-4 text-6xl font-inter sm:text-7xl md:text-9xl'>DEVELOPER_</h1>
//         <h4 className='font-inter text-2xl ml-2 -mt-2 font-light'>"The key to performance is simplicity." - Cliff Click</h4>
//     </div>
// </div>
// </div>