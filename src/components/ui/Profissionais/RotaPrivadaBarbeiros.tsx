import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RotaPrivadaBarbeiros = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const token = sessionStorage.getItem("token");
  const rotasProtegidas = ["/Barbeiros", "/Agendamento/HorariosMarcados", "/Agendamento/HorariosDisponiveis", "/Agendamento/HorariosDisponiveis/Confirmacao"];

  useEffect(() => {
 
    
    if (!rotasProtegidas.includes(location.pathname) ) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("nome");
    }
  }, [location.pathname]);
  
  return token ? children : <Navigate to={"/LoginBarbeiros"} />;
};

export default RotaPrivadaBarbeiros;
