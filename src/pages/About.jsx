import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const About = () => {

    const [ref, inView] = useInView ({
        threshold: 0.5,
    });

    return (
        <section className='section px-7 py-20 font-inter bg-[#f2f2f2] dark:bg-[#222222] text-[#2e2e2d] dark:text-[#f2f2f2] h-auto' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
                    <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0}}
                    className='flex-1 bg-about bg-contain bg-no-repeat bg-top'>
                        <img className='' src="./img/linkedinlogo.png" alt="Alice's Desk" width={800}/>
                        {/* <img src="./img/desk.png" alt="Alice's Desk" width={600}/> */}
                    </motion.div>
                    <div className='flex-1'>
                        <motion.div
                        variants={fadeIn('up', 0.9)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0}}>
                            <h1 className='text-[4rem] md:text-[7.6rem] -ml-1 md:-ml-2'>HI_</h1>
                            <h2 className='text-[1.4rem] md:text-3xl mb-4'>I am a Front-End Developer  
                            student with a passion for Web Design.</h2>
                            <p className='mb-6 text-justify'> 
                            Welcome to my website! As someone who has always been interested in the intersection between design and technology, I believe that 
                            front-end development is the perfect fit for my skillset and interests. I'm passionate about creating intuitive, 
                            visually appealing interfaces that users love to interact with. With my strong design background and desire to learn,
                            I would be eager to grow and develop my skills alongside a team of experienced professionals.
                            </p>
                            <div className='flex items-center place-content-center justify-center'>
                                <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className=' my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text lg:text-md rounded-sm 
                                border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                              hover:bg-[#222222] duration-500 cursor-pointer'>Contact Me</button></Link>
                                <a href="https://drive.google.com/file/d/1CEtNgne0fBz7KuN5DUPeKhHWSy8qILeQ/view?usp=share_link" target="blank" ><button className='mx-7 lg:mx-8 my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-md rounded-sm 
                                border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                              hover:bg-[#222222] duration-500 cursor-pointer'>My Resume</button></a> 
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
           
        </section>

  )
}

export default About


