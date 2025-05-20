import React, { useState } from 'react';
import './FoodSystem.css';

function FoodSystem() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Margherita Pizza', category: 'Main', price: '$8.99', availability: 'Available' },
    { id: 2, name: 'Lemonade', category: 'Beverage', price: '$2.50', availability: 'Out of Stock' },
  ]);

  const [orders] = useState([
    { id: 101, customer: 'Alice', item: 'Margherita Pizza', status: 'Delivered' },
    { id: 102, customer: 'Bob', item: 'Lemonade', status: 'Pending' },
  ]);

  const [newItem, setNewItem] = useState({ name: '', category: '', price: '', availability: 'Available' });
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = () => {
    const nextId = menuItems.length ? Math.max(...menuItems.map(i => i.id)) + 1 : 1;
    setMenuItems([...menuItems, { ...newItem, id: nextId }]);
    setNewItem({ name: '', category: '', price: '', availability: 'Available' });
    setShowForm(false);
  };

  const handleToggleAvailability = (id) => {
    setMenuItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, availability: item.availability === 'Available' ? 'Out of Stock' : 'Available' }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const handleReport = () => {
    alert('Report generation is under development.');
  };

  return (
    <div className="food-management__container">
      <h1 className="food-management__title">Food & Beverage Management</h1>

      <div className="food-management__actions">
        <button onClick={() => setShowForm(true)} className="food-management__add-btn">Add New Item</button>
        <button onClick={handleReport} className="food-management__report-btn">Generate Report</button>
      </div>

      {/* Add Item Modal */}
      {showForm && (
        <div className="food-management__modal-overlay">
          <div className="food-management__modal">
            <h3>Add New Item</h3>
            <input
              type="text"
              placeholder="Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            />
            <div className="food-management__modal-buttons">
              <button onClick={handleAddItem} className="food-management__submit-btn">Add</button>
              <button onClick={() => setShowForm(false)} className="food-management__cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Menu Table */}
      <div className="food-management__table-wrapper">
        <h2 className="food-management__subtitle">Menu Items</h2>
        <table className="food-management__table">
          <thead>
            <tr>
              <th className="food-management__th">ID</th>
              <th className="food-management__th">Name</th>
              <th className="food-management__th">Category</th>
              <th className="food-management__th">Price</th>
              <th className="food-management__th">Availability</th>
              <th className="food-management__th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr className="food-management__row" key={item.id}>
                <td className="food-management__td">{item.id}</td>
                <td className="food-management__td">{item.name}</td>
                <td className="food-management__td">{item.category}</td>
                <td className="food-management__td">{item.price}</td>
                <td className={`food-management__td food-management__status--${item.availability === 'Available' ? 'available' : 'out'}`}>
                  {item.availability}
                </td>
                <td className="food-management__td food-management__td-actions">
                  <button onClick={() => handleToggleAvailability(item.id)} className="food-management__modify-btn">Toggle</button>
                  <button onClick={() => handleDelete(item.id)} className="food-management__cancel-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Orders Table */}
      <div className="food-management__table-wrapper">
        <h2 className="food-management__subtitle">Order Status</h2>
        <table className="food-management__table">
          <thead>
            <tr>
              <th className="food-management__th">Order ID</th>
              <th className="food-management__th">Customer</th>
              <th className="food-management__th">Item</th>
              <th className="food-management__th">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="food-management__row" key={order.id}>
                <td className="food-management__td">{order.id}</td>
                <td className="food-management__td">{order.customer}</td>
                <td className="food-management__td">{order.item}</td>
                <td className={`food-management__td food-management__status--${order.status.toLowerCase()}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodSystem;
