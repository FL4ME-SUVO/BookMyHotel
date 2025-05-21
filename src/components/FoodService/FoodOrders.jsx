import React, { useState } from 'react';

const FoodOrders = () => {
    const [newOrder, setNewOrder] = useState({
        roomNumber: '',
        guestName: '',
        items: [{ foodItem: '', quantity: 1, price: 0 }],
        notes: '',
    });

    const [currentOrders, setCurrentOrders] = useState([
        { id: 'FO001', roomNumber: '101', guestName: 'John Doe', items: [{ foodItem: 'Club Sandwich', quantity: 1, price: 350 }], status: 'Preparing', orderTime: '2025-05-20 10:00 AM' },
        { id: 'FO002', roomNumber: '205', guestName: 'Jane Smith', items: [{ foodItem: 'Pasta Alfredo', quantity: 1, price: 480 }, { foodItem: 'Coke', quantity: 2, price: 80 }], status: 'Delivered', orderTime: '2025-05-19 08:30 PM' },
    ]);

    const foodMenu = [
        { name: 'Club Sandwich', price: 350 },
        { name: 'Pasta Alfredo', price: 480 },
        { name: 'Chicken Biryani', price: 550 },
        { name: 'Paneer Butter Masala', price: 420 },
        { name: 'Coke', price: 80 },
        { name: 'Fresh Lime Soda', price: 120 },
    ];

    const handleNewOrderChange = (e) => {
        const { name, value } = e.target;
        setNewOrder(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const updatedItems = [...newOrder.items];
        if (name === 'foodItem') {
            const selectedItem = foodMenu.find(item => item.name === value);
            updatedItems[index] = {
                ...updatedItems[index],
                foodItem: value,
                price: selectedItem ? selectedItem.price : 0
            };
        } else {
            updatedItems[index] = {
                ...updatedItems[index],
                [name]: name === 'quantity' ? parseInt(value) || 1 : value
            };
        }
        setNewOrder(prevState => ({ ...prevState, items: updatedItems }));
    };

    const handleAddItem = () => {
        setNewOrder(prevState => ({
            ...prevState,
            items: [...prevState.items, { foodItem: '', quantity: 1, price: 0 }]
        }));
    };

    const handleRemoveItem = (index) => {
        setNewOrder(prevState => ({
            ...prevState,
            items: prevState.items.filter((_, i) => i !== index)
        }));
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const totalAmount = newOrder.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
        const order = {
            ...newOrder,
            id: `FO${String(currentOrders.length + 1).padStart(3, '0')}`,
            status: 'Pending',
            totalAmount: totalAmount,
            orderTime: new Date().toLocaleString(),
        };
        setCurrentOrders(prevOrders => [...prevOrders, order]);
        alert('Food order placed successfully!');
        setNewOrder({ // Reset form
            roomNumber: '',
            guestName: '',
            items: [{ foodItem: '', quantity: 1, price: 0 }],
            notes: '',
        });
    };

    const handleUpdateOrderStatus = (orderId, newStatus) => {
        setCurrentOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            )
        );
        alert(`Order ${orderId} status updated to ${newStatus}`);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Pending': return 'status-pending-badge';
            case 'Preparing': return 'status-preparing-badge';
            case 'Delivered': return 'status-delivered-badge';
            case 'Cancelled': return 'status-cancelled-badge';
            default: return '';
        }
    };

    return (
        <div className="food-orders-section">
            <h3 className="section-title">Food Orders</h3>
            <div className="food-orders-content-grid">
                <div className="food-order-form-card">
                    <h4>Place New Order</h4>
                    <form onSubmit={handlePlaceOrder} className="food-order-form">
                        <div className="form-group">
                            <label htmlFor="roomNumber">Room Number:</label>
                            <input
                                type="text"
                                id="roomNumber"
                                name="roomNumber"
                                value={newOrder.roomNumber}
                                onChange={handleNewOrderChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guestName">Guest Name:</label>
                            <input
                                type="text"
                                id="guestName"
                                name="guestName"
                                value={newOrder.guestName}
                                onChange={handleNewOrderChange}
                                required
                            />
                        </div>

                        <h5 className="form-subtitle">Order Items</h5>
                        {newOrder.items.map((item, index) => (
                            <div key={index} className="order-item-input-group">
                                <select
                                    name="foodItem"
                                    value={item.foodItem}
                                    onChange={(e) => handleItemChange(index, e)}
                                    required
                                >
                                    <option value="">Select Item</option>
                                    {foodMenu.map((menuItem, idx) => (
                                        <option key={idx} value={menuItem.name}>{menuItem.name} (INR {menuItem.price})</option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="Qty"
                                    value={item.quantity}
                                    onChange={(e) => handleItemChange(index, e)}
                                    min="1"
                                    required
                                />
                                <span className="item-calculated-price">INR {(item.quantity * item.price).toFixed(2)}</span>
                                <button type="button" onClick={() => handleRemoveItem(index)} className="icon-button remove-item-button">
                                    &times;
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddItem} className="add-item-button">
                            + Add Another Item
                        </button>
                        <div className="form-group">
                            <label htmlFor="notes">Special Notes/Instructions:</label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={newOrder.notes}
                                onChange={handleNewOrderChange}
                                rows="3"
                            ></textarea>
                        </div>
                        <button type="submit" className="action-button primary-button">Place Order</button>
                    </form>
                </div>

                <div className="food-orders-list-card">
                    <h4>Current & Past Orders</h4>
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Room</th>
                                    <th>Guest</th>
                                    <th>Items</th>
                                    <th>Total (INR)</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrders.length > 0 ? (
                                    currentOrders.map(order => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.roomNumber}</td>
                                            <td>{order.guestName}</td>
                                            <td>
                                                <ul className="order-items-compact-list">
                                                    {order.items.map((item, idx) => (
                                                        <li key={idx}>{item.foodItem} x {item.quantity}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td>{order.totalAmount ? order.totalAmount.toFixed(2) : 'N/A'}</td>
                                            <td>
                                                <span className={`status-badge ${getStatusClass(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td>
                                                {order.status === 'Pending' && (
                                                    <>
                                                        <button className="action-button small-button" onClick={() => handleUpdateOrderStatus(order.id, 'Preparing')}>Prepare</button>
                                                        <button className="action-button small-button text-danger" onClick={() => handleUpdateOrderStatus(order.id, 'Cancelled')}>Cancel</button>
                                                    </>
                                                )}
                                                {order.status === 'Preparing' && (
                                                    <button className="action-button small-button text-success" onClick={() => handleUpdateOrderStatus(order.id, 'Delivered')}>Deliver</button>
                                                )}
                                                {order.status === 'Delivered' && (
                                                    <span className="action-complete-text">Delivered</span>
                                                )}
                                                {order.status === 'Cancelled' && (
                                                    <span className="action-complete-text text-danger">Cancelled</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="no-data-message">No food orders found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodOrders;