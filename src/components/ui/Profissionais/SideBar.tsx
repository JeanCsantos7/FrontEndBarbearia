import { useState } from "react";
import axios from "axios";
import MenuLateral from "./menuLateral";
import { CiMenuBurger } from "react-icons/ci";
import MenuMobile from "./MenuMobile";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [data, setData] = useState<string>();
  const [horario, setHorario] = useState<string>();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [barbeiro, setNomeBarbeiro] = useState<string>();
  const navigate = useNavigate();
  const nomeBarber = sessionStorage.getItem("nome");

  const criarHorarios = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://barbearia-backend-six.vercel.app/registrarHorarios", {
        data,
        horario,
        barbeiro,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const mudarRota = () => {
    navigate("/LoginBarbeiros");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("nome");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen  bg-[#121212] ">

      <div className="lg:hidden flex items-center justify-end mt-[6%] m-[5%]">
        <CiMenuBurger
          onClick={() => setToggleMenu(!toggleMenu)}
          className="text-4xl cursor-pointer text-white"
        />

<button
          onClick={mudarRota}
          className="text-white bg-red-500 p-3 rounded-lg hover:bg-red-400 transition"
        >
          Sair
        </button>
      </div>

  
      <div className="hidden lg:block w-1/4 p-4">
        <MenuLateral />
      </div>


      <div className={`lg:hidden transform transition-transform duration-300 ${toggleMenu ? "translate-x-0" : "-translate-x-full"}`}>
        <div >
          <MenuMobile />
        </div>
      </div>


      <div className="flex-1 w-full p-6">
        <div className="mb-5">
          <h1 className="text-2xl text-white font-semibold mb-4">
            Bem-vindo ao Painel Administrativo, {nomeBarber}.
          </h1>
          <h2 className="text-md mb-6 text-white max-w-xl">
            Cadastre no formulário abaixo Horários de atendimento para que
            seus clientes realizem agendamentos. Confira no menu ao lado outras
            opções!
          </h2>
        </div>

        <form onSubmit={criarHorarios} className="w-full max-w-xl space-y-6">
          <div>
            <label htmlFor="profissional" className="block text-sm font-medium text-white">
              Profissional
            </label>
            <select
              id="profissional"
              value={barbeiro}
              onChange={(e) => setNomeBarbeiro(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 sm:text-sm"
            >
              <option value="">Escolha o Profissional</option>
              <option value="Duh">Duh</option>
              <option value="Guto">Guto</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="data" className="block text-sm font-medium text-white">
              Data
            </label>
            <input
              id="data"
              type="date"
              required
              onChange={(e) => setData(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="horario" className="block text-sm font-medium text-white">
              Horário
            </label>
            <input
              id="horario"
              type="time"
              required
              onChange={(e) => setHorario(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#999999] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#616161] transition"
          >
            Enviar
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default SideBar;
