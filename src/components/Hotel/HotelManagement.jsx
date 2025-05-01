import React from 'react';
import './HotelManagement.css';

function HotelManagement() {
  return (
    <div className="hotel-management__container">
      <h1 className="hotel-management__title">Hotel Management</h1>
      <button className="hotel-management__add-btn">Add New Hotel</button>
      <div className="hotel-management__table-wrapper">
        <table className="hotel-management__table">
          <thead>
            <tr>
              <th className="hotel-management__th">ID</th>
              <th className="hotel-management__th">Name</th>
              <th className="hotel-management__th">Location</th>
              <th className="hotel-management__th">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hotel-management__row">
              <td className="hotel-management__td">1</td>
              <td className="hotel-management__td">Hotel ABC</td>
              <td className="hotel-management__td">Simla</td>
              <td className="hotel-management__td-actions">
                <button className="hotel-management__edit-btn">Edit</button>
                <button className="hotel-management__delete-btn">Delete</button>
              </td>
            </tr>
            <tr className="hotel-management__row">
              <td className="hotel-management__td">2</td>
              <td className="hotel-management__td">Hotel XYZ</td>
              <td className="hotel-management__td">Manali</td>
              <td className="hotel-management__td-actions">
                <button className="hotel-management__edit-btn">Edit</button>
                <button className="hotel-management__delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HotelManagement;