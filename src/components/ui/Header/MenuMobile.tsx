import Background from '../assets/WallpaperBarber.png';

const MenuMobile = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center w-full h-[45vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="absolute inset-0 bg-[#575757] opacity-50"></div>

            {['Sobre', 'Servicos', 'Profissionais'].map(item => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="lg:block relative font-semibold text-xl text-[#ffffff] group hover:text-[#ffffff] ease-in-out duration-500 sm:hidden"
                >
                    {item}
                    <span className="absolute bottom-0 left-0 h-0.5 bg-[#f03636] w-0 group-hover:w-full transition-all duration-300"></span>
                </a>
            ))}
        </div>
    );
};

export default MenuMobile;
