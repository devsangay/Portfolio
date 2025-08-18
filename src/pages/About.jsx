import music from '../assets/images/music.png';
import bulb from '../assets/images/bulb.png';
import curlUp from '../assets/images/curl-up.png';
import coderDoddle from '../assets/images/coder-doddles.png';
import coder from '../assets/images/coder.png';

export default function About() {
    return (
        <section className="py-16 w-[90%] m-auto">
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus rerum velit aliquid nisi ipsam laboriosam praesentium officiis excepturi. 
                            Laboriosam, corporis consectetur inventore distinctio commodi amet obcaecati dolores rerum voluptate aspernatur, nulla eligendi incidunt in! Ullam, dolores? 
                            Possimus at error repellat reprehenderit, cumque, fugiat omnis assumenda odio cum laboriosam deleniti!
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