import React from 'react';
import './UserManagement.css';

function UserManagement() {
  return (
    <div className="user-management">
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>User</td>
            <td>
              <button>Block</button>
              <button>Assign Role</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>Admin</td>
            <td>
              <button>Block</button>
              <button>Assign Role</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;