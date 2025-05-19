import React, { useState } from 'react';
import './UserCheckinCheckout.css';

const UserCheckinCheckout = () => {
  // Sample reservation data
  const [reservations, setReservations] = useState([
    {
      id: 1,
      hotelName: 'Grand Hotel',
      checkInDate: '2024-05-15',
      checkOutDate: '2024-05-20',
      status: 'Not Checked In',
    },
    {
      id: 2,
      hotelName: 'Sea View Resort',
      checkInDate: '2024-06-01',
      checkOutDate: '2024-06-05',
      status: 'Checked In',
    },
  ]);

  const handleCheckIn = (id) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, status: 'Checked In' } : res
      )
    );
  };

  const handleCheckOut = (id) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, status: 'Checked Out' } : res
      )
    );
  };

  return (
    <div className="usercheckincheckout">
      <h2>Reservations</h2>
      {reservations.length === 0 ? (
        <p>You have no reservations.</p>
      ) : (
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id}>
                <td>{res.hotelName}</td>
                <td>{res.checkInDate}</td>
                <td>{res.checkOutDate}</td>
                <td>{res.status}</td>
                <td>
                  {res.status === 'Not Checked In' && (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleCheckIn(res.id)}
                    >
                      Check In
                    </button>
                  )}
                  {res.status === 'Checked In' && (
                    <button
                      className="btn btn-success"
                      onClick={() => handleCheckOut(res.id)}
                    >
                      Check Out
                    </button>
                  )}
                  {res.status === 'Checked Out' && (
                    <span>Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserCheckinCheckout;