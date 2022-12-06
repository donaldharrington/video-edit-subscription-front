import React from 'react';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/HomeTwo/HeroSlider'
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import FunFacts from '../components/About/FunFacts';
import WeProvideServices from '../components/About/WeProvideServices';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import AwardWinningMovies from '../components/Common/AwardWinningMovies';
import ContactWithUs from '../components/Common/ContactWithUs';
import PartnersStyleThree from '../components/Common/PartnersStyleThree';
import Footer from '../components/_App/Footer';

const About = () => {
    return (
        <>
            <Navbar />

            <HeroSlider />
            
            {/*             
            <PageBanner 
                pageTitle="Hello, we’re WECUT" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us" 
                imgClass="bg-1" 
            />     */}

            <AboutContent />

            <FunFacts />

            <WeProvideServices />

            <TeamStyleTwo />
            
            <ContactWithUs />

            <PartnersStyleThree />
            
            <Footer />
        </>
    )
}

export default About;