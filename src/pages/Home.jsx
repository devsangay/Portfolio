import Hero from "../components/hero/hero";
import Navbar from "../components/nav-bar/navbar";
import { BiArrowFromTop } from "react-icons/bi";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/footer/footer";

export default function Home() {
    return (
        <section id="home" className="relative">
            <div className="absolute -z-10 left-[30%] h-full w-[1px] bg-secondary"></div>
            <Navbar />
            <Hero  />
            <div className="w-full flex">
                <div className="bg-secondary p-[18px] w-fit ml-[28%]">
                    <BiArrowFromTop className="text-lightGray" size={40} />
                </div>
            </div>
            <About />
            <Projects />
            <Contact />
            <Footer />  
        </section>
    )
}