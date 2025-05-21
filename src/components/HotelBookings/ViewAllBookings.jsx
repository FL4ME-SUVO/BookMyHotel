import React from 'react';

const ViewAllBookings = () => {
    // Dummy data for bookings
    const allBookings = [
        {
            bookingId: 'BKG001',
            guestName: 'John Doe',
            roomNumber: '101',
            checkinDate: '2025-05-25',
            checkoutDate: '2025-05-28',
            status: 'Confirmed'
        },
        {
            bookingId: 'BKG002',
            guestName: 'Jane Smith',
            roomNumber: '203',
            checkinDate: '2025-06-01',
            checkoutDate: '2025-06-05',
            status: 'Pending'
        },
        {
            bookingId: 'BKG003',
            guestName: 'Peter Jones',
            roomNumber: '307',
            checkinDate: '2025-05-20',
            checkoutDate: '2025-05-22',
            status: 'Checked-out'
        },
        {
            bookingId: 'BKG004',
            guestName: 'Alice Brown',
            roomNumber: '110',
            checkinDate: '2025-07-10',
            checkoutDate: '2025-07-15',
            status: 'Confirmed'
        },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Confirmed':
                return 'status-confirmed';
            case 'Pending':
                return 'status-pending';
            case 'Checked-out':
                return 'status-checkedout';
            case 'Cancelled':
                return 'status-cancelled';
            default:
                return '';
        }
    };

    return (
        <div className="view-all-bookings-section">
            <h3>All Hotel Bookings</h3>
            <div className="table-responsive">
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Guest Name</th>
                            <th>Room No.</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allBookings.length > 0 ? (
                            allBookings.map(booking => (
                                <tr key={booking.bookingId}>
                                    <td>{booking.bookingId}</td>
                                    <td>{booking.guestName}</td>
                                    <td>{booking.roomNumber}</td>
                                    <td>{booking.checkinDate}</td>
                                    <td>{booking.checkoutDate}</td>
                                    <td>
                                        <span className={`booking-status ${getStatusClass(booking.status)}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="action-button view-button">View</button>
                                        <button className="action-button modify-button">Modify</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="no-data-message">No bookings found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewAllBookings;