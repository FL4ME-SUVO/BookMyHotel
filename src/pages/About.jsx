import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero2 from '../components/Hero/Hero2';
import Mission from '../components/Mission/MissionGoals';
import FAQs from '../components/FAQs/FAQSection';
import Footer from '../components/Footer/Footer';

function About() {
    return (
        <div className="about-page">
            <Navbar />
            <Hero2 
                backgroundImage="/images/bg_5.jpg" 
                breadcrumb="Home / About" 
                title="About Us" 
            />
            <Mission />
            <FAQs />
            <Footer />
        </div>
    );
}

export default About;