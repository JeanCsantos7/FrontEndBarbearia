import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MeusAgendamentos = () => {
  interface Dados {
    id: number;
    nome: string;
    barbeiro: string;
    telefone: number;
    data: string;
    horario: string;
    servico: string;
  }

  const nome = sessionStorage.getItem("nome");
  const [dados, setDados] = useState<Dados[]>([]);
  const navigate = useNavigate();

  const readAPI = async () => {
    try {
      const APIs = await axios.get(
        `https://back-barbearia.vercel.app/horariosClientes/${nome}`
      );
      setDados(APIs.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    readAPI();
  }, [nome]);

  return (
    <>
      <div className="flex flex-col items-center mt-12 px-4 w-full">
        <div className="flex items-center justify-between w-full max-w-4xl">
          <h1 className="text-xl text-white font-bold">Meus Agendamentos</h1>
          <button
            onClick={() => navigate("/Agendamento")}
            className="bg-gray-700 text-white font-semibold text-sm sm:text-lg px-3 sm:px-5 py-2 rounded-lg sm:rounded-full hover:bg-gray-600 transition-all duration-300"
          >
            Fazer novo agendamento
          </button>
        </div>

        <div className="mt-6 w-full max-w-4xl">
          {dados.length > 0 ? (
            dados.map((item) => (
              <div
                key={item.id}
                className=" border border-[#2e2e2e] mt-6 rounded-lg shadow-lg text-[#fff] w-full"
              >
                <div className="grid p-4 sm:p-6 grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-base font-semibold">Nome:</h2>
                    <p className="text-sm">{item.nome}</p>
                  </div>

                  <div>
                    <h2 className="text-base font-semibold">Telefone:</h2>
                    <p className="text-sm">{item.telefone}</p>
                  </div>

                  <div>
                    <h2 className="text-base font-semibold">
                      Barbeiro Escolhido:
                    </h2>
                    <p className="text-sm">{item.barbeiro}</p>
                  </div>

                  <div>
                    <h2 className="text-base font-semibold">
                      Serviço Escolhido:
                    </h2>
                    <p className="text-sm">{item.servico}</p>
                  </div>

                  <div>
                    <h2 className="text-base font-semibold">Data e Horário:</h2>
                    <p className="text-sm">{item.data}</p>
                    <p className="text-sm">{item.horario}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-white mt-4">
              Você não tem agendamentos.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MeusAgendamentos;
