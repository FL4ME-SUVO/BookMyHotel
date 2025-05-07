import React, { useEffect, useRef } from 'react';
import './FunFactsSection.css';

const countersData = [
  { number: 100000, label: 'Happy Customers' },
  { number: 40000, label: 'Destination Places' },
  { number: 87000, label: 'Hotels' },
  { number: 56400, label: 'Restaurants' },
];

const FunFactsSection = () => {
  const sectionRef = useRef(null);  // Reference for the section to observe

  useEffect(() => {
    const formatNumber = (number) => {
      return number.toLocaleString();
    };

    const updateCounter = (counter) => {
      const target = +counter.getAttribute('data-number');
      const count = +counter.innerText.replace(/,/g, '');
      const increment = target / 200;

      if (count < target) {
        const newCount = Math.min(count + increment, target);
        counter.innerText = formatNumber(Math.ceil(newCount));
        requestAnimationFrame(() => updateCounter(counter));
      } else {
        counter.innerText = formatNumber(target);
      }
    };

    const counters = document.querySelectorAll('.number');
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            updateCounter(counter);
          });
          observer.disconnect();  // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,  // Trigger when 50% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      ref={sectionRef}  // Add the reference here
      style={{ backgroundImage: 'url(Images/bg_4.jpg)' }}
    >
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="mb-4">Some fun facts</h2>
          <span className="subheading">More than 100,000 websites hosted</span>
        </div>

        <div className="counters-wrapper">
          {countersData.map((counter, index) => (
            <div className="counter-card" key={index}>
              <strong className="number" data-number={counter.number}>0</strong>
              <span>{counter.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
