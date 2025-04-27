import React, { useState } from 'react';
import './MissionGoals.css';

function MissionGoals() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="mission-goals-section">
      <div className="mission-goals-container">

        {/* Tabs */}
        <div className="tabs-right">
          <button 
            className={activeTab === 'mission' ? 'active' : ''}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </button>
          <button 
            className={activeTab === 'goal' ? 'active' : ''}
            onClick={() => setActiveTab('goal')}
          >
            Our Goal
          </button>
          <button 
            className={activeTab === 'whatwedo' ? 'active' : ''}
            onClick={() => setActiveTab('whatwedo')}
          >
            What We Do
          </button>
        </div>

        {/* Content */}
        <div className="mission-goals-content">
          <div className="mission-goals-image">
            <img src="/images/about.jpeg" alt="Handshake" />
          </div>
          <div className="mission-goals-text">
            {activeTab === 'mission' && (
              <>
                <h3>Reliable Hosting You Can Trust</h3>
                <p>
                  In a world not so far away, beyond the buzz of crowded listings and noisy platforms,
                  lies a place of seamless stays and trusted hospitality. Here, hosts and travelers
                  connect effortlessly — where comfort meets convenience, and service meets sincerity.
                </p>
                <p>
                  Experience smooth bookings, honest listings, and a space built for genuine getaways.
                  Whether you're welcoming guests or finding your perfect stay — you're in good hands.
                </p>
              </>
            )}
            {activeTab === 'goal' && (
              <>
                <h3>Building Connections, One Stay at a Time</h3>
                <p>
                  Our goal is to create memorable experiences through authentic stays and exceptional service.
                  We aim to connect travelers and hosts by simplifying the booking process and maintaining
                  high standards of quality and trust.
                </p>
                <p>
                  We envision a world where every trip feels like home and every host feels empowered.
                </p>
              </>
            )}
            {activeTab === 'whatwedo' && (
              <>
                <h3>What We Do</h3>
                <p>
                  We bridge the gap between hosts and travelers by providing a trusted platform that ensures safety,
                  transparency, and a seamless booking experience. Our team works tirelessly to bring you curated listings,
                  authentic reviews, and community support.
                </p>
                <p>
                  We empower hosts to deliver unforgettable stays and help travelers find the perfect homes away from home.
                </p>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default MissionGoals;
