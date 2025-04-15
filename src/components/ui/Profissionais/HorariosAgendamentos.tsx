import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const HorariosAgendamentos = () => {
  interface DadosAPI {
    id: number;
    data: string;
    horario: string;
    barbeiro: string;
  }

  const navigate = useNavigate();

  const [dataAPI, setDataAPI] = useState<DadosAPI[]>([]);
  const [cardSelecionado, setCardSelecionado] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [toggleCard, setToggleCard] = useState<boolean>(false);

  const [barbeiro, setBarbeiro] = useState<string>("Duh");
  const [telefone, setTelefone] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [horario, setHorario] = useState<string>("");
  const [observacoes, setObservaçoes] = useState<string>("");
  const [servico, setServico] = useState<string>("");
  const nomeLocal = sessionStorage.getItem("nome") 
  const [nome, setNome] = useState<string>(nomeLocal || "");

  const readAPI = async () => {
    await axios
      .get(`https://back-barbearia.vercel.app/listaHorarios/${barbeiro}`)
      .then((response) => {
        const datasFormatadas = response.data.map((item: DadosAPI) => ({
          ...item,
          data: dayjs(item.data).format("DD/MM/YYYY"),
        }));
        setDataAPI(datasFormatadas);
      });
  };

  useEffect(() => {
    readAPI();
  }, [barbeiro, nome]);

  const realizarAgendamento = async (e: React.FormEvent) => {
    e.preventDefault();

    if (data === "" || horario === "") {
      alert("Informe uma data ou horário");
      return;
    }

    try {
      await axios.post("https://back-barbearia.vercel.app/agendamentoRealizado", {
        nome,
        barbeiro,
        telefone,
        data,
        horario,
        servico,
        observacoes,
      });

      limparAgenda();
      navigate("/Agendamento/Confirmacao");
    } catch (error) {
      console.error(error);
    }
  };

  const cardClicado = (dados: DadosAPI) => {
    setToggleCard(!toggleCard);
    setCardSelecionado(dados.id);
    setData(dados.data);
    setHorario(dados.horario);
    setSelectedId(dados.id);
  };

  const limparAgenda = () => {
    try {
      axios.delete(`https://back-barbearia.vercel.app/deletarHorarios/${selectedId}`);
      readAPI();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 bg-[#1e1e1e] rounded-lg shadow-lg mt-12">
        <h2 className="text-white font-semibold text-lg text-center mb-6">
          Horários Disponíveis {barbeiro}
        </h2>

        <div
          className={`gap-6 transition-all duration-500 ${
            dataAPI.length > 0 ? "flex flex-col md:flex-row" : "flex flex-col items-center justify-center"
          }`}
        >
          <div className="flex-1 space-y-4">
            {dataAPI.map((response) => (
              <div
                key={response.id}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl shadow-md cursor-pointer transition-all ${
                  cardSelecionado === response.id
                    ? "bg-[#2e2e2e]"
                    : "bg-[#1f1f1f]"
                } hover:scale-[1.05] hover:shadow-2xl border border-[#2e2e2e]`}
                onClick={() => cardClicado(response)}
              >
                <span className="bg-gray-700 text-white text-lg text-center rounded-lg px-4 py-2 w-full transition">
                  {response.data}
                </span>
                <span className="bg-gray-700 text-white text-lg text-center rounded-lg px-4 py-2 w-full transition">
                  {response.horario}
                </span>
              </div>
            ))}
          </div>

          {dataAPI.length > 0 ? (
            <div className="flex-1 space-y-4 max-w-lg">
              <form method="POST" onSubmit={realizarAgendamento}>
                <label htmlFor="nome" className="block text-sm font-medium text-[#fff] mb-1">
                  Seu Nome
                </label>
                <input
                 disabled
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 outline-none transition"
                />

                <label htmlFor="barbeiro" className="block text-sm font-medium text-[#fff] mt-5">
                  Profissional de escolha
                </label>
                <select
                  id="barbeiro"
                  value={barbeiro}
                  onChange={(e) => setBarbeiro(e.target.value)}
                  name="barbeiro"
                  className="block w-full rounded-md bg-white mt-2 px-3 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 sm:text-sm"
                >
                  <option value="" disabled>
                    Escolha um profissional
                  </option>
                  <option value="Duh">Duh</option>
                  <option value="Guto">Guto</option>
                  <option value="Outro">Outro</option>
                </select>

                <label htmlFor="telefone" className="block text-sm font-medium text-[#fff] mb-1 mt-5">
                  Telefone
                </label>
                <input
                  required
                  maxLength={12}
                  onChange={(e) => setTelefone(e.target.value)}
                  type="number"
                  className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 outline-none transition"
                />

                <label htmlFor="servico" className="block text-sm font-medium text-[#fff] mb-1 mt-5">
                  Serviço
                </label>
                <select
                  id="servico"
                  name="servico"
                  value={servico}
                  required
                  onChange={(e) => setServico(e.target.value)}
                  className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 outline-none transition "
                >
                  <option value="" disabled>
                    Escolha um Serviço
                  </option>
                  <option value={"Corte"}>Corte</option>
                  <option value={"Corte e Barba"}>Corte e Barba</option>
                  <option value={"Barba"}>Barba</option>
                  <option value={"Alisamento"}>Alisamento</option>
                  <option value={"Tintura"}>Tintura</option>
                </select>

                <label htmlFor="observacoes" className="text-white font-medium block mb-1 mt-5">
                  Observações: (Opcional)
                </label>
                <textarea
                  className="bg-white w-full p-2 rounded-lg outline-none transition"
                  name="observacoes"
                  id="observacoes"
                  rows={4}
                  onChange={(e) => setObservaçoes(e.target.value)}
                ></textarea>

                <button className="bg-gray-700 text-white font-semibold text-lg px-4 py-2 rounded-lg w-full mt-6 hover:bg-gray-600 transition-all hover:scale-[1.02]">
                  Agendar Horário
                </button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center m-auto">
              <h1 className="text-white text-center">Nenhum horário disponível.</h1>
              <label htmlFor="barbeiro" className="block text-sm font-medium text-[#fff] mt-5">
                Escolha outro Profissional
              </label>
              <select
                id="barbeiro"
                value={barbeiro}
                onChange={(e) => setBarbeiro(e.target.value)}
                name="barbeiro"
                className="block w-full rounded-md bg-white mt-2 px-3 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 sm:text-sm"
              >
                <option value="" disabled>
                  Escolha um profissional
                </option>
                <option value="Duh">Duh</option>
                <option value="Guto">Guto</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HorariosAgendamentos;
