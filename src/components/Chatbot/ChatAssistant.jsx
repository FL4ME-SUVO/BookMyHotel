import React, { useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import './ChatAssistant.css';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello there! I'm Hospy, your hotel management assistant. How can I help you today?",
      quickReplies: [
        "Recommendation system",
        "Facial recognition",
        "Room assignment",
        "Multi-property",
        "Analytics"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const botResponses = {
    "recommendation system": "Our smart recommendation system analyzes guest preferences, booking patterns, and real-time availability to suggest perfect hotel matches. It learns from each interaction to provide increasingly personalized suggestions!",
    "facial recognition": "Our contactless facial recognition enables seamless check-in/out, personalized room access, and VIP recognition. Guests love the convenience and staff appreciate the efficiency boost!",
    "room assignment": "The AI-powered room assignment considers guest preferences, maintenance needs, and operational efficiency. It can automatically upgrade loyal guests or group families together!",
    "multi-property": "You can manage all your properties from one dashboard while maintaining unique branding for each. The system provides both consolidated reports and property-specific insights!",
    "analytics": "Get real-time insights on occupancy, revenue, guest satisfaction, and staff performance. Our predictive analytics can forecast trends up to 12 months in advance!",
    "default": "I can help with information about our recommendation system, facial recognition features, smart room assignment, multi-property management, and analytics capabilities. What would you like to know more about?"
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
    };
    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate bot typing
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: getBotResponse(inputValue.toLowerCase()),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleQuickReply = (reply) => {
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: reply,
    };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: getBotResponse(reply.toLowerCase()),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const getBotResponse = (input) => {
    for (const [key, value] of Object.entries(botResponses)) {
      if (input.includes(key)) {
        return value;
      }
    }
    return botResponses.default;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={`chat-assistant ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-title">
              <div className="avatar">
                <FaRobot className="chat-icon" />
              </div>
              <div>
                <h3>Hospy Assistant</h3>
                <p className="status">Online</p>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>
          
          <div className="chat-body">
            <div className="messages-container">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`message ${message.sender}`}
                >
                  {message.sender === 'bot' ? (
                    <div className="avatar">
                      <FaRobot className="chat-icon" />
                    </div>
                  ) : (
                    <div className="avatar user">
                      <FaUser className="chat-icon" />
                    </div>
                  )}
                  <div className="message-content">
                    <div className="message-text">{message.text}</div>
                    {message.quickReplies && (
                      <div className="quick-replies">
                        {message.quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            className="quick-reply"
                            onClick={() => handleQuickReply(reply)}
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="chat-input">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
              />
              <button className="send-btn" onClick={handleSendMessage}>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button className="chat-toggle-btn" onClick={toggleChat}>
          <div className="pulse-dot"></div>
          <FaRobot className="chat-icon" />
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;