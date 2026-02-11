import { MENU_ITEMS, SOCIAL_MEDIA } from "../../constants/constant";

export default function Footer() {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        section && section.scrollIntoView({behavior: "smooth"});
    }
    return (
        <section className="mt-16 border-t border-secondary py-16">
            <div className="flex items-center justify-center">
                <div className="flex flex-wrap space-x-16">
                    {
                        MENU_ITEMS.map((menu) => {
                            const Icon = menu.icon;
                            return (
                                <>
                                    {
                                        menu.id === 'cv' ? (
                                            <div className="flex space-x-2 items-center px-2 rounded-3xl text-lightGray text-[18px] cursor-pointer 
                                                relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-cyanTeal after:shadow-[0_0_8px_#22d3ee] after:transition-all after:duration-300 hover:after:w-full" 
                                                key={menu.id}
                                                onClick={() => window.open("/sangay_wangdi(cv).pdf", "_blank")}>
                                                <Icon />
                                                <p>{menu.label}</p>
                                            </div>
                                        ) : (
                                            <div className="flex space-x-2 items-center px-2 rounded-3xl text-lightGray text-[18px] cursor-pointer 
                                                relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-cyanTeal after:shadow-[0_0_8px_#22d3ee] after:transition-all after:duration-300 hover:after:w-full" 
                                                key={menu.id}
                                                onClick={() => handleScroll(menu.id)}>
                                                <Icon />
                                                <p>{menu.label}</p>
                                            </div>
                                        )
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex justify-center space-x-16 mt-16">
                {
                    SOCIAL_MEDIA.map((media) => {
                        const Icon = media.social;
                        return (
                            <div className="flex space-x-2 items-center text-lightGray text-[18px] cursor-pointer p-3 
                                            rounded-full bg-secondary/50 transition-shadow duration-300 
                                            hover:shadow-[0_0_15px_rgba(0,255,255,0.7)]" 
                                    key={media.id}>
                                <a href={media.link} id={media.id}>
                                    <Icon />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}