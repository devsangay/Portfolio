import music from '../assets/images/music.png';
import bulb from '../assets/images/bulb.png';
import curlUp from '../assets/images/curl-up.png';
import coderDoddle from '../assets/images/coder-doddles.png';
import coder from '../assets/images/coder.png';

export default function About() {
    return (
        <section id="about" className="py-16 w-[90%] m-auto">
            <img src={music} alt="music" />
            <div className="flex justify-around items-center mt-8">
                <div className="flex flex-col items-center space-y-16 w-[22%]">
                    <div>
                        <div className="flex text-[64px] text-lightGray font-bold">
                            <p>About</p>
                            <p className="text-secondary ml-3">me</p>
                            <img className="ml-4" src={bulb} alt="bulb" />
                        </div>
                        <p className="text-lightGray">
                            I'm Sangay, a Front-End Engineer with 3 years of experience building responsive, high-performance web applications. 
                            I specialize in Angular and have strong skills in JavaScript. TypeScript, HTML. SCSS. and Tailwind CSS. 
                            I'm experienced with Angular Material, PrimeNG, and have also worked with NextJs for server-side rendering and React-based projects. 
                            I focus on clean, scalable code and delivering seamless user experiences in collaborative environments.
                        </p>
                    </div>
                    <img src={curlUp} alt="curl up" />
                </div>
                <div className="relative flex flex-col items-center w-[40%]">
                    <img src={coderDoddle} alt="coder doddle" />
                    <img className="absolute z-10 top-[200px]" src={coder} alt="coder" />
                </div>
            </div>
        </section>
    )
}