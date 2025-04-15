import { Link } from "react-router-dom"


const Erro404 = () => {

    return(
        <>
        <main className="grid max-h-full w-full place-items-center bg-[#1b1b1b] px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-7xl font-semibold text-[#fff]">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-[#999999] sm:text-7xl">
            Página não encontrada
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-[#fff] sm:text-xl/8">
            Desculpe, o endereço que você buscou não existe!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
           <Link className="rounded-md bg-[#999999] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#616161] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" to={"/"}>
           Volte para Home
           </Link>

           
           
           
           
          
           <a href="#" className="text-sm  font-semibold text-[#fff] rounded-md bg-[#999999] px-3.5 py-2.5 hover:bg-[#616161]">
              Fale conosco 
             
            </a>
       
           
          </div>
        </div>
      </main>
        </>
    )

}

export default Erro404