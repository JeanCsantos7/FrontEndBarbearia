import imagemCorte from '../assets/imagemCorte.jpeg';

const SobreComponent = () => {
    return (
        <div
            id="sobre"
            className="w-full min-h-screen bg-[#444444] flex flex-col items-center px-6 py-10 md:px-16"
        >
            <h1
                className="text-5xl md:text-5xl text-[#fff]"
                style={{ fontFamily: 'Heligthon Signature' }}
            >
                Street BarberShop
            </h1>
            <hr className="text-[#e0e0e0] h-[3px] lg:w-1/7 md: w-2/3 mt-4" />

            <div className="flex flex-col md:flex-row items-center mt-6 w-full max-w-6xl">
                <img
                    className="w-full md:w-1/3 rounded-lg"
                    src={imagemCorte}
                    alt="Barbershop"
                />

                <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">
                    <h2
                        className="text-5xl md:text-6xl mt-[2%] text-[#fff]"
                        style={{ fontFamily: 'Bebas Neue, serif' }}
                    >
                        QUEM SOMOS ?
                    </h2>
                    <p className="text-[#fff] text-lg  lg:text-left  mt-4 md: text-md text-center p-[6.4%] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero temporibus dolor labore culpa qui autem sapiente
                        vitae ex quasi placeat in, suscipit, assumenda, eligendi
                        maiores numquam. Deserunt ducimus aut ad?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SobreComponent;
