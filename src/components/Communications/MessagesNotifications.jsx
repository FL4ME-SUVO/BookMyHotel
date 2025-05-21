import React, { useState } from 'react';

const MessagesNotifications = () => {
    const [newMessage, setNewMessage] = useState({
        recipient: '', // Room No. or Guest Name or All
        subject: '',
        content: '',
    });

    const [messagesHistory, setMessagesHistory] = useState([
        { id: 'MSG001', type: 'Received', sender: 'John Doe (Room 101)', timestamp: '2025-05-20 10:30 AM', subject: 'Late Checkout Request', content: 'Hi, I would like to request a late checkout until 2 PM tomorrow.' },
        { id: 'MSG002', type: 'Sent', recipient: 'Jane Smith (Room 205)', timestamp: '2025-05-19 09:00 AM', subject: 'Welcome Message', content: 'Welcome to our hotel! We hope you enjoy your stay.' },
        { id: 'MSG003', type: 'Notification', sender: 'System', timestamp: '2025-05-18 03:00 PM', subject: 'Room 307 Cleaning Alert', content: 'Housekeeping request for Room 307 has been completed.' },
    ]);

    const handleNewMessageChange = (e) => {
        const { name, value } = e.target;
        setNewMessage(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        const message = {
            ...newMessage,
            id: `MSG${String(messagesHistory.length + 1).padStart(3, '0')}`,
            type: 'Sent',
            timestamp: new Date().toLocaleString(),
        };
        setMessagesHistory(prevHistory => [message, ...prevHistory]); // Add to top
        alert('Message sent successfully!');
        setNewMessage({ // Reset form
            recipient: '',
            subject: '',
            content: '',
        });
    };

    const getMessageTypeClass = (type) => {
        switch (type) {
            case 'Received': return 'message-received';
            case 'Sent': return 'message-sent';
            case 'Notification': return 'message-notification';
            default: return '';
        }
    };

    return (
        <div className="messages-notifications-section">
            <h3 className="section-title">Messages & Notifications</h3>
            <div className="communication-content-grid">
                <div className="message-send-card">
                    <h4>Send New Message</h4>
                    <form onSubmit={handleSendMessage} className="message-form">
                        <div className="form-group">
                            <label htmlFor="recipient">Recipient (Room No. / Guest Name / "All"):</label>
                            <input
                                type="text"
                                id="recipient"
                                name="recipient"
                                value={newMessage.recipient}
                                onChange={handleNewMessageChange}
                                placeholder="e.g., Room 101, John Doe, All Guests"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={newMessage.subject}
                                onChange={handleNewMessageChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Message Content:</label>
                            <textarea
                                id="content"
                                name="content"
                                value={newMessage.content}
                                onChange={handleNewMessageChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="action-button primary-button">Send Message</button>
                    </form>
                </div>

                <div className="messages-history-card">
                    <h4>Message History</h4>
                    {messagesHistory.length > 0 ? (
                        <div className="messages-list">
                            {messagesHistory.map(msg => (
                                <div key={msg.id} className={`message-item ${getMessageTypeClass(msg.type)}`}>
                                    <div className="message-header">
                                        <span className="message-type">{msg.type}</span>
                                        <span className="message-timestamp">{msg.timestamp}</span>
                                    </div>
                                    <div className="message-body">
                                        <strong>{msg.type === 'Sent' ? `To: ${msg.recipient}` : `From: ${msg.sender}`}</strong>
                                        <p className="message-subject">{msg.subject}</p>
                                        <p className="message-content">{msg.content}</p>
                                    </div>
                                    <div className="message-actions">
                                        <button className="action-button small-button">View Details</button>
                                        {msg.type === 'Received' && <button className="action-button small-button">Reply</button>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-data-message">No messages or notifications found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessagesNotifications;