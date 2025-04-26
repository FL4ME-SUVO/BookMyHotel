import React, { useRef, useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';
import { destinations } from '../../data/destinations';
import './Destinations.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Destinations() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false); // Wait until refs are mounted

  useEffect(() => {
    setIsReady(true); // Trigger swiper re-init after refs are set
  }, []);

  return (
    <section className="destinations-section">
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-title">
          <p className="section-subtitle">Featured</p>
          <h2 className="section-heading"><strong>Featured</strong> Destination</h2>
        </div>

        {/* Navigation Arrows */}
        <div className="slider-navigation">
          <button ref={prevRef} className="custom-prev">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button ref={nextRef} className="custom-next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Slider */}
        {isReady && (
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {destinations.map(destination => (
              <SwiperSlide key={destination.id}>
                <DestinationCard
                  name={destination.name}
                  image={destination.image}
                  listingCount={destination.listingCount}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default Destinations;
