import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import Modal from "react-modal";
import MenuLateral from "../ui/Profissionais/menuLateral";
import MenuMobile from "../ui/Profissionais/MenuMobile";
import { CiMenuBurger } from "react-icons/ci";
import { BsTrash3Fill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface DadosAPI {
  id: number;
  data: string;
  horario: string;
}

const HorariosLivres = () => {
  const [datas, setDatas] = useState<DadosAPI[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [formularioEdicao, setFormularioEdicao] = useState(false);
  const [exibicaoHorarios, setExibicaoHorarios] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [id, setID] = useState<number>(0);
  const [editarData, setEditarData] = useState("");
  const [editarHorario, setEditarHorario] = useState("");


  const regra = sessionStorage.getItem("role");
  const barbeiro = sessionStorage.getItem("nome");
  const navigate = useNavigate();


  const readAPI = () => {

    axios
    .get(`https://barbearia-backend-six.vercel.app/listaHorarios/${barbeiro}`)
    .then((response) => {
      const datasFormatadas = response.data.map((date: DadosAPI) => ({
        ...date,
        data: dayjs(date.data).locale("pt-br").format("DD/MM/YYYY"),
      }));
      setDatas(datasFormatadas);
    })
    .catch((error) => console.error(error));
  }


  useEffect(() => {
    
   
    readAPI()
    
  }, [barbeiro]);

  const openModal = (id: number) => {
    setSelectedId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedId(null);
  };

  const mudarRota = () => {
    navigate("/LoginBarbeiros");
    sessionStorage.clear();
  };

  const deletarHorarios = async () => {
    if (selectedId) {
      try {
        await axios.delete(`https://barbearia-backend-six.vercel.app//deletarHorarios/${selectedId}`);
        setDatas(datas.filter((item) => item.id !== selectedId));
        closeModal();
      } catch (error) {
        console.error("Erro ao deletar horário:", error);
      }
    }
  };

  const Editar = async (id: number) => {
    try {
      await axios.put(`https://barbearia-backend-six.vercel.app/editarHorarios/${id}`, {
        data: editarData,
        horario: editarHorario,
      },

      {
        headers: { 'Content-Type': 'application/json' },
    },
    
    
    )
      setFormularioEdicao(!formularioEdicao);
  
      setExibicaoHorarios(!exibicaoHorarios);
      
      
      



      readAPI()

      
    } catch (error) {
      console.error(error);
    }
  };

  const atualizarDados = (editar: DadosAPI) => {
    setID(editar.id);
    setEditarData(editar.data);
    setEditarHorario(editar.horario);
    setFormularioEdicao(true);
    setExibicaoHorarios(false);
  };





  return (
    <div className="flex flex-col justify-center items-center ">
     
     <div className="hidden lg:block">{regra === "admin" && <MenuLateral />}</div>

  
      <div className="lg:hidden flex items-center justify-between w-full mt-[3%] p-[3%]">
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

      <div
        className={`transition-all w-full  p-[0.1%] duration-300 ease-in-out ${toggleMenu ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"}`}
      >
        <MenuMobile />
      </div>

     

      {exibicaoHorarios && (
        
        
         <div className="w-[88vw] mt-[8%] md:w-[22vw]  max-w-lg min-h-[400px] bg-[#1e1e1e] shadow-lg rounded-xl p-6 overflow-auto">
        <h2 className="text-white font-semibold text-md text-center mt-4">
          Horários Disponíveis:
        </h2>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="bg-white p-6 rounded-lg w-[90%] max-w-md mx-auto"
          overlayClassName="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">
              Tem certeza que deseja deletar esse horário?
            </h1>
            <button
              onClick={closeModal}
              className="text-black text-xl font-bold"
            >
              X
            </button>
          </div>
          <div className="flex justify-end">
            <button
              onClick={deletarHorarios}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Confirmar
            </button>
          </div>
        </Modal>

        <div className="flex flex-col gap-4 mt-6">
          
        
          
          
          
       
          
          {datas.map((response) => (
            <div
              key={response.id}
              className="flex items-center justify-between p-2  rounded-lg"
            >
              <button className="bg-[#e7e7e7] flex-1 h-12 rounded-2xl text-center font-semibold mx-1">
                {response.data}
              </button>
              <span className="text-white">-</span>
              <button className="bg-[#e7e7e7] flex-1 h-12 rounded-2xl text-center font-semibold mx-1">
                {response.horario}
              </button>
              {regra === "admin" && (
                <div className="flex items-center gap-3 ml-2">
                  <BsTrash3Fill
                    onClick={() => openModal(response.id)}
                    className="text-[#f01e1e] text-2xl cursor-pointer"
                  />
                  <FaPencilAlt onClick={() => atualizarDados(response)} className="text-green-500 text-2xl cursor-pointer" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      )}

      {formularioEdicao && (
        <form onSubmit={(e) => { e.preventDefault(); Editar(id); }}>
          <div className="w-[85vw] mt-[8%] lg:w-[20vw] m min-h-[415px] bg-[#1e1e1e] shadow-lg rounded-xl p-6 overflow-auto">
            <h2 className="text-white font-semibold text-md text-center mt-4">Editar Horário:</h2>
            
            <div className="flex justify-center items-center mt-2">
              <input
                value={editarData}
                onChange={(e) => setEditarData(e.target.value)}
                type="date"
                required
                className="outline-none font-Poppins block w-[95%] mt-[6%] h-12 rounded-md border p-3 bg-[#FFF] text-gray-900 shadow-sm"
              />
            </div>
            <div className="flex justify-center items-center mt-2">
              <input
                value={editarHorario}
                onChange={(e) => setEditarHorario(e.target.value)}
                type="time"
                required
                className="outline-none font-Poppins block w-[95%] mt-[8%] h-12 rounded-md border p-3 bg-[#FFF] text-gray-900 shadow-sm"
              />
            </div>

            <button type="submit" onClick={() => navigate("/Agendamento/HorariosDisponiveis/Confirmacao")}  className=" outline-none font-Poppins block w-[95%] mt-[12%] h-12 rounded-md  p-3 bg-[#999999] hover:bg-[#616161]  focus-visible:outline-offset-2 text-[#fff]  m-auto">Salvar</button>
             
          
          
          </div>
        
          

          
        </form>
      )}


          

    

 
    
 

    </div>
  );
};

export default HorariosLivres;
