import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erro404 from "../src/components/ui/Home/Erro404";
import Home from "./pages/Home";
import LoginClientes from "./components/Agendamento/Login";
import Cadastro from "./components/ui/Home/CadastreSe";
import LoginBarbeiros from "./components/ui/Profissionais/Login";
import RotaPrivadaBarbeiros from "./components/ui/Profissionais/RotaPrivadaBarbeiros";
import Agendamentos from "./components/Agendamento/Agendamentos";
import MeusAgendamentos from "./components/Agendamento/MeusAgendamentos";
import RotasPrivadasClientes from "./components/ui/Home/RotaPrivadasClientes";
import PainelBarbeiros from "./components/ui/Profissionais/painelBarbeiros";
import HorariosLivres from "./components/Agendamento/HorariosLivres";
import HorariosMarcados from "./components/ui/Profissionais/HorariosMarcados";
import ConfirmacaoAgendamento from "./components/Agendamento/Confirmacao";
import SalvarAlteracoes from "./components/ui/Profissionais/SalvarAlteracoes";



const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Erro404 />}></Route>
          <Route path="/LoginClientes" element={<LoginClientes />}></Route>
          <Route path="/LoginBarbeiros" element={<LoginBarbeiros />}></Route>
          <Route path="/Cadastro" element={<Cadastro />}></Route>

          <Route
            path="/Barbeiros"
            element={
              <RotaPrivadaBarbeiros>
                <PainelBarbeiros />
              </RotaPrivadaBarbeiros>
            }
          />

          <Route
            path="/Agendamento"
            element={
              <RotasPrivadasClientes>
                <Agendamentos />
              </RotasPrivadasClientes>
            }
          />

          <Route
            path="/Agendamento/HorariosDisponiveis"
            element={
              <RotaPrivadaBarbeiros>
                
                <HorariosLivres/>
              </RotaPrivadaBarbeiros>
            }
          />

          <Route
            path="/Agendamento/HorariosDisponiveis/Confirmacao"
            element={
              <RotaPrivadaBarbeiros>
                
                <SalvarAlteracoes/>
              </RotaPrivadaBarbeiros>
            }
          />

          <Route
            path="/Agendamento/HorariosMarcados"
            element={
              <RotaPrivadaBarbeiros>
              
              <HorariosMarcados/>
              </RotaPrivadaBarbeiros>
            }
          />

          <Route path="/Agendamento/Confirmacao" element={
            <RotasPrivadasClientes>
              <ConfirmacaoAgendamento/>
            </RotasPrivadasClientes>
          } />


<Route
            path="/Agendamento/MeusAgendamentos"
            element={
              <RotasPrivadasClientes>
              
              <MeusAgendamentos/>
              </RotasPrivadasClientes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rotas;
