import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


export default function Contact() {
 
  const [ref, inView] = useInView ({
    threshold: 0.5,
});
 
  return (
    <section className='section px-7 py-20 font-inter bg-[#f2f2f2] dark:bg-[#222222] text-[#222222] dark:text-[#f2f2f2] h-screen ' id='contact' ref={ref}>
    <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0 '>
            <div className='flex '>
                <motion.div
                variants={fadeIn('up', 0.9)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0}}>
                    <h1 className='text-[4rem] md:text-[7.6rem] -ml-1 md:-ml-2'>CONTACT_</h1>
                    <h2 className='text-[1.4rem] md:text-3xl mb-4'>I am looking for an apprenticeship, let's talk !</h2>
                    <p className='mb-6 text-justify max-w-[640px]'> 
                    If you have any questions, comments, or if you are interested in collaborating, please do not hesitate
                     to contact me. I am always happy to meet new people and discuss topics related to computer science and
                    web development. Currently, I am actively seeking an apprenticeship as a developer, but I am also open 
                    to receiving advice from experienced professionals in the field.
                    </p>
                    <div className='grid grid-rows-1 place-items-left lg:grid-cols-3'>
                    <Link to="mailto:alicebergonhe@gmail.com" target="blank" className='cursor-pointer' ><button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                    border border-[#222222] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#222222] hover:text-[#d4d4d4] 
                    hover:bg-[#222222] duration-500 cursor-pointer flex items-center justify-center'>Send Me an Email<span className='flex text-xl justify-center items-center ml-3'><ion-icon name="mail-unread-outline"></ion-icon></span></button></Link> 

                     <Link to="https://github.com/Alicexplore" target="blank" className='cursor-pointer' ><button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                    border border-[#222222] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#222222] hover:text-[#d4d4d4] 
                    hover:bg-[#222222] duration-500 cursor-pointer flex items-center justify-center'>Add Me On Github<span className='flex text-xl justify-center items-center ml-3'><ion-icon name="logo-github"></ion-icon></span></button></Link> 

                    <Link to="https://www.linkedin.com/in/alicebergonhe/" target="blank" className='cursor-pointer' ><button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                    border border-[#222222] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#222222] hover:text-[#d4d4d4] 
                    hover:bg-[#222222] duration-500 cursor-pointer flex items-center justify-center'>Connect On Linkedin<span className='flex text-xl justify-center items-center ml-3'><ion-icon name="logo-github"></ion-icon></span></button></Link>  

                        
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
   
</section>

)
}

