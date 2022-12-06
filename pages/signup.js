import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SignupForm from '../components/MyAccount/SignupForm';
import Footer from '../components/_App/Footer';

const MyAccount = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Sign UP" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign UP" 
                imgClass="bg-15" 
            />    

            <SignupForm />
            
            <Footer />
        </>
    )
}

export default MyAccount;