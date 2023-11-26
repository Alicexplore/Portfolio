import React from 'react';
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

export default function Projects() {

    const [ref, inView] = useInView ({
        threshold: 0.5,
    });

  return (

    <div className='px-20 py-20 bg-[#f2f2f2] dark:bg-[#222222] text-[#2e2e2d] dark:text-[#f2f2f2] h-auto' id='projects' ref={ref}>
        <div className='grid grid-cols-2'>
            <div className='grid grid-cols-1 leading-tight'>
                {/* <motion.div
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}
                className='flex-1'> */}
                <h1 className='text-[4rem] md:text-[7.6rem] -mt-8 font-medium text-left md:ml-4'>WORKS</h1>
                {/* </motion.div> */}
            </div> 
            <div className='grid grid-cols-1'> 
                <motion.div
                variants={fadeIn('left', 0.9)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0}}
                className='flex-1'>
                    <div className='flex flex-row gap-12 mb-14'>
                        <h1 className='text-md'>02 /</h1> 
                        <h1 className='text-left text-md'>PROJECTS I AM CURRENTLY WORKING ON
                        <br />TAKE A LOOK TO THE <span className='hover:text-[#565656] hover:duration-700 hover:ease-in-out'>
                        <a href="http://https://github.com/Alicexplore.com">GITHUB REPOSITS</a></span></h1> 
                    </div> 
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
                    <Link to="https://github.com/Alicexplore/The_Famiglia_Project" target="blank">
                    <div className='cont'>
                        <div className="boxy">
                            <img src="./images/1.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/2.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/3.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/2.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/1.png"/>
                        </div>
                    </div>
                    </Link>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0}}>
                        <div className='border-r h-[300px] border-[#222222] dark:border-[#f2f2f2]'></div>
                        </motion.div>
                    <div className='flex-1 place-items-center justify-center'>
                        <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0}}>
                            <h1 className='text-[4rem] md:text-[6rem] -ml-1 md:-ml-2 -mt-7'>I. FAMIGLIA</h1>
                            <h2 className='text-[1.2rem] md:text-2xl mb-4 -mt-4'>Vegan Restaurant</h2>
                            <p className='py-4 text-justify text-md font-light'> 
                            Designed and developed, built with React and Tailwind<br />
                            Personnal work realized during studies in January 2023
                            </p>
                            <Link to="https://github.com/Alicexplore/The_Famiglia_Project" target="blank">
                            <button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                            border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#f2f2f2] dark:hover:bg-[#222222] dark:hover:border-[#f2f2f2] 
                            bg-[#2e2e2d] hover:text-[#222222] hover:bg-[#f2f2f2] hover:border-[#222222] duration-700 cursor-pointer flex items-center justify-center
                            transition-all'>Discover on GitHub<span className='flex text-xl justify-center items-center ml-3 hover:text-[#222222] dark:hover:text-[#f2f2f2]'>
                            <ion-icon name="logo-github"></ion-icon></span></button></Link> 
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
                    <Link to="https://github.com/Alicexplore/The_Sneakers_Project" target="blank">
                    <div className='cont'>
                        <div className="boxy">
                            <img src="./images/4.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/5.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/6.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/5.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/4.png"/>
                        </div>
                    </div>
                    </Link>
                    </motion.div>
                    <div className='border-r h-[300px] border-[#222222] dark:border-[#f2f2f2]'></div>
                    <div className='flex-1 place-items-center justify-center'>
                        <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0}}>
                            <h1 className='text-[4rem] md:text-[6rem] -ml-1 md:-ml-2 -mt-7'>II. SNEAKS</h1>
                            <h2 className='text-[1.2rem] md:text-2xl mb-4 -mt-4'>Blog Community About Sneakers</h2>
                            <p className='py-4 text-justify text-lg font-light'> 
                            Built with React and Tailwind<br />
                            Designed and developed
                            </p>
                            <Link to="https://github.com/Alicexplore/The_Sneakers_Project" target="blank">
                            <button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                            border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#f2f2f2] dark:hover:bg-[#222222] dark:hover:border-[#f2f2f2] 
                            bg-[#2e2e2d] hover:text-[#222222] hover:bg-[#f2f2f2] hover:border-[#222222] duration-700 cursor-pointer flex items-center justify-center
                            transition-all'>Discover on GitHub<span className='flex text-xl justify-center items-center ml-3 hover:text-[#222222] dark:hover:text-[#f2f2f2]'>
                            <ion-icon name="logo-github"></ion-icon></span></button></Link> 
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
                    <Link to="https://github.com/Alicexplore/The_Homs_Project" target="blank">
                    <div className='cont'>
                        <div className="boxy">
                            <img src="./images/10.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/11.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/12.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/13.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/14.png"/>
                        </div>
                    </div>
                    </Link>
                    </motion.div>
                    <div className='border-r h-[300px] border-[#222222] dark:border-[#f2f2f2]'></div>
                    <div className='flex-1 place-items-center justify-center'>
                        <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0}}>
                            <h1 className='text-[4rem] md:text-[6rem] -ml-1 md:-ml-2 -mt-7'>III. HÖMS</h1>
                            <h2 className='text-[1.2rem] md:text-2xl mb-4 -mt-4'>Elegant Homemade Ceramics</h2>
                            <p className='py-4 text-justify text-lg font-light'> 
                            Built with Ember and Saas<br />
                            Designed and developed
                            </p>
                            <Link to="https://github.com/Alicexplore/The_Homs_Project" target="blank">
                            <button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                            border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#f2f2f2] dark:hover:bg-[#222222] dark:hover:border-[#f2f2f2] 
                            bg-[#2e2e2d] hover:text-[#222222] hover:bg-[#f2f2f2] hover:border-[#222222] duration-700 cursor-pointer flex items-center justify-center
                            transition-all'>Discover on GitHub<span className='flex text-xl justify-center items-center ml-3 hover:text-[#222222] dark:hover:text-[#f2f2f2]'>
                            <ion-icon name="logo-github"></ion-icon></span></button></Link> 
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
                    <Link to="https://github.com/Alicexplore/The_Photo_Project" target="blank">
                    <div className='cont'>
                        <div className="boxy">
                            <img src="./images/7.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/8.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/9.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/8.png"/>
                        </div>
                        <div className="boxy">
                            <img src="./images/7.png"/>
                        </div>
                    </div>
                    </Link>
                    </motion.div>
                    <div className='border-r h-[300px] border-[#222222] dark:border-[#f2f2f2]'></div>
                    <div className='flex-1 place-items-center justify-center'>
                        <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0}}>
                            <h1 className='text-[4rem] md:text-[6.5rem] -ml-1 md:-ml-2 -mt-7'>IV. TRAVELS</h1>
                            <h2 className='text-[1.2rem] md:text-2xl mb-4 -mt-4'>Photo Game to find your next journey</h2>
                            <p className='py-4 text-justify text-lg font-light'> 
                            Built with Js and CSS<br />
                            Designed and developed
                            </p>
                            <Link to="https://github.com/Alicexplore/The_Photo_Project" target="blank">
                            <button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                            border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#f2f2f2] dark:hover:bg-[#222222] dark:hover:border-[#f2f2f2] 
                            bg-[#2e2e2d] hover:text-[#222222] hover:bg-[#f2f2f2] hover:border-[#222222] duration-700 cursor-pointer flex items-center justify-center
                            transition-all'>Discover on GitHub<span className='flex text-xl justify-center items-center ml-3 hover:text-[#222222] dark:hover:text-[#f2f2f2]'>
                            <ion-icon name="logo-github"></ion-icon></span></button></Link> 
                        </motion.div>
                    </div>
                </div>         
        </div>
    )
}


