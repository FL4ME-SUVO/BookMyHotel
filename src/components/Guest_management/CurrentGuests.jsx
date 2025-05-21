import React from 'react';

const CurrentGuests = () => {
    // Dummy data for current guests
    const currentGuests = [
        { id: 1, name: 'Alice Smith', room: '101', checkin: '2025-05-19' },
        { id: 2, name: 'Bob Johnson', room: '205', checkin: '2025-05-20' },
        { id: 3, name: 'Charlie Brown', room: '310', checkin: '2025-05-18' },
    ];

    return (
        <div className="current-guests-section">
            <h3>Currently Checked-In Guests</h3>
            <div className="table-responsive">
                <table className="guest-table">
                    <thead>
                        <tr>
                            <th>Guest ID</th>
                            <th>Name</th>
                            <th>Room Number</th>
                            <th>Check-in Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentGuests.map(guest => (
                            <tr key={guest.id}>
                                <td>{guest.id}</td>
                                <td>{guest.name}</td>
                                <td>{guest.room}</td>
                                <td>{guest.checkin}</td>
                                <td>
                                    <button className="action-button view-button">View Details</button>
                                    <button className="action-button checkout-button">Check-out</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {currentGuests.length === 0 && <p className="no-data-message">No guests currently checked in.</p>}
        </div>
    );
};

export default CurrentGuests;