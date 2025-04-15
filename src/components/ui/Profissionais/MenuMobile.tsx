import { useNavigate } from "react-router-dom";

const MenuMobile = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-center text-center w-full bg-gray-700 text-[#fff] transition-all duration-300 ease-in-out h-[200px] opacity-100">
      <ul className="transition-opacity duration-300 ease-in-out">
        <li onClick={() => navigate("/Barbeiros")} className="p-2 cursor-pointer hover:underline">
          Home
        </li>
        <li
          onClick={() => navigate("/Agendamento/HorariosDisponiveis")}
          className="p-2 cursor-pointer hover:underline"
        >
          Horários Disponíveis
        </li>
        <li
          onClick={() => navigate("/Agendamento/HorariosMarcados")}
          className="p-2 cursor-pointer hover:underline"
        >
          Horários Marcados
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
