import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


export default function Contact() {
 
  return (
    <div className='px-20 py-20 bg-[#f2f2f2] dark:bg-[#222222] text-[#222] dark:text-[#f2f2f2] h-[950px]'>
        <h1 className='text-11xl font-semibold leading-[11rem] -tracking-[0.5rem]'>keep<br />in touch.</h1>
        <div className='grid grid-cols-2'>
            <div className='grid grid-cols-1'>
                 
            </div>
            <div className='mt-20 w-[1px] h-[400px] bg-[#222222] dark:bg-[#f2f2f2]'></div>
            <div className='grid grid-cols-1'>

            </div>
        </div>  
    </div>   

    )
}