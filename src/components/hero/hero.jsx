import dev from '../../assets/images/person.png';
import doddle from '../../assets/images/doodles-mixed-round.png';
import curl from '../../assets/images/curl-arrow.png';
import { motion } from 'framer-motion';
import { BiDownload } from 'react-icons/bi';

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true }
});

export default function Hero() {
    const scrollToContact = () => {
        const contact = document.getElementById('contact');
        contact && contact.scrollIntoView({behavior: "smooth"});
    } 
    return (
        <section className="w-full flex justify-around items-center py-16">
            <div className="flex text-[96px] font-extrabold">
                <motion.img
                    className="mt-[100px]" 
                    {...fadeInUp(0.2)}
                    src={curl} 
                    alt="curl" />
                <div>
                    <motion.p {...fadeInUp(0.2)} className="text-lightGray">FRONTEND</motion.p>
                    <motion.p {...fadeInUp(0.2)} className="text-cyanTeal">DEVELOPER</motion.p>
                    <motion.div {...fadeInUp(0.4)} className="flex space-x-2 text-[18px] text-lightGray">
                        <button onClick={() => scrollToContact()} className="bg-cyanTeal px-[32px] py-[10px] rounded-full">Contact me</button>
                        <button className="flex items-center bg-secondary px-[32px] py-[10px] rounded-full">Download CV <BiDownload size={32} className="ml-3" /></button>
                    </motion.div>
                </div>
            </div>
            <div className="relative">
                <motion.img
                    initial={{ rotate: "0deg", scale: 0.5 }}
                    animate={{ rotate: "360deg", scale: 1 }}
                    transition={{ duration: 3, ease: "backInOut", delay: 0 }}
                    src={doddle} alt="doddle" />
                
                <motion.img {...fadeInUp(0.2)} className="absolute z-10 top-[200px]" src={dev} alt="person" />
            </div>
        </section>
    )
}