import music from '../assets/images/music.png';
import bulb from '../assets/images/bulb.png';
import curlUp from '../assets/images/curl-up.png';
import coderDoddle from '../assets/images/coder-doddles.png';
import coder from '../assets/images/coder.png';
import { motion } from 'framer-motion';

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true }
});

export default function About() {
  return (
    <section id="about" className="py-4 sm:py-16 w-full sm:w-[90%] m-auto">
      {/* Music Icon */}
      <motion.img 
        src={music} 
        alt="music" 
        {...fadeInUp(0)} 
        className="mx-auto hidden sm:block"
      />

      <div className="flex flex-col sm:flex-row justify-around items-center sm:mt-8">
        {/* Left Text Section */}
        <div className="flex flex-col items-center space-y-16 w-full sm:w-[22%]">
          <div className="w-full">
            {/* Heading */}
            <motion.div 
              className="flex text-[50px] sm:text-[64px] text-lightGray font-bold justify-center sm:justify-start items-center w-full"
              {...fadeInUp(0.2)}
            >
              <p>About</p>
              <p className="text-secondary ml-3">me</p>
              <motion.img 
                src={bulb} 
                alt="bulb" 
                className="ml-4 w-12 h-12"
                {...fadeInUp(0.4)}
              />
            </motion.div>

            {/* Paragraph */}
            <motion.p 
              className="text-lightGray mt-6 leading-relaxed w-full text-center"
              {...fadeInUp(0.6)}
            >
              Front-End Engineer with more than 3 years of experience specializing in Angular, TypeScript, and modern UI frameworks. Skilled in building responsive, high-performance web applications with a focus on clean, scalable code and seamless user experiences.
            </motion.p>
          </div>

          {/* Curl-up Icon */}
          <motion.img 
            src={curlUp} 
            alt="curl up" 
            className="hidden sm:block"
            {...fadeInUp(0.8)}
          />
        </div>

        {/* Right Coder Section */}
        <motion.div 
          className="relative flex flex-col items-center w-full sm:w-[40%] mt-1 sm:mt-0"
          {...fadeInUp(1)}
        >
          <motion.img 
            src={coderDoddle} 
            className="w-[320px] sm:w-[387px] lg:w-auto"
            alt="coder doodle" 
            {...fadeInUp(1.2)}
          />
          <motion.img 
            src={coder} 
            alt="coder" 
            className="absolute z-10 top-[35px] sm:top-[200px] w-[200px] sm:w-[387px] lg:w-auto"
            {...fadeInUp(1.4)}
          />
        </motion.div>
      </div>
    </section>
  )
}
