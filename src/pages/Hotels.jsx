import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero2 from '../components/Hero/Hero2';
import Hotel from '../components/Hotels/Hotels'
import Footer from '../components/Footer/Footer';
import FilterBar from '../components/FilterBar/FilterBar';

function Hotels() {
    return (
        <div className="about-page">
            <Navbar />
            <Hero2
                backgroundImage="/images/bg_3.jpg"
                breadcrumb="Home / Hotels"
                title="Hotels"
            />
            <FilterBar />
            <Hotel />
            <Footer />
        </div>
    );
}

export default Hotels;