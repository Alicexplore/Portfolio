import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';

export default function Header() {

    const [theme, setTheme] = useState("light");
    const [buttonText, setButtonText] = useState(<ion-icon name="color-wand"></ion-icon>);

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
          setButtonText(<ion-icon name="color-wand"></ion-icon>);
        } else {
          setTheme("dark");
          setButtonText(<ion-icon name="color-wand"></ion-icon>);
        }
      };

  return (
    <div className='px-20 py-10 bg-[#f2f2f2] dark:bg-[#222222]' id='header'>
            <div className='flex justify-between items-baseline'>
                <img className='flex items-center place-content-center place-items-center' src="./images/logo-website.png" alt="logo" width={30} />
                <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md'>Alice Bergonhe</h1>
                <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md leading-snug'>Front-End Engineer<br />Apprentice at Qonto</h1>
                <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md leading-snug'>Living in Paris<br />France</h1>
                <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md leading-snug'>Contact</h1>
                {/* <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className='flex font-inter dark:text-[#f2F2F2] 
                text-[#2e2e2d] text-lg duration-500 cursor-pointer'>Contact</button></Link> */}
                <h1 className='flex cursor-pointer dark:text-[#f2f2f2] text-[#222222] text-3xl hover:text-[#7b7b7b] hover:dark:text-[#7b7b7b] duration-500' 
                onClick={handleThemeSwitch}>{buttonText}</h1>  
           
            </div>
        </div>
  )
}

                

                // <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className='mx-8 my-6 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text lg:text-md rounded-sm 
                // border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                // hover:bg-[#2e2e2d] duration-500 cursor-pointer'>Contact Me</button></Link> 
