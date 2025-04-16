import Logotipo from '../assets/OIG4.7y-removebg-preview.png';
import { FaInstagram } from 'react-icons/fa';

import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#fff] to-[#b9b9b9] w-full rounded-none shadow-sm p-[2%] ">
            <div className="max-w-screen-xl mx-auto md:py-8 px-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <a
                        href="#"
                        className="flex items-center mb-4 sm:mb-0 gap-3"
                    >
                        <img
                            src={Logotipo}
                            className="lg:w-[23%] md: m-auto w-[35%] "
                            alt="Flowbite Logo"
                        />
                    </a>
                    <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-secondary-text dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline">
                                <FaInstagram className="text-3xl text-[#141414] hover:text-[#fff] ease-in-out duration-500" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                <FaWhatsapp className="text-3xl text-[#141414] hover:text-[#fff] ease-in-out duration-500" />
                            </a>
                        </li>

                        {['Sobre', 'Serviços', 'Profissionais'].map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative font-semibold text-md text-[#141414] group hover:text-[#ffffff] ease-in-out duration-500"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 h-0.5 bg-[#f03636] w-0 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </ul>
                </div>
                <hr className="my-6 border-gray-300 dark:border-gray-700" />
                <span className="block text-sm text-secondary-text text-center dark:text-gray-400">
                    © 2025{' '}
                    <a href="#" className="text-[#141414] hover:underline">
                        Street Barbershop™
                    </a>
                    . Todos Direitos Reservados.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
