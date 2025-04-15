import Header from '../components/ui/Header/Header';
import BannerTopo from '../components/ui/Home/BannerTopo';
import Serviços from './Serviços';
import Avaliações from '../components/ui/Home/Avaliações';
import Profissionais from './Profissionais';
import Sobre from './Sobre';
import NossoTrampo from '../components/ui/Home/NossoTrampo';
import Footer from '../components/ui/Home/Footer';
import NossaUnidade from '../components/ui/Home/NossaUnidade';





const Home = () => {
    return (
        <>
            
          

            <Header />
            <BannerTopo />
            <Sobre />
            <Serviços />
            <Profissionais />

            <NossoTrampo />
            <NossaUnidade />
            <Avaliações />

            <Footer />
            
            

        
            
       
        </>
    );
};

export default Home;
