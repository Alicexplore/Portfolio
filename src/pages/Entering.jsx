import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';

export default function Entering() {

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
    <div className='h[800px] w-auto bg-[#f2f2f2] dark:bg-[#222222]'>

    </div>
  )
}

  {/* <button className='mx-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-md rounded-sm 
                border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                hover:bg-[#222222] duration-500' onClick={handleThemeSwitch}>{buttonText}</button>  */}

                // <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className='mx-8 my-6 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text lg:text-md rounded-sm 
                // border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                // hover:bg-[#2e2e2d] duration-500 cursor-pointer'>Contact Me</button></Link> 
