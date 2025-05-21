import React from 'react';
import MessagesNotifications from './MessagesNotifications';
import CallLogRequests from './CallLogRequests';
import './CommunicationManagement.css'; // Import the CSS file

const CommunicationManagement = () => {
    return (
        <div className="communication-dashboard">
            <h2 className="communication-dashboard-title">Communication Hub</h2>

            {/* Messages / Notifications Section */}
            <section className="dashboard-section messages-notifications-section-container">
                <MessagesNotifications />
            </section>

            {/* Call Log / Requests Section */}
            <section className="dashboard-section call-log-requests-section-container">
                <CallLogRequests />
            </section>
        </div>
    );
};

export default CommunicationManagement;