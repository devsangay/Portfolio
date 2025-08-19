import keyboard from '../assets/images/keyboard.png';
import curlArrowDown from '../assets/images/curl-arrow-down.png';
import bar from '../assets/images/bar.png';
import mail from '../assets/images/mail.png';
import { BiSend } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { error } from 'console';

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true }
});

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs.sendForm(
            "service_9h5ihxe",
            "template_5owo3ln",
            formRef.current,
            "ZGghFcZzzog-Bf_75"
        ).then(
            (result) => {
                alert("Message sent successfully!"),
                setFormData({name: "", email: "", message: ""}) //reset form
            },
            (error) => {
                console.log(error);
                alert("Failed to send message");
            }
        )

    }

    return (
        <section id="contact" className="py-16">
            <div className="flex justify-end mb-16">
                <div className="w-[50%] ml-[100px]">
                    <motion.img {...fadeInUp(0)} src={keyboard} alt="keyboard" />
                </div>
            </div>
            <div className="flex w-[80%] m-auto">
                <div className="w-[44%]">
                    <motion.p {...fadeInUp(0.2)} className="text-[64px] font-bold text-lightGray">Got a project in <span className="text-secondary">mind?</span></motion.p>
                    <div className="flex items-center">
                        <motion.img {...fadeInUp(0.4)} src={curlArrowDown} alt="curl arrow" />
                        <motion.img {...fadeInUp(0.6)} src={bar} alt="bar" />
                    </div>
                </div>
                <div className="w-[50%]">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="flex justify-between">
                            <motion.div {...fadeInUp(0.4)} className="flex flex-col w-[48%]">
                                <label className="text-lightGray mb-1" htmlFor="name">Name</label>
                                <input 
                                    id="name" 
                                    placeholder="Name" 
                                    type="text"
                                    name="name"
                                    value={formData.name} 
                                    onChange={handleChange}
                                    className="bg-secondary/50 rounded-[16px] h-[40px] pl-3 text-lightGray/50"
                                    required />
                            </motion.div>
                            <motion.div {...fadeInUp(0.6)} className="flex flex-col w-[48%]">
                                <label className="text-lightGray mb-1" htmlFor="email">Your email</label>
                                <input 
                                    id="email" 
                                    placeholder="Email" 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-secondary/50 rounded-[16px] h-[40px] pl-3 text-lightGray/50"
                                    required />
                            </motion.div>
                        </div>
                        <motion.div {...fadeInUp(0.8)} className="flex flex-col mt-4">
                            <label htmlFor="message" className="text-lightGray mb-1">Your message</label>
                            <textarea 
                                name="message" 
                                placeholder="Message" 
                                id="message" 
                                value={formData.message}
                                onChange={handleChange}
                                rows={8} 
                                className="w-full bg-secondary/50 rounded-[16px] pl-3 pt-3 text-lightGray"
                                required></textarea>
                        </motion.div>
                        <motion.button type="submit" {...fadeInUp(1)} className="flex items-center rounded-[24px] bg-cyanTeal text-lightGray mt-4 px-3 py-2">
                            Send Message
                            <BiSend className="size-[24px] -rotate-45 ml-3" />
                        </motion.button>
                        <motion.div {...fadeInUp(1.2)} className="flex justify-end mt-4">
                            <img src={mail} alt="mail" className="mr-16" />
                        </motion.div>
                    </form>
                </div>
            </div>
        </section>
    )
}