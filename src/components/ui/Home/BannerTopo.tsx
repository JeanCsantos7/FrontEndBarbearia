
import { useNavigate } from "react-router-dom";

const BannerTopo = () => {
    
    const navigate = useNavigate()
    
    return (
        <main className="w-full h-[50vh]  md: h-[78vh] bg-cover bg-center text-center flex justify-center items-center px-4">
            <div className="flex flex-col justify-center items-center">
                <h1
                    className="text-center font-semibold text-5xl lg:mt-[9%] md:text-6xl text-[#fff] p-3 mt-[35%]"
                    style={{ fontFamily: 'Bebas Neue, serif' }}
                >
                    A MELHOR BARBEARIA DA CIDADE <br /> PERTO DE VOCÊ
                </h1>
                <h2
                    style={{ fontFamily: 'Heligthon Signature' }}
                    className="text-2xl  md: text-[26px] mt-4 text-[#fff]"
                >
                    Venha viver essa experiência, Agende Agora!
                </h2>
                <button onClick={() => navigate("/LoginClientes")} className="w-[80%] lg:mt-[3%]   md:w-[45%] mt-[10.5%] text-center font-semibold border-2 cursor-pointer rounded-2xl text-[#fff] border-[#fff] p-2  hover:bg-[#fff] ease-in-out duration-500 hover:text-[#f03636]">
                    AGENDAR
                </button>
            </div>
        </main>
    );
};

export default BannerTopo;
