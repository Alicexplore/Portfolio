import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { scroll } from 'framer-motion/dom';

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Manipuler l'élément vidéo ici
      video.muted = true;
      video.playsinline = true;
      video.preload = 'auto';
      video.loop = true;

      // Scrub through the video on scroll
      scroll((progress) => {
        if (video.readyState) {
          video.currentTime = video.duration * progress;
        }
      });
    }
  }, []);

  return (
    <div className='section px-7 py-20 bg-[#f2f2f2] dark:bg-[#222222] text-[#2e2e2d] dark:text-[#f2f2f2] h-auto' id='projects' ref={ref}>
      <div className='container mx-auto'>
        <h1>Video scroll scrub demo</h1>
        <div className='video-container'>
          <video ref={videoRef} src='./videos/broccoli.mp4'></video>
        </div>
        {/* Reste du contenu */}
      </div>
    </div>
  );
}