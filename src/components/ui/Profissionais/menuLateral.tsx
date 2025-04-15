import Logotipo from "../assets/OIG4.7y-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const MenuLateral = () => {


  const navigate = useNavigate()

    return(
        <>
           <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 bg-dark-background shadow-lg"
      >
        <div className="h-full p-4 overflow-y-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <img
                src={Logotipo}
                className="w-24 h-24 bg-white object-cover rounded-full"
                alt="Logo"
              />
            </div>
            <ul className="mt-[8%] text-center w-full space-y-4">
              <li onClick={() => navigate("/Barbeiros")} className="block text-left items-center text-white p-3 rounded-lg hover:bg-primary hover:text-secondary-text transition">
                
                  Home
             
              </li>
              <li onClick={() => navigate("/Agendamento/HorariosDisponiveis")}  className="block text-left items-center text-white p-3 rounded-lg hover:bg-primary hover:text-secondary-text transition">
             
              
                 
              
                  Horários Disponíveis
           
              </li>
              <li onClick={() => navigate("/Agendamento/HorariosMarcados")}   className="block text-left items-center text-white p-3 rounded-lg hover:bg-primary hover:text-secondary-text transition">
          
                 
                
                
                  Horários Marcados
            
              </li>
            </ul>
          </div>
        </div>
      </aside>
        </>
    )

}

export default MenuLateral