import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero2 from '../components/Hero/Hero2';
import Footer from '../components/Footer/Footer';


function Restaurant() {
    return (
        <div className="restaurant-page">
            <Navbar />
            <Hero2
                backgroundImage="/images/bg_10.jpg"
                breadcrumb="Home / Restaurant"
                title="Restaurant"
            />

            <Footer />
        </div>
    );
}

export default Restaurant;