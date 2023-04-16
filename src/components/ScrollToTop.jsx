import React from 'react'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [ showScrollTopButton, setShowScrollTopButton ] = useState(false);
  
  useEffect (() => {
    window.addEventListener('scroll' , () => {
        if(window.scrollY > 300) {
            setShowScrollTopButton(true);
        } else {
            setShowScrollTopButton(false);
        }
    })  
  }, []);

  const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
        <div className='fixed right-1 bottom-1 text-[#222222] dark:text-[#f2f2f2] cursor-pointer w-20 h-20 text-5xl z-50'>
            {showScrollTopButton && <ion-icon onClick={scrollTop} name="arrow-up-circle"></ion-icon> }
        </div>
  )
}

export default ScrollToTop


{/* <ion-icon onClick={scrollTop} name="arrow-up"> */}