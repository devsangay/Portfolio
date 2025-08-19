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
    <section id="about" className="py-16 w-[90%] m-auto">
      {/* Music Icon */}
      <motion.img 
        src={music} 
        alt="music" 
        {...fadeInUp(0)} 
        className="mx-auto"
      />

      <div className="flex justify-around items-center mt-8">
        {/* Left Text Section */}
        <div className="flex flex-col items-center space-y-16 w-[22%]">
          <div>
            {/* Heading */}
            <motion.div 
              className="flex text-[64px] text-lightGray font-bold items-center"
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
              className="text-lightGray mt-6 leading-relaxed"
              {...fadeInUp(0.6)}
            >
              I'm Sangay, a Front-End Engineer with 3 years of experience building responsive, high-performance web applications. 
              I specialize in Angular and have strong skills in JavaScript, TypeScript, HTML, SCSS, and Tailwind CSS. 
              I'm experienced with Angular Material, PrimeNG, and have also worked with Next.js for server-side rendering and React-based projects. 
              I focus on clean, scalable code and delivering seamless user experiences in collaborative environments.
            </motion.p>
          </div>

          {/* Curl-up Icon */}
          <motion.img 
            src={curlUp} 
            alt="curl up" 
            {...fadeInUp(0.8)}
          />
        </div>

        {/* Right Coder Section */}
        <motion.div 
          className="relative flex flex-col items-center w-[40%]"
          {...fadeInUp(1)}
        >
          <motion.img 
            src={coderDoddle} 
            alt="coder doodle" 
            {...fadeInUp(1.2)}
          />
          <motion.img 
            src={coder} 
            alt="coder" 
            className="absolute z-10 top-[200px]"
            {...fadeInUp(1.4)}
          />
        </motion.div>
      </div>
    </section>
  )
}
