import React from 'react';
import Header from "../component/Header.jsx";
import Company from "../component/Company.jsx";
import Colleague from "../component/Colleague.jsx";
import Footer from "../component/Footer.jsx";

function Home() {
    return (
        <>
            <Header/>
            <Company/>
            <Colleague/>
            <Footer/>

        </>
    );
}

export default Home;