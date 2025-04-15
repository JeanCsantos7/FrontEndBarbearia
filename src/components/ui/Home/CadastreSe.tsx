
import Logotipo from "../assets/OIG4.7y-removebg-preview.png"
import { useState } from "react"
import axios from "axios"


 

const Cadastro = () => {

    const[nome, setNome] = useState<string>()
    const[email, setEmail] = useState<string>()
    const[senha, setSenha] = useState<string>()
    const[confirmacao, setConfirmacao] = useState<boolean>(false)
    const[mensagemConfirmacao, setMensagemConfirmacao] = useState<string>("")




    const cadastroDados =  async (e: React.FormEvent<HTMLFormElement>) => {
         

           e.preventDefault()

        const linkAPI = 'https://back-barbearia.vercel.app/registrarClientes'
        await axios.post(linkAPI, {
            nome: nome,
           email:email,
            senha: senha
        },
        {
            headers: { 'Content-Type': 'application/json' },
        },
    )
      

        setConfirmacao(true)
        setMensagemConfirmacao('Conta Cadastrada com Sucesso')
        setNome('')
        setEmail('')
       setSenha('')

        setTimeout(() => {
          setConfirmacao(false)
          setMensagemConfirmacao('')
        }, 2000)

    }


    return(
    
<div className="flex min-h-screen flex-col justify-center lg:px-8 bg-[#f3f3f3]">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={Logotipo}
            className="mx-auto h-36 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#747474]">
            Crie sua Conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto p-[5%] sm:w-full sm:max-w-sm">
          <form onSubmit={cadastroDados} method="POST" className="space-y-6">
            <div>
              
            <label htmlFor="email" className="block text-sm/6 mt-[3%] font-medium text-[#747474]">
                Nome
              </label>
              <div className="mt-2">
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  onChange={(e) => setNome(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#000] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#747474] sm:text-sm/6"
                />
              </div>
              
              <label htmlFor="email" className="block text-sm/6 mt-[3%] font-medium text-[#747474]">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
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
                  required
                  onChange={(e) => setSenha(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#000] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#747474] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#747474] px-3 py-1.5 mt-[8%] text-sm/6 font-semibold text-[#ffffff] shadow-xs hover:bg-[#333] ease-in-out duration-500"
              >
                Crie sua Conta
              </button>

              {
             confirmacao && <p className="text-center mt-[2%]">{mensagemConfirmacao}</p> 
              }
            </div>
          </form>

        </div>
      </div>
    )




  
}

export default Cadastro