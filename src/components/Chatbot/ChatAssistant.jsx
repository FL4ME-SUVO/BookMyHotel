import React, { useState } from 'react';
import { FaRobot, FaTimes, FaChevronDown } from 'react-icons/fa';
import './ChatAssistant.css';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "How does the hotel recommendation system work?",
      answer: "Our system uses AI to analyze guest preferences, booking history, and real-time availability to suggest the most suitable hotels. It considers factors like location, amenities, price range, and previous guest reviews."
    },
    {
      id: 2,
      question: "What facial recognition features are available?",
      answer: "Our facial recognition system enables contactless check-in/out, personalized room access, and enhanced security. Guests can opt-in during booking and complete verification at our kiosks or via our mobile app."
    },
    {
      id: 3,
      question: "How does smart room assignment work?",
      answer: "The system automatically assigns rooms based on guest preferences, loyalty status, and current occupancy. It optimizes for operational efficiency while ensuring the best possible guest experience."
    },
    {
      id: 4,
      question: "Can I manage multiple properties with this system?",
      answer: "Yes, our platform supports multi-property management with centralized controls and property-specific customization. You can view analytics and manage operations across all properties from one dashboard."
    },
    {
      id: 5,
      question: "What analytics features are included?",
      answer: "The system provides real-time occupancy rates, revenue forecasts, guest satisfaction trends, and staff performance metrics. Custom reports can be generated for any time period or property."
    }
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveQuestion(null);
    }
  };

  const handleQuestionClick = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className={`chat-assistant ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-title">
              <FaRobot className="chat-icon" />
              <h3>Hospy</h3>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>
          
          <div className="chat-body">
            <div className="welcome-message">
              <p>Hello! I'm your Assistant Hospy. Here are some common questions about our Queries:</p>
            </div>
            
            <div className="questions-list">
              {questions.map((item) => (
                <div 
                  key={item.id} 
                  className={`question-item ${activeQuestion === item.id ? 'active' : ''}`}
                  onClick={() => handleQuestionClick(item.id)}
                >
                  <div className="question-header">
                    <span>{item.question}</span>
                    <FaChevronDown className={`toggle-icon ${activeQuestion === item.id ? 'open' : ''}`} />
                  </div>
                  {activeQuestion === item.id && (
                    <div className="answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <button className="chat-toggle-btn" onClick={toggleChat}>
          <FaRobot className="chat-icon" />
          <span>Need Help?</span>
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;