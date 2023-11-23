import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';

export default function Header() {

    const [theme, setTheme] = useState("light");
    const [buttonText, setButtonText] = useState("Dark Mode");

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
        if (theme === "dark") {
          setTheme("light");
          setButtonText("Dark Mode");
        } else {
          setTheme("dark");
          setButtonText("Light Mode");
        }
      };

  return (
    <div className='bg-[#f2f2f2] dark:bg-[#222222] py-10' id='header'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-baseline font-apercu'>
                <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#2e2e2d] text-lg cursor-pointer mx-9'>Alice Bergonhe</h1>
                <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#2e2e2d] text-lg cursor-pointer mx-9 leading-snug'>Front-End Engineer<br />Apprentice at Qonto</h1>
                <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#2e2e2d] text-lg cursor-pointer mx-9 leading-snug'>Living in Paris<br />France</h1>
                <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className='flex font-inter dark:text-[#f2F2F2] 
                text-[#2e2e2d] text-lg mx-9 duration-500 cursor-pointer'>Contact ↓</button></Link> 
            </div>
        </div>
    </div>
  )
}

  {/* <button className='mx-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-md rounded-sm 
                border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                hover:bg-[#222222] duration-500' onClick={handleThemeSwitch}>{buttonText}</button>  */}

                // <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className='mx-8 my-6 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text lg:text-md rounded-sm 
                // border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                // hover:bg-[#2e2e2d] duration-500 cursor-pointer'>Contact Me</button></Link> 
