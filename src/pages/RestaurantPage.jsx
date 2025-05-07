import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero2 from '../components/Hero/Hero2';
import FilterBar from '../components/FilterBar/FilterBar';
import Footer from '../components/Footer/Footer';
import RestaurantList from '../components/Restaurant/Restaurant'; 

function RestaurantPage() {
    return (
        <div className="restaurant-page">
            <Navbar />
            <Hero2
                backgroundImage="/Images/bg_10.jpg"
                breadcrumb="Home / Restaurant"
                title="Restaurant"
            />
            <FilterBar />
            <RestaurantList /> {/* render the list of restaurants */}
            <Footer />
        </div>
    );
}

export default RestaurantPage;