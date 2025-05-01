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
    <div className="booking-management__container">
      <h1 className="booking-management__title">Booking Management</h1>
      <div className="booking-management__table-wrapper">
        <table className="booking-management__table">
          <thead>
            <tr>
              <th className="booking-management__th">ID</th>
              <th className="booking-management__th">User</th>
              <th className="booking-management__th">Hotel</th>
              <th className="booking-management__th">Status</th>
              <th className="booking-management__th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr className="booking-management__row" key={booking.id}>
                <td className="booking-management__td">{booking.id}</td>
                <td className="booking-management__td">{booking.user}</td>
                <td className="booking-management__td">{booking.hotel}</td>
                <td className={`booking-management__td booking-management__status--${booking.status.toLowerCase()}`}>
                  {booking.status}
                </td>
                <td className="booking-management__td booking-management__td-actions">
                  {booking.status !== 'Cancelled' ? (
                    <>
                      <button
                        onClick={() => handleCancel(booking.id)}
                        className="booking-management__cancel-btn"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleModify(booking.id)}
                        className="booking-management__modify-btn"
                      >
                        Modify
                      </button>
                    </>
                  ) : (
                    <span className="booking-management__na-label">N/A</span>
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
