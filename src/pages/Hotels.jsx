import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero2 from '../components/Hero/Hero2';
import MoreHotel from '../components/Hotels/MoreHotel'
import Footer from '../components/Footer/Footer';
import FilterBar from '../components/FilterBar/FilterBar';

function Hotels() {
    return (
        <div className="hotels-page">
            <Navbar />
            <Hero2
                backgroundImage="/Images/bg_7.jpg"
                breadcrumb="Home / Hotels"
                title="Hotels"
            />
            <FilterBar />
            <MoreHotel />
            <Footer />
        </div>
    );
}

export default Hotels;