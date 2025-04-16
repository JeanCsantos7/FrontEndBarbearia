import Logotipo from "../ui/assets/OIG4.7y-removebg-preview.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";




const LoginClientes = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<boolean>(true);
  const[mensagemErro, setMensagemErro] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
   



    try {
      const response = await axios.post(
        "https://barbearia-backend-six.vercel.app/loginClientes", 
        { email, senha }
      );
  
      const { token, role, nome } = response.data;
  

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", role);
      sessionStorage.setItem("nome", nome);
  
      const permissao = sessionStorage.getItem("role");
 
      
setTimeout(() => {
  permissao === "user" ? navigate("/Agendamento") : navigate("/LoginClientes");
  
}, 3650)

    

    
  
    } 
    
    
    catch (error: any) {
      
      
      setErro(false)
      setMensagemErro("ERRO AO TENTAR LOGAR")
    }
  };
  

  return (
    <div className="flex min-h-screen flex-col justify-center lg:px-8 bg-[#f3f3f3]">
      <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={Logotipo}
          className="mx-auto h-36 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#747474]">
          Entre na Sua conta
        </h2>
      </div>

      <div className="mt-10  sm:mx-auto p-[5%]  sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-[#747474]">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#000] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#747474] sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-[#747474]">
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#000] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#747474] sm:text-sm/6"
              />
            </div>
          </div>

          {erro && <div className="text-red-500 text-sm">{mensagemErro}</div>
          
          
          }

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#747474] px-3 py-1.5 text-sm/6 font-semibold text-[#ffffff] shadow-xs hover:bg-[#333] ease-in-out duration-500"
            >
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-[#000]">
          Ainda não tem uma conta{' '}
          <a href="#" className="font-semibold text-[#747474] hover:bg-[#616161]" onClick={() => navigate("/Cadastro")}>
            Clique aqui e Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginClientes;
