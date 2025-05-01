import React from 'react';
import './HotelManagement.css';

function HotelManagement() {
  return (
    <div className="hotel-management">
      <h1>Hotel Management</h1>
      <button className="add-button">Add New Hotel</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hotel ABC</td>
            <td>New York</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hotel XYZ</td>
            <td>London</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HotelManagement;