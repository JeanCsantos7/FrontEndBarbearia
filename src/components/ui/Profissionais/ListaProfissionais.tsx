import { useState } from 'react';
import { FaScissors } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import Pessoa1 from '../assets/Pessoa1.png';
import Pessoa2 from '../assets/Pessoa2.avif';
import Pessoa3 from '../assets/Pessoa3.webp';
import TrabalhosDuh from './TrabalhosDuh';

const ListaProfissionais = () => {
    interface ProfissionaisTypes {
        id: number;
        nome: string;
        imagem: any;
        descricao?: string;
    }

    const Profissionais: Array<ProfissionaisTypes> = [
        { id: 1, nome: 'Fulano1', imagem: Pessoa1, descricao: 'Descrição do Fulano1' },
        { id: 2, nome: 'Fulano2', imagem: Pessoa2, descricao: 'Descrição do Fulano2' },
        { id: 3, nome: 'Fulano3', imagem: Pessoa3, descricao: 'Descrição do Fulano3' },
    ];

    const [openModal, setOpenModal] = useState(false);
    const [renderizar, setRenderizar] = useState<JSX.Element | null>(null);

    const pegarID = (id: number) => {
        setOpenModal(true);
        setRenderizar(id === 1 ? <TrabalhosDuh /> : null);
    };

    return (
        <div className="flex flex-col items-center gap-6 bg-[#444444]  p-6">
            <h1
                id="profissionais"
                style={{ fontFamily: 'Bebas Neue, serif' }}
                className="text-[#fff] text-center text-6xl md:text-6xl mt-[3%] lg:text-7xl "
            >
                NOSSOS PROFISSIONAIS
            </h1>

         
            {openModal && (
                <div 
                    className="fixed inset-0 bg-black/60 flex justify-center z-50 items-center p-[6%]  "
                    onClick={() => setOpenModal(false)}
                >
                    <div 
                        className="bg-white p-5  rounded-lg shadow-lg max-w-md w-full relative  "
                        onClick={(e) => e.stopPropagation()}
                    >
                    
                        <div className="flex justify-between items-center border-b pb-3">
                            <h2 className="text-xl font-semibold">Trabalhos Realizados</h2>
                            <FaTimes 
                                className="text-gray-500 cursor-pointer hover:text-red-500 transition"
                                size={20}
                                onClick={() => setOpenModal(false)}
                            />
                        </div>

            
                        <div className="space-y-6 mt-4">
                            {renderizar || "Nenhum trabalho disponível."}
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-[6.5%]  gap-6 w-full max-w-[1200px] mt-[5%]">
                {Profissionais.map(item => (
                    <div key={item.id} className="w-full">
                        <img
                            className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-md"
                            src={item.imagem}
                            alt={item.nome}
                        />
                        <div className="w-full p-5 bg-[#1b1b1b] rounded-md">
                            <h1 className="text-[#fff] text-xl font-semibold">
                                {item.nome}
                            </h1>
                            <p className="text-[#fff] text-sm mt-2">{item.descricao}</p>
                            <button
                                onClick={() => pegarID(item.id)}
                                className="flex items-center gap-2 mt-4 border-2 cursor-pointer rounded-xl text-[#fff] border-[#fff] w-full sm:w-[70%] p-2 hover:bg-[#fff] hover:text-[#f03636] transition duration-500"
                            >
                                Ver Trabalhos <FaScissors />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProfissionais;
