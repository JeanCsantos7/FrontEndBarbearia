import Imagem1 from '../assets/IMG_0125.png';
import Imagem2 from '../assets/IMG_0126.jpg';
import Imagem3 from '../assets/IMG_0129.jpg';
import Imagem4 from '../assets/IMG_0120.jpg';
import Modal from 'react-modal';
import MapaSalao from './Mapa';

import { useState } from 'react';

const NossaUnidade = () => {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className="bg-[#444444] p-[8%] text-center">
                <h1
                    id="profissionais"
                    style={{ fontFamily: 'Bebas Neue, serif' }}
                    className="text-[#fff] lg:text-7xl text-6xl font-bold"
                >
                    NOSSA UNIDADE
                </h1>

                <h2 className="text-center text-[#fff]">
                    Veja algumas imagens da nossa unidade e confira onde estamos
                    localizados!
                </h2>

                <button
                    onClick={openModal}
                    className="border-2 cursor-pointer rounded-2xl text-[#fff] border-[#fff] p-2 hover:bg-[#fff] ease-in-out duration-500 hover:text-[#f03636] lg:w-[22%] lg:mt-[2%] md:w-[85%] mt-[12%]"
                >
                    Ver no Mapa
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="bg-white p-6 rounded-lg flex flex-col justify-between shadow-lg lg:w-[30%] md:w-[87%] h-[60vh] mx-auto mt-20 "
                    overlayClassName="fixed inset-0 bg-black/65 flex items-center"
                >
                    <button onClick={closeModal} className="text-[#000] text-lg ml-[90%]">X</button>
                    <div>
                        <MapaSalao />
                    </div>
                </Modal>

                <div className="bg-[#444444] py-8 sm:py-12">
                    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                            <div className="relative lg:row-span-2">
                                <img
                                    src={Imagem1}
                                    className="object-cover w-full h-[625px] rounded-lg lg:rounded-l-[2rem]"
                                    alt="Imagem 1"
                                />
                            </div>

                            <div className="relative max-lg:row-start-1">
                                <img
                                    src={Imagem2}
                                    className="object-cover w-full h-[300px] rounded-lg max-lg:rounded-t-[2rem]"
                                    alt="Imagem 2"
                                />
                            </div>

                            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                                <img
                                    src={Imagem3}
                                    className="object-cover w-full h-[300px] rounded-lg"
                                    alt="Imagem 3"
                                />
                            </div>

                            <div className="relative lg:row-span-2">
                                <img
                                    src={Imagem4}
                                    className="object-cover w-full h-[625px] rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
                                    alt="Imagem 4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NossaUnidade;
