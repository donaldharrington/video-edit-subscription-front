import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioCard from '../components/PortfolioColumnsFour/PortfolioCard';
import ContactWithUs from '../components/Common/ContactWithUs';
import Footer from '../components/_App/Footer';

const PortfolioColumnsFour = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Portfolio" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio" 
                imgClass="bg-19" 
            />    

            <PortfolioCard />

            <ContactWithUs />
            
            <Footer />
        </>
    )
}

export default PortfolioColumnsFour;