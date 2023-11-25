import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion';
import { fadeIn } from '../variants'

export default function Projects() {

    const [ref, inView] = useInView ({
        threshold: 0.5,
    });

    const controls = useAnimation();
    const videoRef = useRef(null);
  
    const handleHoverStart = () => {
      controls.start({ opacity: 1, scale: 1.05 });
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
  
    const handleHoverEnd = () => {
      controls.start({ opacity: 1, scale: 1 });
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };

  return (

    <div className='section px-7 py-20  bg-[#f2f2f2] dark:bg-[#222222] text-[#2e2e2d] dark:text-[#f2f2f2] h-auto' id='projects' ref={ref}>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2'>
            <div className='grid grid-cols-1'>
            <motion.div
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0}}
                className='flex-1 '>
                <h1 className='text-[4rem] md:text-[7.6rem] -ml-1 md:-ml-2 -mt-8 font-medium text-left'>WORKS</h1>
                </motion.div>
                </div> 
                <div className='grid grid-cols-1'>
                <motion.div
                    variants={fadeIn('up', 0.9)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0}}
                    className='flex-1 mt-4'>
                        <div className='flex flex-row gap-20 mb-14'>
                            <h1 className='text-right'>I CREATE APPEALING INTERFACES<br />THAT USERS LOVE TO INTERACT WITH.</h1> 
                            <h1>02.</h1> 
                        </div> 
                </motion.div> 
                </div>    
                {/* <span className='font-normal'> ↓</span> */}
            </div>  
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 mt-24'>
                    <motion.div
                    variants={fadeIn('right', 0.9)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0}}
                    className='flex-1 '> 
                    {/* <video src='./videos/broccoli.mp4'></video>   */}
                    <Link to="https://github.com/Alicexplore/The_Famiglia_Project" target="blank" className='cursor-pointer' >
                        <img className='w-full h-[300px] object-cover hover:scale-105 duration-500 rounded-md' 
                        src="./images/monika-grabkowska-i14VzlCp-Eo-unsplash (1).jpg" alt="salad" /></Link>
                    </motion.div>
                    <div className='border-r border-[#222222] h-[300px]'></div>
                    <div className='flex-1 place-items-center justify-center'>
                        <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0}}>
                            <h1 className='text-[4rem] md:text-[6.5rem] -ml-1 md:-ml-2 -mt-7'>FAMIGLIA</h1>
                            <h2 className='text-[1.2rem] md:text-2xl mb-4 -mt-4'>Vegan Restaurant</h2>
                            <p className='mb-6 text-justify text-lg font-light'> 
                            Front-End project of a vegan restaurant <br />
                            Build with React and Tailwind<br />
                            Designed and developed
                            </p>
                            <Link to="https://github.com/Alicexplore/The_Famiglia_Project" target="blank" className='cursor-pointer' ><button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                            border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                            hover:bg-[#222222] duration-500 cursor-pointer flex items-center justify-center'>See On Github <span className='flex text-xl justify-center items-center ml-3'><ion-icon name="logo-github"></ion-icon></span></button></Link> 
                        </motion.div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 mt-36'>
                    <motion.div
                    variants={fadeIn('right', 0.9)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0}}
                    className='flex-1 '>
                    <Link to="https://github.com/Alicexplore/The_Sneakers_Project" target="blank" className='cursor-pointer'>
                    <img className='w-full h-[300px] object-cover hover:scale-105 duration-500 rounded-md' src="./images/xavier-teo-SxAXphIPWeg-unsplash.jpg" alt="" /></Link>
                    </motion.div>
                    <div className='border-r border-[#222222] h-[300px]'></div>
                    <div className='flex-1 place-items-center justify-center'>
                        <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0}}>
                            <h1 className='text-[4rem] md:text-[6.5rem] -ml-1 md:-ml-2 -mt-7'>SNEAKERS</h1>
                            <h2 className='text-[1.2rem] md:text-2xl mb-4 -mt-4'>Blog Community About Sneakers</h2>
                            <p className='mb-6 text-justify text-lg font-light'> 
                            Front-End project for a blog community about sneakers<br />
                            Build with React and Tailwind<br />
                            Designed and developed
                            </p>
                            <Link to="https://github.com/Alicexplore/The_Sneakers_Project" target="blank" ><button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                            border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                            hover:bg-[#222222] duration-500 cursor-pointer flex items-center justify-center'>See On Github <span className='flex text-xl justify-center items-center ml-3'><ion-icon name="logo-github"></ion-icon></span></button></Link> 
                        </motion.div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 mt-36'>
                    <motion.div
                    variants={fadeIn('right', 0.9)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0}}
                    className='flex-1 '>
                    <Link to="https://github.com/Alicexplore/The_Photo_Project" target="blank" className='cursor-pointer'><img className='w-full h-[300px] object-cover hover:scale-105 duration-500 rounded-md' src="./images/lisa-vanthournout-jezQ2hqsWHc-unsplash.jpg" alt="" /></Link>
                    </motion.div>
                    <div className='border-r border-[#222222] h-[300px]'></div>
                    <div className='flex-1 place-items-center justify-center'>
                        <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0}}>
                            <h1 className='text-[4rem] md:text-[6.5rem] -ml-1 md:-ml-2 -mt-7'>TRAVELS</h1>
                            <h2 className='text-[1.2rem] md:text-2xl mb-4 -mt-4'>Photo Game to find your next journey.</h2>
                            <p className='mb-6 text-justify'> 
                            "The Photo Project" is a small game App to find your next travel destination by selecting your favourites
                            photographs, the ones you love will lead you to your next journey.
                            </p>
                            <Link to="https://github.com/Alicexplore/The_Photo_Project" target="blank" ><button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                            border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                            hover:bg-[#222222] duration-500 cursor-pointer flex items-center justify-center'>See On Github <span className='flex text-xl justify-center items-center ml-3'><ion-icon name="logo-github"></ion-icon></span></button></Link> 
                        </motion.div>
                    </div>
                </div>
        </div>
    </div>
    


    )
}











    


                