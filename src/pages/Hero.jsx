import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { fadeIn} from '../variants'
import MouseFollow from "./MouseFollow";

const Hero = () => {

     // State variable to track the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const isMobileMode = () => {
    return windowWidth <= 768;
  };

    return (
    
        <div> 
        {!isMobileMode() && <MouseFollow />} 
        <section className='section bg-[#f2f2f2] dark:bg-[#222222] text-[#222222] dark:text-[#f2f2f2] h-[400px]'> 
        <div className='container mx-auto'>           
            <div className='flex flex-row mt-32'>
                <div className=''>
                    <motion.div 
                      variants={fadeIn('up', 0.1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true, amount: 0}}
                      >
                        <h1 className='leading-none font-inter tracking-tight font-medium text-5xl mx-6 md:text-8xl lg:text-9xl'>FRONTEND</h1>           
                    </motion.div>
                    <motion.div 
                      variants={fadeIn('up', 0.4)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true, amount: 0}}
                      >
                        <h1 className='leading-none font-inter tracking-tight font-medium text-5xl mx-6 md:text-8xl lg:text-9xl'>DEVELOPER</h1>           
                    </motion.div>
                    <motion.div 
                      variants={fadeIn('up', 0.6)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true, amount: 0}}
                      >
                        <div className='font-inter font-light tracking-tight mt-4 text-lg mx-7 md:text-2xl lg:mx-8 lg:text-2xl'>
                      <h4>Code Passionate | Design Enthusiast</h4>
                    </div>
                    </motion.div>  
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero;
