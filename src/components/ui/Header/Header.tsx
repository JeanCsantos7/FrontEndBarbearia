import Logotipo from '../assets/OIG4.7y-removebg-preview.png';
import { FaInstagram } from 'react-icons/fa';
import { TfiMenuAlt } from 'react-icons/tfi';
import MenuMobile from './MenuMobile';
import { FaWhatsapp } from 'react-icons/fa6';
import { useState } from 'react';

const Header = () => {
    const [statusMenu, setStatus] = useState<boolean>(true);
    const [AtivarMenu, setDesativarMenu] = useState<any>();

    const Mobile = () => {
        setDesativarMenu(statusMenu ? <MenuMobile /> : '');
        setStatus(!statusMenu);
    };

    return (
        <header className="bg-gradient-to-b from-[#747474] to-white h-32 w-full fixed top-0 z-10">
            <nav className="flex items-center justify-evenly ">
                <a href="#home">
                    <img
                        src={Logotipo}
                        alt="Logotipo"
                        className=" lg:w-[28%] cursor-pointer p-10  sm: w-[47%]"
                    />
                </a>

                {['Sobre', 'Servicos', 'Profissionais'].map(item => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="lg:block relative font-semibold text-md text-[#141414] group hover:text-[#ffffff] ease-in-out duration-500 sm: hidden"
                    >
                        {item}
                        <span className="absolute bottom-0 left-0 h-0.5 bg-[#f03636] w-0 group-hover:w-full transition-all duration-300"></span>
                    </a>
                ))}

                <TfiMenuAlt
                    className="lg:hidden sm: block text-5xl mr-[15%]"
                    onClick={Mobile}
                />

                <span className="lg:flex gap-2.5 sm: hidden ">
                    <a href="https://www.instagram.com/streetbarbershop.vca/">
                        <FaInstagram className="text-3xl hover:text-[#fff] ease-in-out duration-500" />
                    </a>
                    <a href="">
                        <FaWhatsapp className="text-3xl hover:text-[#fff] ease-in-out duration-500" />
                    </a>
                </span>
            </nav>

            <div>{AtivarMenu}</div>
        </header>
    );
};

export default Header;
