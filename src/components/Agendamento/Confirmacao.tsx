
import { useNavigate } from "react-router-dom";

const ConfirmacaoAgendamento = () => {
  
  const navigate = useNavigate()
  
    return (
    <>
      <div id="alert-additional-content-1" className="m-auto p-4 lg:w-[30%] lg:mt-[15%] text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800  w-[87.5%] mt-[55%] " role="alert">
        <div className="flex items-center">
          <svg className="shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <h3 className="text-lg font-medium">Seu agendamento Foi realizado com sucesso!!</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          Se deseja agendar outro horário ou verificar seus horários agendados clique nos botões abaixo.
        </div>
        <div className="flex">
          <button type="button" onClick={() => navigate("/Agendamento")} className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          
            Agendar novamente
          </button>

          <button type="button" onClick={() => navigate("/Agendamento/MeusAgendamentos")} className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           
            Meus Agendamentos
          </button>
       
        </div>
      </div>

     

     
    </>
  );
};

export default ConfirmacaoAgendamento;
