

import SliderCarrosel from './SliderCarrosel';




const NossoTrampo = () => {
    return (
        <>
            <h1
                style={{ fontFamily: 'Bebas Neue, serif' }}
                className="text-[#fff] text-center mt-12 lg:text-7xl md: text-6xl"
            >
                Nosso Trampo
            </h1>
            <h2 className="text-center  text-[#fff]">
                Conheça um pouco mais de nosso trabalho
            </h2>
          
            <div className="flex justify-center items-center w-full mt-[2%]">
              <SliderCarrosel/>
            </div>
        </>
    );
};

export default NossoTrampo;
