import React, { useState } from 'react';
import CurrentGuests from './CurrentGuests';
import GuestHistory from './GuestHistory';
import WalkinRegistration from './WalkinRegistration';
import './GuestManagement.css'; // Import the CSS file

const GuestManagement = () => {
    const [activeTab, setActiveTab] = useState('currentGuests');

    const renderContent = () => {
        switch (activeTab) {
            case 'currentGuests':
                return <CurrentGuests />;
            case 'guestHistory':
                return <GuestHistory />;
            case 'walkinRegistration':
                return <WalkinRegistration />;
            default:
                return <CurrentGuests />;
        }
    };

    return (
        <div className="guest-management-container">
            <h2 className="guest-management-title">Guest Management</h2>
            <div className="guest-management-tabs">
                <button
                    className={`tab-button ${activeTab === 'currentGuests' ? 'active' : ''}`}
                    onClick={() => setActiveTab('currentGuests')}
                >
                    Current Guests
                </button>
                <button
                    className={`tab-button ${activeTab === 'guestHistory' ? 'active' : ''}`}
                    onClick={() => setActiveTab('guestHistory')}
                >
                    Guest History
                </button>
                <button
                    className={`tab-button ${activeTab === 'walkinRegistration' ? 'active' : ''}`}
                    onClick={() => setActiveTab('walkinRegistration')}
                >
                    Walk-in Registration
                </button>
            </div>
            <div className="guest-management-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default GuestManagement;