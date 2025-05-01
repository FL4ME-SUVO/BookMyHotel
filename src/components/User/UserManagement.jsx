import React from 'react';
import './UserManagement.css';

function UserManagement() {
  return (
    <div className="user-management__container">
      <h1 className="user-management__title">User Management</h1>
      <div className="user-management__table-wrapper">
        <table className="user-management__table">
          <thead>
            <tr>
              <th className="user-management__th">ID</th>
              <th className="user-management__th">Name</th>
              <th className="user-management__th">Email</th>
              <th className="user-management__th">Role</th>
              <th className="user-management__th">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="user-management__row">
              <td className="user-management__td">1</td>
              <td className="user-management__td">John Doe</td>
              <td className="user-management__td">john@example.com</td>
              <td className="user-management__td">User</td>
              <td className="user-management__td user-management__td-actions">
                <button className="user-management__block-btn">Block</button>
                <button className="user-management__role-btn">Assign Role</button>
              </td>
            </tr>
            <tr className="user-management__row">
              <td className="user-management__td">2</td>
              <td className="user-management__td">Jane Smith</td>
              <td className="user-management__td">jane@example.com</td>
              <td className="user-management__td">Admin</td>
              <td className="user-management__td user-management__td-actions">
                <button className="user-management__block-btn">Block</button>
                <button className="user-management__role-btn">Assign Role</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;
