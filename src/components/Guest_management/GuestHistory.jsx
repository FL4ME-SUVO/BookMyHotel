import React from 'react';

const GuestHistory = () => {
    // Dummy data for guest history
    const guestHistory = [
        { id: 101, name: 'David Lee', room: '102', checkin: '2025-04-10', checkout: '2025-04-15' },
        { id: 102, name: 'Eve Davis', room: '401', checkin: '2025-03-20', checkout: '2025-03-22' },
        { id: 103, name: 'Frank White', room: '203', checkin: '2025-02-01', checkout: '2025-02-05' },
        { id: 104, name: 'Grace Hall', room: '105', checkin: '2025-01-15', checkout: '2025-01-17' },
    ];

    return (
        <div className="guest-history-section">
            <h3>Guest Stay History</h3>
            <div className="table-responsive">
                <table className="guest-table">
                    <thead>
                        <tr>
                            <th>Guest ID</th>
                            <th>Name</th>
                            <th>Room Number</th>
                            <th>Check-in Date</th>
                            <th>Check-out Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guestHistory.map(guest => (
                            <tr key={guest.id}>
                                <td>{guest.id}</td>
                                <td>{guest.name}</td>
                                <td>{guest.room}</td>
                                <td>{guest.checkin}</td>
                                <td>{guest.checkout}</td>
                                <td>
                                    <button className="action-button view-button">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {guestHistory.length === 0 && <p className="no-data-message">No guest history found.</p>}
        </div>
    );
};

export default GuestHistory;