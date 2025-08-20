import { MENU_ITEMS } from "../../constants/constant";

export default function Navbar() {
  const handleScroll  = (id) => {
    const section = document.getElementById(id);
    section && section.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <nav className="shadow-sm border-b border-secondary text-lightGray">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center space-x-2 text-[24px] font-small font-bold cursor-pointer">
            <p>DevSangay</p>
          </div>

          <div className="flex space-x-8 font-small">
            {
              MENU_ITEMS.filter((item) => item.id !== 'home').map((menu) => {
                return (
                  <div key={menu.id}>
                    {
                      menu.id !== 'cv' ? (
                        <div className="flex space-x-2 items-center px-2 rounded-3xl text-lightGray text-[18px] cursor-pointer 
                          relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px]
                        after:bg-cyanTeal after:shadow-[0_0_8px_#22d3ee] after:transition-all after:duration-300 hover:after:w-full" 
                          key={menu.id}
                          onClick={() => {
                            setPage("");
                            handleScroll(menu.id);
                          }}>
                          <p>{menu.label}</p>
                        </div>
                      ) : (
                        <div onClick={() => window.open("/sangay_wangdi(cv).pdf", "_blank")} className="rounded-full cursor-pointer p-2 bg-secondary/50 text-[14px] transition-shadow duration-300 
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
