import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero2 from '../components/Hero/Hero2';
import Footer from '../components/Footer/Footer';
import RestaurantList from '../components/Restaurant/Restaurant'; // renamed for clarity

function RestaurantPage() {
    return (
        <div className="restaurant-page">
            <Navbar />
            <Hero2
                backgroundImage="/images/bg_10.jpg"
                breadcrumb="Home / Restaurant"
                title="Restaurant"
            />
            <RestaurantList /> {/* render the list of restaurants */}
            <Footer />
        </div>
    );
}

export default RestaurantPage;