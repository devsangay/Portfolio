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
        <section className="w-full flex flex-col sm:flex-row justify-around items-center py-4 sm:py-16">
            <div className="flex text-[50px] sm:text-[96px] font-extrabold">
                <motion.img
                    className="hidden sm:block mt-[100px]" 
                    {...fadeInUp(0.2)}
                    src={curl} 
                    alt="curl" />
                <div className="flex flex-col items-center space-y-1 sm:flex-none">
                    <motion.p {...fadeInUp(0.2)} className="text-lightGray">FRONTEND</motion.p>
                    <motion.p {...fadeInUp(0.2)} className="text-cyanTeal">DEVELOPER</motion.p>
                    <motion.div {...fadeInUp(0.4)} className="flex space-x-2 text-[12px] sm:text-[18px] text-lightGray">
                        <button onClick={() => scrollToContact()} className="bg-cyanTeal px-[12px] sm:px-[32px] py-[8px] sm:py-[10px] cursor-pointer rounded-full">Contact me</button>
                        <button onClick={() => window.open("/sangay_wangdi(cv).pdf", "_blank")} className="flex cursor-pointer items-center bg-secondary px-[12px] py-[8px] sm:px-[32px] py-0 sm:py-[10px] rounded-full">Download CV <BiDownload className="ml-3 sm:text-[32px] text-[22px]" /></button>
                    </motion.div>
                </div>
            </div>
            <div className="relative mt-4">
                <motion.img
                    initial={{ rotate: "0deg", scale: 0.5 }}
                    animate={{ rotate: "360deg", scale: 1 }}
                    transition={{ duration: 3, ease: "backInOut", delay: 0 }}
                    src={doddle}
                    alt="doddle"
                    className="w-[320px] sm:w-[387px] lg:w-auto"
                />
                
                <motion.img 
                    {...fadeInUp(0.2)} 
                    className="absolute z-10 top-[80px] left-[48px] sm:left-0 sm:top-[200px] w-[200px] sm:w-[387px] lg:w-auto" 
                    src={dev} 
                    alt="person" />
            </div>
        </section>
    )
}