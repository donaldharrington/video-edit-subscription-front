import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import LoginForm from '../components/MyAccount/LoginForm';
import Footer from '../components/_App/Footer';

const MyAccount = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="User Login" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="User Login" 
                imgClass="bg-15" 
            />    

            <LoginForm />
            
            <Footer />
        </>
    )
}

export default MyAccount;