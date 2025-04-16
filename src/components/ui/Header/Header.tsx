import Logotipo from "../assets/OIG4.7y-removebg-preview.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import MenuMobile from "./MenuMobile";
import { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="bg-gradient-to-b from-[#747474] to-white w-full fixed top-0 z-10 shadow-md">
      <nav className="flex flex-wrap items-center justify-between px-4 py-3 max-w-7xl mx-auto">

        <a href="#home">
          <img
            src={Logotipo}
            alt="Logotipo"
            className="w-32 sm:w-40 md:w-48 lg:w-52 cursor-pointer"
          />
        </a>

   
        <div className="hidden lg:flex gap-6 items-center">
          {["Sobre", "Servicos", "Profissionais"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative font-semibold text-md text-[#141414] group hover:text-[#ffffff] transition duration-300"
            >
              {item}
              <span className="absolute bottom-0 left-0 h-0.5 bg-[#f03636] w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Redes sociais (Desktop) */}
        <div className="hidden lg:flex gap-4">
          <a href="https://www.instagram.com/streetbarbershop.vca/" target="_blank">
            <FaInstagram className="text-2xl hover:text-white transition duration-300" />
          </a>
          <a href="#">
            <FaWhatsapp className="text-2xl hover:text-white transition duration-300" />
          </a>
        </div>


        <button onClick={toggleMenu} className="lg:hidden text-3xl text-black">
          <TfiMenuAlt />
        </button>
      </nav>

    
      {menuAberto && (
        <div className="lg:hidden">
          <MenuMobile />
        </div>
      )}
    </header>
  );
};

export default Header;
