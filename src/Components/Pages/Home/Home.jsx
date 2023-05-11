import React, { useEffect, useState } from 'react';

import Hero from './HomeComponents.jsx/Hero';
import AboutusSection from './HomeComponents.jsx/AboutusSection';
import Chefs from './HomeComponents.jsx/Chefs';

const Home = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("https://server-detectiveseo.vercel.app/chefs")
        .then((res) => res.json())
        .then(data => setChefs(data))
    }, [])

    return (<>
        <Hero></Hero>
        <AboutusSection></AboutusSection>
        <Chefs chefs={chefs}></Chefs>
    </>
    );
};

export default Home;