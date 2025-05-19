import React from 'react';
import './MyBookings.css';

const MyBookings = () => {
  // Sample bookings data
  const bookings = [
    {
      id: 1,
      hotelName: 'Grand Hotel',
      date: '2024-05-15',
      status: 'Confirmed',
    },
    {
      id: 2,
      hotelName: 'Sea View Resort',
      date: '2024-06-10',
      status: 'Pending',
    },
    // Add more bookings as needed
  ];

  return (
    <div className="mybookings">
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings.</p>
      ) : (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.hotelName}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBookings;