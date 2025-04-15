
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";


const SalvarAlteracoes = () => {

    const navigate = useNavigate()
    useEffect(() => {

      setTimeout(() => {
       
        navigate("/Agendamento/HorariosDisponiveis")

      }, 2200)

    }, [] )
   

 return(
    <>
    <div id="alert-additional-content-1" className="m-auto p-4 w-[22%] h-[15vh] mt-[15%] text-[#fff]  rounded-lg bg-green-400 " role="alert">
        <div className="flex items-center">
          <svg className="shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <h3 className="text-lg font-medium">As alterações foram salvas com sucesso!</h3>
        </div>
   
      </div>

    
    </>
 )

}


export default SalvarAlteracoes