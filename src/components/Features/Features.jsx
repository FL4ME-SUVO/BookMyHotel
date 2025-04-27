import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../../data/features';
import './Features.css';

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-container">
          {features.map(feature => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;