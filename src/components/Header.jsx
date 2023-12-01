import React from 'react'
import { useState, useEffect } from 'react'

const Header = () => {

  const [theme, setTheme] = useState("light");
  const [rotateAngle, setRotateAngle] = useState(0);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || "dark";
    setTheme(initialTheme);
    localStorage.setItem("theme", initialTheme);
  }, []);

  useEffect (() => {
      if (theme === "dark") {
          document.documentElement.classList.add("dark");
      } else {
          document.documentElement.classList.remove("dark"); 
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      const newRotateAngle = rotateAngle === 0 ? 360 : 0;
      setRotateAngle(newRotateAngle);
      if (theme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    return (
      <div className='px-20 mb-5 bg-[#f2f2f2] dark:bg-[#222222]' id='header'>
        <motion.div
          variants={fadeIn('down', 2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0}}
        >
          <div className='flex justify-between items-baseline'>
            <div class="dark:bg-[#f2f2f2] bg-[#222222] rounded-full h-7 w-7 flex items-center justify-center">
              <p class="font-poppins text-[#f2f2f2] dark:text-[#222222] text-[1.7rem] font-medium mb-[0.2rem]">a</p>
            </div>
            <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md'>Alice Bergonhe</h1>
            <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md leading-snug'>Front-End Engineer<br />Apprentice at Qonto</h1>
            <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md leading-snug'>Living in Paris<br />France</h1>
            <h1 className='flex underline-on-hover cursor-pointer font-inter dark:text-[#f2F2F2] text-[#222222] text-md leading-snug'>Contact</h1>
            <h1 className='flex cursor-pointer dark:text-[#f2f2f2] text-[#222222] text-3xl duration-1000 self-center'
              onClick={handleThemeSwitch} style={{ transform: `rotate(${rotateAngle}deg)`}}><ion-icon name="color-wand"></ion-icon>
            </h1>
          </div>
        </motion.div>
      </div>
    );
  };
