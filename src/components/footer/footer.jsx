import { MENU_ITEMS, SOCIAL_MEDIA } from "../../constants/constant";

export default function Footer() {
    return (
        <section className="mt-16 border-t border-secondary py-16">
            <div className="flex items-center justify-center">
                <div className="flex space-x-16">
                    {
                        MENU_ITEMS.map((menu) => {
                            const Icon = menu.icon;
                            return (
                                <div className="flex space-x-2 items-center text-lightGray text-[18px] cursor-pointer" key={menu.id}>
                                    <Icon />
                                    <p>{menu.label}</p>
                                </div>
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
                            <div className="flex space-x-2 items-center text-lightGray text-[18px] cursor-pointer" key={media.id}>
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