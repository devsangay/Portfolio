import largeDoodle from '../assets/images/large-doodle.png';
import { PROJECTS } from '../constants/constant';
import { motion } from 'framer-motion';

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true }
});

export default function Projects() {
    return (
        <section id="projects" className="relative py-4 sm:py-16 h-[700px] overflow-hidden">
            <motion.img {...fadeInUp(0)} className="absolute -z-10 left-0 right-0 w-full object-cover h-full" src={largeDoodle} alt="large doodle" />
            <div className="flex flex-col sm:justify-center w-full sm:w-[80%] m-auto h-full">
                <motion.p className="text-lightGray text-center text-[50px] sm:text-[60px] font-bold" {...fadeInUp(0.2)}>
                    Recent 
                    <motion.span className="text-secondary ml-3" {...fadeInUp(0.4)}>works</motion.span>
                </motion.p>
                <div className="flex flex-col sm:flex-row sm:space-x-3 sm:justify-between">
                    {
                        PROJECTS.map((project) => (
                            <div className="w-full sm:w-[25%] bg-secondary/50 rounded-[16px] p-[20px]" key={project.name} {...fadeInUp(0.6)}>
                                <motion.p {...fadeInUp(0.8)} className="text-lightGray mb-[10px]">{project.name}</motion.p>
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    >
                                    <motion.img 
                                        {...fadeInUp(1)} 
                                        className="rounded-[8px] h-[250px] cursor-pointer" 
                                        src={project.image} 
                                        width={400} 
                                        height={250} 
                                        alt={project.name} 
                                    />
                                 </a>
                                <motion.p className="text-lightGray mt-[10px]" {...fadeInUp(1.2)}>{project.description}</motion.p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}