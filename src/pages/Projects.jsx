import largeDoodle from '../assets/images/large-doodle.png';
import { PROJECTS } from '../constants/constant';

export default function Projects() {
    return (
        <section className="relative py-16 h-[700px] overflow-hidden">
            <img className="absolute -z-10 left-0 right-0 w-full object-cover h-full" src={largeDoodle} alt="large doodle" />
            <div className="flex flex-col justify-center w-[80%] m-auto h-full">
                <p className="text-lightGray text-[60px] font-bold">My recent <span className="text-secondary">works</span></p>
                <div className="flex space-x-3 justify-between">
                    {
                        PROJECTS.map((project) => (
                            <div className="w-[25%] bg-secondary/50 rounded-[16px] p-[20px]">
                                <p className="text-lightGray">{project.name}</p>
                                <img className="rounded-[8px] object-cover h-[214px]" src={project.image} width={400} height={214} alt={project.name} />
                                <p className="text-lightGray">{project.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}