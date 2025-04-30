import React from 'react';
import Hero2 from '../components/Hero/Hero2'
import Navbar from '../components/Navbar/Navbar';
import Single from '../components/Hotels/SingleHotel'; // This should be the hotel detail view
import Footer from '../components/Footer/Footer';

function SingleHotel() {
    return (
        <>
            <Navbar />
            <Hero2
                backgroundImage="/images/bg_7.jpg"
                breadcrumb="Home / Hotels / Single Hotel"
                title="Hotel"
            />
            <main className="singlehotel-page">
                <Single />
            </main>
            <Footer />
        </>
    );
}

export default SingleHotel;
