import React, { useState } from 'react';
import './BookingManagement.css';

function BookingManagement() {
  const initialBookings = [
    { id: 1, user: 'John Doe', hotel: 'Hotel ABC', status: 'Confirmed' },
    { id: 2, user: 'Jane Smith', hotel: 'Hotel XYZ', status: 'Pending' },
    { id: 3, user: 'Alice Johnson', hotel: 'Resort 123', status: 'Confirmed' },
  ];

  const [bookings, setBookings] = useState(initialBookings);

  const handleCancel = (id) => {
    setBookings(prev =>
      prev.map(booking =>
        booking.id === id ? { ...booking, status: 'Cancelled' } : booking
      )
    );
  };

  const handleModify = (id) => {
    setBookings(prev =>
      prev.map(booking =>
        booking.id === id
          ? { ...booking, status: booking.status === 'Pending' ? 'Confirmed' : 'Pending' }
          : booking
      )
    );
  };

  return (
    <div className="booking-management">
      <h1>Booking Management</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Hotel</th>
              <th>Status</th>
              <th className="actions-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.user}</td>
                <td>{booking.hotel}</td>
                <td className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </td>
                <td className="actions-cell">
                  {booking.status !== 'Cancelled' ? (
                    <>
                      <button onClick={() => handleCancel(booking.id)}>Cancel</button>
                      <button onClick={() => handleModify(booking.id)}>Modify</button>
                    </>
                  ) : (
                    <span className="na-label">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingManagement;