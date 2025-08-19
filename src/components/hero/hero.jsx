import dev from '../../assets/images/person.png';
import doddle from '../../assets/images/doodles-mixed-round.png';
import curl from '../../assets/images/curl-arrow.png';

export default function Hero() {
    const scrollToContact = () => {
        const contact = document.getElementById('contact');
        contact && contact.scrollIntoView({behavior: "smooth"});
    } 
    return (
        <section className="w-full flex justify-around items-center py-16">
            <div className="flex text-[96px] font-extrabold">
                <img className="mt-[100px]" src={curl} alt="curl" />
                <div>
                    <p className="text-lightGray">FRONTEND</p>
                    <p className="text-cyanTeal">DEVELOPER</p>
                    <div className="flex space-x-2 text-[18px] text-lightGray">
                        <button onClick={() => scrollToContact()} className="bg-cyanTeal px-[32px] py-[10px] rounded-full">Contact me</button>
                        <button className="bg-secondary px-[32px] py-[10px] rounded-full">Download CV</button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={doddle} alt="doddle" />
                <img className="absolute z-10 top-[200px]" src={dev} alt="person" />
            </div>
        </section>
    )
}