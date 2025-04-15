import Slider from "react-slick";

import Corte1 from '../assets/IMG_7652.jpeg';
import Corte2 from '../assets/IMG_7832.jpeg';
import Corte3 from '../assets/IMG_8042.jpeg';
import Corte4 from '../assets/IMG_8185.jpeg';
import Corte5 from '../assets/IMG_8212.jpeg';
import Corte6 from '../assets/Corte1.jpeg';

interface ImagensBarbearia {
    id: number;
    imagem: any;
}

const listaImagens: ImagensBarbearia[] = [
    { id: 1, imagem: Corte1 },
    { id: 2, imagem: Corte2 },
    { id: 3, imagem: Corte3 },
    { id: 4, imagem: Corte4 },
    { id: 5, imagem: Corte5 },
    { id: 6, imagem: Corte6 },
];

export default function SliderCarrosel() {
    let settings = {
      dots: true, 
      speed: 200, 
      slidesToShow: 1, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 3500, 
      arrows: true, 
    };

    return (
      <div className="flex justify-center items-center w-full mt-[2.5%] mb-[9%]">
        <Slider {...settings} className="lg:max-w-[20vw] md: max-w-[85vw] w-full ">
          {listaImagens.map(item => (
            <div key={item.id} className="flex justify-center items-center">
              <img
                className="w-full  object-cover rounded-2xl transition-opacity duration-500 hover:opacity-80 mt-[7%] "
                src={item.imagem}
                alt={`Imagem ${item.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
}
