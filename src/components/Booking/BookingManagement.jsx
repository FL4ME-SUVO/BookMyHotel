import React from 'react';
import './BookingManagement.css';

function BookingManagement() {
  return (
    <div className="booking-management">
      <h1>Booking Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Hotel</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Hotel ABC</td>
            <td>Confirmed</td>
            <td>
              <button>Cancel</button>
              <button>Modify</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Hotel XYZ</td>
            <td>Pending</td>
            <td>
              <button>Cancel</button>
              <button>Modify</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookingManagement;