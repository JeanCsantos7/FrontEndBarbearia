import { useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"

type Props = {
   children: JSX.Element
}

const RotasPrivadasClientes = ({ children }: Props) => {
  const location = useLocation()
  const rotasAceitas = ["/Agendamento", "/Agendamento/Confirmacao", "/Agendamento/MeusAgendamentos"]
  
  const token = sessionStorage.getItem("token")

  useEffect(() => {
    
    if (!rotasAceitas.includes(location.pathname)) {
      sessionStorage.removeItem("token")
    }
  }, [location.pathname])

  return token ? children : <Navigate to={"/LoginClientes"} />
}

export default RotasPrivadasClientes
