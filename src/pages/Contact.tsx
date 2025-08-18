import keyboard from '../assets/images/keyboard.png';
import curlArrowDown from '../assets/images/curl-arrow-down.png';
import bar from '../assets/images/bar.png';
import mail from '../assets/images/mail.png';
import { BiSend } from 'react-icons/bi';

export default function Contact() {
    return (
        <section className="py-16">
            <div className="flex justify-end mb-16">
                <div className="w-[50%] ml-[100px]">
                    <img src={keyboard} alt="keyboard" />
                </div>
            </div>
            <div className="flex w-[80%] m-auto">
                <div className="w-[44%]">
                    <p className="text-[64px] font-bold text-lightGray">Got a project in <span className="text-secondary">mind?</span></p>
                    <div className="flex items-center">
                        <img src={curlArrowDown} alt="curl arrow" />
                        <img src={bar} alt="bar" />
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="flex justify-between">
                        <div className="flex flex-col w-[48%]">
                            <label className="text-lightGray mb-1" htmlFor="name">Name</label>
                            <input id="name" placeholder="Name" type="text" className="bg-secondary/50 rounded-[16px] h-[40px] pl-3 text-lightGray/50" />
                        </div>
                        <div className="flex flex-col w-[48%]">
                            <label className="text-lightGray mb-1" htmlFor="email">Your email</label>
                            <input id="email" placeholder="Email" type="email" className="bg-secondary/50 rounded-[16px] h-[40px] pl-3 text-lightGray/50" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="message" className="text-lightGray mb-1">Your message</label>
                        <textarea name="message" placeholder="Message" id="message" rows={8} className="w-full bg-secondary/50 rounded-[16px] pl-3 pt-3 text-lightGray"></textarea>
                    </div>
                    <button className="flex items-center rounded-[24px] bg-cyanTeal text-lightGray mt-4 px-3 py-2">
                        Send Message
                        <BiSend className="size-[24px] -rotate-45 ml-3" />
                    </button>
                    <div className="flex justify-end mt-4">
                        <img src={mail} alt="mail" className="mr-16" />
                    </div>
                </div>
            </div>
        </section>
    )
}