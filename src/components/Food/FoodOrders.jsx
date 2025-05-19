import React from 'react';
import './FoodOrders.css';

const FoodOrders = () => {
  // Sample food orders data
  const orders = [
    {
      id: 1,
      itemName: 'Margherita Pizza',
      quantity: 2,
      price: 120.99,
      date: '2024-05-20',
      status: 'Delivered',
    },
    {
      id: 2,
      itemName: 'Caesar Salad',
      quantity: 1,
      price: 80.5,
      date: '2024-05-21',
      status: 'Preparing',
    },
    {
      id: 3,
      itemName: 'Pasta Carbonara',
      quantity: 1,
      price: 140.0,
      date: '2024-05-22',
      status: 'Pending',
    },
  ];

  return (
    <div className="foodorders">
      <h2>Your Food Orders</h2>
      {orders.length === 0 ? (
        <p>You have no food orders.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.itemName}</td>
                <td>{order.quantity}</td>
                <td>₹{order.price.toFixed(2)}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FoodOrders;