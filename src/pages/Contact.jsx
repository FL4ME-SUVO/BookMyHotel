import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero2 from '../components/Hero/Hero2';
import ContactInfo from '../components/Contact/ContactInfo';
import Footer from '../components/Footer/Footer';

function Contact() {
    return (
        <div className="contact-page">
            <Navbar />
            <Hero2
                backgroundImage="/images/bg_9.jpg"
                breadcrumb="Home / Contact"
                title="Contact Us"
            />
            <ContactInfo />
            <Footer />
        </div>
    );
}

export default Contact;