{/* <div className='cont'>
                        <div className="boxy relative group overflow-hidden transition-all duration-3000">
                            <img src="./images/7.png" alt="Your Image" className="w-full h-full object-cover" />
                            <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-3000 flex items-center justify-center text-[#f2f2f2]">
                                <p className='text-4xl'><ion-icon name="logo-github"></ion-icon></p>
                            </div>
                        </div>
                        <div className="boxy relative group overflow-hidden transition-all duration-3000">
                            <img src="./images/8.png" alt="Your Image" className="w-full h-full object-cover" />
                            <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-3000 flex items-center justify-center text-[#f2f2f2]">
                                <p className='text-4xl'><ion-icon name="logo-github"></ion-icon></p>
                            </div>
                        </div>
                        <div className="boxy relative group overflow-hidden transition-all duration-3000">
                            <img src="./images/9.png" alt="Your Image" className="w-full h-full object-cover" />
                            <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-3000 flex items-center justify-center text-[#f2f2f2]">
                                <p className='text-4xl'><ion-icon name="logo-github"></ion-icon></p>
                            </div>
                        </div>
                    </div> */}

                     {/* <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0}}
                    className='flex-1'>
                    <div className='h-[4px] w-[420px] bg-[#222222] dark:bg-[#f2f2f2]'></div> 
                    </motion.div> */}











    


                