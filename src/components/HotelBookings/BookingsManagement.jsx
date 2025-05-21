import React, { useState } from 'react';
import ViewAllBookings from './ViewAllBookings';
import NewBooking from './NewBooking';
import CancelModifyBooking from './CancelModifyBooking';
import './BookingsManagement.css'; 

const BookingsManagement = () => {
    const [activeTab, setActiveTab] = useState('viewAllBookings');

    const renderContent = () => {
        switch (activeTab) {
            case 'viewAllBookings':
                return <ViewAllBookings />;
            case 'newBooking':
                return <NewBooking />;
            case 'cancelModifyBooking':
                return <CancelModifyBooking />;
            default:
                return <ViewAllBookings />;
        }
    };

    return (
        <div className="bm-container">
            <h2 className="bm-title">Bookings Management</h2>
            <div className="bm-tabs">
                <button
                    className={`bm-tabButton ${activeTab === 'viewAllBookings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('viewAllBookings')}
                >
                    View All Bookings
                </button>
                <button
                    className={`bm-tabButton ${activeTab === 'newBooking' ? 'active' : ''}`}
                    onClick={() => setActiveTab('newBooking')}
                >
                    New Booking
                </button>
                <button
                    className={`bm-tabButton ${activeTab === 'cancelModifyBooking' ? 'active' : ''}`}
                    onClick={() => setActiveTab('cancelModifyBooking')}
                >
                    Cancel/Modify Booking
                </button>
            </div>
            <div className="bm-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default BookingsManagement;