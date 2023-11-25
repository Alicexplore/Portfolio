import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';

export default function Navbar() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const applyTheme = () => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Appliquer le thème avec un délai léger pour s'assurer que le changement de thème est appliqué
    const timeoutId = setTimeout(applyTheme, 10);

    return () => clearTimeout(timeoutId);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='mx-auto'>
        <div className='w-full bg-[#2e2e2d] dark:bg-[#f2f2f2] h-[76px] backdrop-blur-2xl rounded-md max-w-[350px]
        mx-auto px-5 flex justify-between items-center text-2xl text-[#f2f2f2] dark:text-[#222222]'> 
          <Link to='header' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <ion-icon name="home-outline"></ion-icon>
          </Link>
          <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <ion-icon name="hand-right-outline"></ion-icon>
          </Link>
          <Link to='projects' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <ion-icon name="albums-outline"></ion-icon>
          </Link>
          <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
          </Link>
          <div className='border-r h-[45px] border-[#f2f2f2] dark:border-[#222222]'></div>
          <Link to='#' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center' onClick={handleThemeSwitch}>
            <ion-icon name="contrast-outline"></ion-icon>
          </Link>
        </div>
      </div>
    </nav>





    // <div className='bg-[#f2f2f2] dark:bg-[#222222] p-5 md:flex md:items-center md:justify-between'>
    //     <div className='ml-10'>
    //         <h1 className='font-inter dark:text-[#f2F2F2] text-[#222222] text-md cursor-pointer'>Alice Bergonhe</h1> 
    //     </div> 
    //     <h1 className='pl-10 py-2 font-inter dark:text-[#f2F2F2] text-[#222222] text-md cursor-pointer md:pl-0 md:py-0 '>Front End and Design Enthusiast</h1> 
    //     <ul className='flex flex-rowmd:flex md:itemo s-center z-[-1] md:z-auto left-0 md:w-auto md:pl-0 pl-7'>
    //         <li className='mx-4 my-4 font-inter dark:text-[#f2F2F2] text-[#222222] text-md cursor-pointer hover:text-[#afafaf] duration-500'>Home</li>
    //         <li className='mx-4 my-4 font-inter dark:text-[#f2F2F2] text-[#222222] text-md cursor-pointer hover:text-[#afafaf] duration-500'>About</li>
    //         <li className='mx-4 my-4 font-inter dark:text-[#f2F2F2] text-[#222222] text-md cursor-pointer hover:text-[#afafaf] duration-500'>Projects</li>
    //         <button className='mx-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-md rounded-sm border border-[#222222] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#222222] hover:text-[#d4d4d4] hover:bg-[#222222] duration-500' onClick={handleThemeSwitch}>Dark Mode</button> 
    //     </ul> 
    // </div>
  )
}