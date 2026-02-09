import { useState } from "react";
import { MENU_ITEMS } from "../../constants/constant";

export default function Navbar() {
  const handleScroll  = (id) => {
    const section = document.getElementById(id);
    section && section.scrollIntoView({behavior: 'smooth'});
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-sm border-b border-secondary text-lightGray">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-secondary z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 flex flex-col space-y-6 text-lightGray">
          <button
            className="self-end text-xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {MENU_ITEMS.filter(item => item.id !== 'home').map(menu => (
            <div
              key={menu.id}
              className="text-lg cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                menu.id !== 'cv'
                  ? handleScroll(menu.id)
                  : window.open("/sangay_wangdi(cv).pdf", "_blank");
              }}
            >
              {menu.label}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[95%] sm:max-w-[80%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-lightGray text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
          <div className="flex items-center space-x-2 text-[18px] sm:text-[24px] font-small font-bold cursor-pointer">
            <p>DevSangay</p>
          </div>

          <div className="hidden sm:flex sm:items-center space-x-8 font-small">
            {
              MENU_ITEMS.filter((item) => item.id !== 'home').map((menu) => {
                return (
                  <div key={menu.id}>
                    {
                      menu.id !== 'cv' ? (
                        <div className="flex space-x-2 items-center px-2 rounded-3xl text-lightGray text-[14px] sm:text-[18px] cursor-pointer 
                          relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px]
                        after:bg-cyanTeal after:shadow-[0_0_8px_#22d3ee] after:transition-all after:duration-300 hover:after:w-full" 
                          key={menu.id}
                          onClick={() => handleScroll(menu.id)}>
                          <p>{menu.label}</p>
                        </div>
                      ) : (
                        <div onClick={() => window.open("/sangay_wangdi(cv).pdf", "_blank")} className="rounded-full cursor-pointer p-2 bg-secondary/50 text-[12px] sm:text-[14px] transition-shadow duration-300 
                          hover:shadow-[0_0_15px_rgba(0,255,255,0.7)]">
                            <p>{menu.label}</p>
                        </div>
                      )
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </nav>
  );
}
