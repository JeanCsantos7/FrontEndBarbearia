
import Slider from "react-slick";
import Corte1 from '../assets/Corte1Duh.jpg';
import Corte2 from '../assets/Corte2Duh.jpg';
import Corte3 from '../assets/Corte3Duh.jpg';
import Corte4 from '../assets/Corte4Duh.webp';


interface ImagensBarbearia {
    id: number;
    imagem: any;
}


const listaImagens: ImagensBarbearia[] = [
    { id: 1, imagem: Corte1 },
    { id: 2, imagem: Corte2 },
    { id: 3, imagem: Corte3 },
    { id: 4, imagem: Corte4 },
];


const TrabalhosDuh = () => {
   


    let settings = {
        dots: true, 
        speed: 450, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
        arrows: true, 
      };


    return (
        <>
           <div className="flex justify-center items-center w-full mt-[3%] mb-[9%] ">
        <Slider {...settings} className="lg:max-w-[20vw] md: max-w-[85vw] w-full  ">
          {listaImagens.map(item => (
            <div key={item.id} className="flex justify-center items-center ">
              <img
                className="w-full  object-cover rounded-2xl transition-opacity duration-500 hover:opacity-80 "
                src={item.imagem}
                alt={`Imagem ${item.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
  
        </>
    );
};

export default TrabalhosDuh;
