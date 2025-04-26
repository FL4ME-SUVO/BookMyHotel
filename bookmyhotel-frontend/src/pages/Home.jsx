import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Destinations from '../components/Destinations/Destinations';
import Hotels from '../components/Hotels/Hotels';
import Testimony from '../components/Testimony/TestimonySection';
import Footer from '../components/Footer/Footer';
import Funviews from '../components/Funviews/FunFactsSection';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <Funviews />
      <Hotels />
      <Testimony />
      <Footer />
    </div>
  );
}

export default Home;
