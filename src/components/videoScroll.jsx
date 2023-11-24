import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const controls = useAnimation();
  const videoRef = useRef(null);

  const handleHoverStart = () => {
    controls.start({ opacity: 1, scale: 1.05 });
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleHoverEnd = () => {
    controls.start({ opacity: 1, scale: 1 });
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className='section px-7 py-20 bg-[#f2f2f2] dark:bg-[#222222] text-[#2e2e2d] dark:text-[#f2f2f2] h-auto'
      id='video'
      ref={ref}
    >
      <div className='container mx-auto'>
        <h1>Video scroll scrub demo</h1>
        <div
          className=''
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          <motion.video
            ref={videoRef}
            src='./videos/broccoli.mp4'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
            whileHover={{ opacity: 1, scale: 1.05 }}
          ></motion.video>
        </div>
      </div>
    </div>
  );
}
