import React, { useState } from 'react';
import './FAQSection.css';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I cancel or modify my reservation after booking?',
      answer: 'Yes, most hotels allow cancellations or modifications before a deadline.',
    },
    {
      question: 'How do I know if my booking is confirmed?',
      answer: 'You will receive a confirmation email with all booking details.',
    },
    {
      question: 'Are there any hidden charges during booking?',
      answer: 'No hidden charges, all pricing is transparent.',
    },
    {
      question: 'How can I book a hotel through your website?',
      answer: 'Search destination, pick hotel, and book easily.',
    },
    {
      question: 'Is there a refund policy for cancelled bookings?',
      answer: 'Depends on the hotel\'s individual policy.',
    },
    {
      question: 'Do you offer customer support for booking issues?',
      answer: 'Yes, our 24/7 support team is here to help.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h4>FAQs</h4>
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;