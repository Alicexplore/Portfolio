import React from 'react'
import { motion } from "framer-motion";
import { fadeIn} from '../variants'

export default function transition(Entering) {

  return (
    <div className='h-[800px] w-auto bg-[#222222] z-50'>
        <div className='grid grid-cols-2'>
            <div></div>
            <div className='grid grid-rows-3 h-[800px] items-center text-[#f2f2f2] text-10xl text-right px-20'>
                <div>
                    <motion.div
                    variants={fadeIn('up', 2.5)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    viewport={{ once: true, amount: 0}}>
                        <h1 className=''>100</h1>  
                    </motion.div>
                </div>  
                <div>
                    <motion.div
                    variants={fadeIn('up', 1.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0}}>
                        <h1 className=''>50</h1>  
                    </motion.div>
                </div> 
                <div>
                    <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0}}>
                        <h1 className=''>0</h1>  
                    </motion.div>
                </div> 
            </div>
        </div>
    </div>
  )
}
