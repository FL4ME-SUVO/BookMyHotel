import React, { useState, useEffect } from 'react';
import './Testimony.css';
import testimonials from '../../data/testimonialData';

const TestimonySection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('right');
  const styles = {color: "#f85959", fontSize: "0.9rem", letterSpacing: "1px"};

  const nextTestimonial = () => {
    setTransitionDirection('right');
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTransitionDirection('left');
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setTransitionDirection(index > currentTestimonial ? 'right' : 'left');
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimony-section">
      <div className="testimony-container">
        {/* Left - Why Choose Us */}
        <div className="left-section">
          <h4 style={styles}>Best Directory Website</h4>
          <h2>Why Choose Us?</h2>
          <p>We make hotel booking effortless with top-rated stays that match your budget and preferences. Our smart Recommender System ensures personalized suggestions, while facial recognition check-in/out adds convenience.</p>
          <p>Enjoy seamless food & beverage ordering, 24/7 dedicated support, and our Best Price Guarantee for unbeatable deals. Your comfort, our priority!</p>
          <a href="#" className="read-more">Read more</a>
        </div>

        {/* Right - Guest Says */}
        <div className="right-section">
          <h3>Testimony</h3>
          <h2>Our Guests Says</h2>
          <div className="testimony-carousel">
            <div className="carousel-wrapper">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimony-card ${
                    index === currentTestimonial ? 'active' : 
                    index === (currentTestimonial - 1 + testimonials.length) % testimonials.length ? 'left' :
                    index === (currentTestimonial + 1) % testimonials.length ? 'right' : ''
                  } ${
                    transitionDirection === 'right' ? 'slide-right' : 'slide-left'
                  }`}
                >
                  <div className="user-avatar">
                    <img src={testimonial.image} alt="Guest" />
                    <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                  </div>
                  <div className="testimony-content">
                    <p className="quote">{testimonial.quote}</p>
                    <p className="guest-name">{testimonial.name}</p>
                    <p className="guest-location">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <button className="carousel-arrow left" onClick={prevTestimonial}>
                &lt;
              </button>
              <div className="carousel-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                  />
                ))}
              </div>
              <button className="carousel-arrow right" onClick={nextTestimonial}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;