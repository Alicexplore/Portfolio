import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { fadeIn} from '../variants'
import { Link } from 'react-scroll';
import MouseFollow from "./MouseFollow";

const Hero = () => {

     // State variable to track the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the screen width state whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to check if the application is in mobile mode
  const isMobileMode = () => {
    return windowWidth <= 768; // You can adjust the breakpoint as per your requirement
  };

    return (
    
        <div> 
        {!isMobileMode() && <MouseFollow />} 
        <section className='section bg-[#f2f2f2] dark:bg-[#222222] text-[#2e2e2d] dark:text-[#f2f2f2] min-h-[85vh] lg:min-h[78vh]'> 
        <div className='container mx-auto'>
            
            <div className='flex flex-row'>
                <div className='mb-6'>
                    <motion.div 
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0}}
                    >
                        <h1 className='leading-none font-inter text-5xl mx-6 md:text-8xl lg:text-9xl'>SOFTWARE<br />DEVELOPER<br />STUDENT_</h1>
                        <div className='font-inter font-light text-lg mx-7 md:text-2xl lg:mx-8 lg:text-2xl'>
                            <h4>Code Passionate | Front-End & Design Enthusiast</h4>
                        </div>  
                        <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className='mx-8 my-6 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text lg:text-md rounded-sm 
                                border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                              hover:bg-[#2e2e2d] duration-500 cursor-pointer'>Contact Me</button></Link>            
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero;
