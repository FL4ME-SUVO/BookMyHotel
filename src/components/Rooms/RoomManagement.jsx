import React, { useState } from 'react';
import RoomOverview from './RoomOverview';
import AddNewRoom from './AddNewRoom';
import './RoomsManagement.css'; // Import the CSS file

const RoomsManagement = () => {
    const [activeTab, setActiveTab] = useState('overview'); // Default active tab

    const renderComponent = () => {
        switch (activeTab) {
            case 'overview':
                return <RoomOverview />;
            case 'addNewRoom':
                return <AddNewRoom />;
            default:
                return <RoomOverview />;
        }
    };

    return (
        <div className="rooms-management-container">
            <h2 className="rooms-dashboard-title">Room Management</h2>

            <nav className="rooms-navigation">
                <button
                    className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Room Overview & Availability
                </button>
                <button
                    className={`nav-button ${activeTab === 'addNewRoom' ? 'active' : ''}`}
                    onClick={() => setActiveTab('addNewRoom')}
                >
                    Add New Room
                </button>
            </nav>

            <div className="room-content-display">
                {renderComponent()}
            </div>
        </div>
    );
};

export default RoomsManagement;