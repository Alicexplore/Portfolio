import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn} from '../variants'


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
            <div class="dark:bg-[#f2f2f2] bg-[#222222] rounded-full h-10 w-10 flex items-center justify-center">
              <p class="font-poppins text-[#f2f2f2] dark:text-[#222222] text-[1.8rem] font-medium mb-[0.2rem]">a</p>
            </div>
            <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md'>Alice Bergonhe</h1>
            <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md leading-snug'>Front-End Engineer<br />Apprentice at Qonto</h1>
            <h1 className='flex font-inter dark:text-[#f2F2F2] text-[#222] text-md leading-snug'>Living in Paris<br />France</h1>
            <h1 className='flex cursor-pointer font-inter dark:text-[#f2F2F2] text-[#222222] text-md leading-snug'>Contact</h1>
            <h1 className='flex cursor-pointer dark:text-[#f2f2f2] text-[#222222] text-3xl duration-1000 self-center'
              onClick={handleThemeSwitch} style={{ transform: `rotate(${rotateAngle}deg)`}}><ion-icon name="color-wand"></ion-icon>
            </h1>
          </div>
        </motion.div>
      </div>
    );
  };

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {

  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className='banner bg-[#f2f2f2] dark:bg-[#222222] dark:text-[#f2f2f2] h-[800px]' variants={banner}>
      <Header />
      <BannerRowTop title={"creative"} />
      <BannerRowCenter title={"frontend"} /> 
      <BannerRowBottom title={"developer"} />
    </motion.div>
  );
};

// playMarquee={playMarquee}

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter) => (
      <motion.span
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        {/* <span className="row-message-asterix mr-3">*</span> */}
        <span className='row-message mr-10 text-lg font-inter'>
          I create intuitive and visually appealing interfaces 
          that users love to interact with.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowCenter = ({ title }) => {
  return (
    <div className={"banner-row middle mr-52"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className=''>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className='scroll mt-5'>
        {/* <ion-icon className='font-thin' name="arrow-down-outline"></ion-icon> */}
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

export default Banner;