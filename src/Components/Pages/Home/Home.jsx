import Hero from './HomeComponents.jsx/Hero';
import AboutusSection from './HomeComponents.jsx/AboutusSection';
import Chefs from './HomeComponents.jsx/Chefs';
import PopularItem from './HomeComponents.jsx/PopularItem';

const Home = () => {
    return (<>
        <Hero></Hero>
        <AboutusSection></AboutusSection>
        <Chefs></Chefs>
        <PopularItem />
    </>
    );
};

export default Home;