import { useEffect, useState } from "react";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import MenuLateral from "./menuLateral";
import MenuMobile from "./MenuMobile";

const HorariosMarcados = () => {
  interface DadosAPI {
    id: number;
    nome: string;
    telefone: string;
    data: string;
    horario: string;
    servico: string;
    observacoes: string;
  }

  const [resultado, setResultado] = useState<DadosAPI[]>([]);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const nome = sessionStorage.getItem("nome");

  useEffect(() => {
    const readAPI = async () => {
      try {
        const response = await axios.get(`https://barbearia-backend-six.vercel.app/agendamentoBarbeiro/${nome}`);
        setResultado(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    readAPI();
  }, [nome]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-[#fff]">
      <div className="hidden lg:block w-1/4 p-8">
        <MenuLateral />
      </div>

      <div className="lg:hidden p-4 flex justify-end">
        <CiMenuBurger
          onClick={() => setToggleMenu(!toggleMenu)}
          className="text-4xl cursor-pointer text-[#fff]"
        />
      </div>

      <div className={`transition-all duration-300 ease-in-out ${toggleMenu ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"}`}>
        <MenuMobile />
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6 text-[#fff]">Horários Marcados</h1>
        {resultado.map((item) => (
          <div key={item.id} className="bg-[#1e1e1e] lg:w-[50%] border-[0.2px] p-4 mb-4 rounded-lg shadow-sm text-[#fff]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="text-base font-semibold">Cliente:</h2>
                <p className="text-sm">{item.nome}</p>
              </div>
              <div>
                <h2 className="text-base font-semibold">Telefone:</h2>
                <p className="text-sm">{item.telefone}</p>
              </div>
              <div>
                <h2 className="text-base font-semibold">Serviço Escolhido:</h2>
                <p className="text-sm">{item.servico}</p>
              </div>
              <div>
                <h2 className="text-base font-semibold">Data e Horário:</h2>
                <p className="text-sm">{item.data}</p>
                <p className="text-sm">{item.horario}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorariosMarcados;
