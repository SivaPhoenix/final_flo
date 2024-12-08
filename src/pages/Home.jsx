import React from 'react';
// import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import DomainPage from './Domain';
// import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <DomainPage/>
            {/* <Services /> */}
            {/* <Footer /> */}
        </>

    )
}

export default Home;

