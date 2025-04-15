import { useState, useEffect } from "react";

const Avaliações = () => {
    interface Avaliacoes {
        id: number;
        nome: string;
        avaliacao: string;
    }

    const listaAvaliacoes: Avaliacoes[] = [
        { id: 1, nome: "Jean", avaliacao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cupiditate incidunt repellat blanditiis sunt vel quibusdam iure, praesentium tempore cumque dolorem vitae deleniti porro? Laborum est tempore corporis amet nulla!" },
        { id: 2, nome: "Any", avaliacao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cupiditate incidunt repellat blanditiis sunt vel quibusdam iure, praesentium tempore cumque dolorem vitae deleniti porro? Laborum est tempore corporis amet nulla!"},
        { id: 3, nome: "Marilza", avaliacao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cupiditate incidunt repellat blanditiis sunt vel quibusdam iure, praesentium tempore cumque dolorem vitae deleniti porro? Laborum est tempore corporis amet nulla!" },
        { id: 4, nome: "Sara", avaliacao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cupiditate incidunt repellat blanditiis sunt vel quibusdam iure, praesentium tempore cumque dolorem vitae deleniti porro? Laborum est tempore corporis amet nulla!" },
        { id: 5, nome: "Duh", avaliacao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cupiditate incidunt repellat blanditiis sunt vel quibusdam iure, praesentium tempore cumque dolorem vitae deleniti porro? Laborum est tempore corporis amet nulla!"},
        { id: 6, nome: "Lucas", avaliacao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cupiditate incidunt repellat blanditiis sunt vel quibusdam iure, praesentium tempore cumque dolorem vitae deleniti porro? Laborum est tempore corporis amet nulla!" },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const cardsPorPagina = 3;

    useEffect(() => {
        const intervalo = setInterval(() => {
            setStartIndex((prevIndex) =>
                prevIndex + cardsPorPagina >= listaAvaliacoes.length ? 0 : prevIndex + cardsPorPagina
            );
        }, 4000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="p-8 text-center">
           <h1
                    id="profissionais"
                    style={{ fontFamily: 'Bebas Neue, serif' }}
                    className="text-[#fff] lg:text-7xl md: text-6xl"
                >
                    VEJA O QUE FALAM DE NÓS!
                </h1>


            <div className="flex justify-center mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                    {listaAvaliacoes.slice(startIndex, startIndex + cardsPorPagina).map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#fff] text-[#000] rounded-xl p-6 shadow-lg flex flex-col justify-between h-55"
                        >
                            <h5 className="text-2xl font-bold">{item.nome}</h5>
                            <p className="text-[#000] text-sm text-left">{item.avaliacao}</p>
                            <div className="flex text-yellow-400 mt-2">
                                {"★★★★★".split("").map((star, index) => (
                                    <span key={index}>{star}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Avaliações;
