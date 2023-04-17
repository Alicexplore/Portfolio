import React from 'react'
import { useState, useEffect } from 'react'

export default function Header() {

    const [theme, setTheme] = useState("light");
    const [buttonText, setButtonText] = useState("Dark Mode");

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
    <div className='bg-[#f2f2f2] dark:bg-[#222222] py-4' id='header'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <a href="#">
                    <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222222] text-lg cursor-pointer mx-9'> Alice Bergonhe</h1>
                </a>
                <button className='mx-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-md rounded-sm 
                border border-[#222222] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#222222] hover:text-[#d4d4d4] 
                hover:bg-[#222222] duration-500' onClick={handleThemeSwitch}>{buttonText}</button> 
            </div>

        </div>
    </div>
  )
}
