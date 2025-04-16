import Background from '../assets/BarberPole.png';

const Catalogo = () => {
    return (
        <main id="servicos" className="flex flex-col md:flex-row w-full h-auto">
            <img
                className="w-full md:w-[45vw] h-auto md:h-[100vh] object-cover"
                src={Background}
                alt="Barber Pole"
            />

            <div className="flex flex-col w-full h-auto md:h-[100vh] bg-[#1b1b1b] text-white p-12 md:p-12">
                <h1
                    style={{ fontFamily: 'Bebas Neue, serif' }}
                    className="text-center md:text-left text-5xl md:text-6xl lg:text-7xl"
                >
                    TABELA DE SERVIÇOS
                </h1>
                <hr className="bg-[#e0e0e0] h-[3px] w-[55%] mx-auto md:ml-0 mt-4 md:mt-6" />

                <div className="mt-6 space-y-4 text-center md:text-left text-lg md:text-2xl font-semibold">
                    {[
                        'CORTE',
                        'BARBA',
                        'BIGODE',
                        'PÉZINHO',
                        'SOBRANCELHA',
                        'LUZES',
                        'TINTURA',
                        'ALISAMENTO',
                    ].map((servico, index) => (
                        <p
                            key={index}
                            className="flex justify-between border-b border-gray-500 pb-2"
                        >
                            <span>{servico}</span>
                            <span>R$ 20,00</span>
                        </p>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Catalogo;
