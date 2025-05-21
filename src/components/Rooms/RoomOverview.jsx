import React, { useState, useEffect } from 'react';

const RoomOverview = () => {
    const [rooms, setRooms] = useState([]);
    const [filters, setFilters] = useState({
        roomType: 'All',
        availability: 'All',
        minPrice: '',
        maxPrice: '',
    });

    // Mock data for rooms
    const allRoomsMock = [
        { id: '101', roomNumber: '101', type: 'Standard King', price: 5000, capacity: 2, amenities: ['AC', 'TV', 'Wi-Fi'], status: 'Occupied', currentGuest: 'John Doe', checkOutDate: '2025-05-22' },
        { id: '102', roomNumber: '102', type: 'Standard King', price: 5000, capacity: 2, amenities: ['AC', 'TV', 'Wi-Fi'], status: 'Available', currentGuest: null, checkOutDate: null },
        { id: '103', roomNumber: '103', type: 'Deluxe Queen', price: 7500, capacity: 3, amenities: ['AC', 'TV', 'Wi-Fi', 'Mini Bar'], status: 'Occupied', currentGuest: 'Jane Smith', checkOutDate: '2025-05-23' },
        { id: '104', roomNumber: '104', type: 'Deluxe Queen', price: 7500, capacity: 3, amenities: ['AC', 'TV', 'Wi-Fi', 'Mini Bar'], status: 'Under Maintenance', currentGuest: null, checkOutDate: null },
        { id: '105', roomNumber: '105', type: 'Suite', price: 12000, capacity: 4, amenities: ['AC', 'TV', 'Wi-Fi', 'Mini Bar', 'Bathtub'], status: 'Available', currentGuest: null, checkOutDate: null },
        { id: '201', roomNumber: '201', type: 'Standard King', price: 5000, capacity: 2, amenities: ['AC', 'TV', 'Wi-Fi'], status: 'Available', currentGuest: null, checkOutDate: null },
        { id: '202', roomNumber: '202', type: 'Deluxe Queen', price: 7500, capacity: 3, amenities: ['AC', 'TV', 'Wi-Fi', 'Mini Bar'], status: 'Occupied', currentGuest: 'Michael Jordan', checkOutDate: '2025-05-21' },
        { id: '203', roomNumber: '203', type: 'Suite', price: 12000, capacity: 4, amenities: ['AC', 'TV', 'Wi-Fi', 'Mini Bar', 'Bathtub'], status: 'Available', currentGuest: null, checkOutDate: null },
        { id: '204', roomNumber: '204', type: 'Standard King', price: 5000, capacity: 2, amenities: ['AC', 'TV', 'Wi-Fi'], status: 'Occupied', currentGuest: 'Sarah Connor', checkOutDate: '2025-05-24' },
        { id: '301', roomNumber: '301', type: 'Deluxe Queen', price: 7500, capacity: 3, amenities: ['AC', 'TV', 'Wi-Fi', 'Mini Bar'], status: 'Available', currentGuest: null, checkOutDate: null },
    ];

    useEffect(() => {
        // In a real app, you'd fetch this from an API
        let filteredRooms = allRoomsMock;

        if (filters.roomType !== 'All') {
            filteredRooms = filteredRooms.filter(room => room.type === filters.roomType);
        }
        if (filters.availability !== 'All') {
            filteredRooms = filteredRooms.filter(room => room.status === filters.availability);
        }
        if (filters.minPrice) {
            filteredRooms = filteredRooms.filter(room => room.price >= parseFloat(filters.minPrice));
        }
        if (filters.maxPrice) {
            filteredRooms = filteredRooms.filter(room => room.price <= parseFloat(filters.maxPrice));
        }

        setRooms(filteredRooms);
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Available': return 'status-available-badge';
            case 'Occupied': return 'status-occupied-badge';
            case 'Under Maintenance': return 'status-maintenance-badge';
            case 'Cleaning': return 'status-cleaning-badge'; // Example for another status
            default: return 'status-default-badge';
        }
    };

    const handleViewDetails = (room) => {
        alert(`Room Details:
        Number: ${room.roomNumber}
        Type: ${room.type}
        Price: INR ${room.price.toLocaleString()} / night
        Capacity: ${room.capacity} people
        Amenities: ${room.amenities.join(', ')}
        Status: ${room.status}
        ${room.currentGuest ? `Current Guest: ${room.currentGuest} (Checkout: ${room.checkOutDate})` : ''}
        `);
    };

    const roomTypes = [...new Set(allRoomsMock.map(room => room.type))];
    const availabilityStatuses = [...new Set(allRoomsMock.map(room => room.status))];

    return (
        <div className="room-section room-overview-section">
            <h3 className="section-title">Room Overview & Availability</h3>

            <div className="filter-controls">
                <div className="form-group">
                    <label htmlFor="roomType">Room Type:</label>
                    <select id="roomType" name="roomType" value={filters.roomType} onChange={handleFilterChange}>
                        <option value="All">All Types</option>
                        {roomTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="availability">Availability Status:</label>
                    <select id="availability" name="availability" value={filters.availability} onChange={handleFilterChange}>
                        <option value="All">All Statuses</option>
                        {availabilityStatuses.map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group price-filter">
                    <label htmlFor="minPrice">Min Price:</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                        placeholder="Min"
                        min="0"
                    />
                </div>
                <div className="form-group price-filter">
                    <label htmlFor="maxPrice">Max Price:</label>
                    <input
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                        placeholder="Max"
                        min="0"
                    />
                </div>
            </div>

            {rooms.length === 0 ? (
                <div className="no-data-message">No rooms match your criteria.</div>
            ) : (
                <div className="table-responsive">
                    <table className="modern-table rooms-table">
                        <thead>
                            <tr>
                                <th>Room No.</th>
                                <th>Type</th>
                                <th>Price/Night (INR)</th>
                                <th>Capacity</th>
                                <th>Amenities</th>
                                <th>Status</th>
                                <th>Current Guest / Checkout</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map(room => (
                                <tr key={room.id}>
                                    <td data-label="Room No.">{room.roomNumber}</td>
                                    <td data-label="Type:">{room.type}</td>
                                    <td data-label="Price/Night (INR):">INR {room.price.toLocaleString()}</td>
                                    <td data-label="Capacity:">{room.capacity}</td>
                                    <td data-label="Amenities:">{room.amenities.join(', ')}</td>
                                    <td data-label="Status:">
                                        <span className={`status-badge ${getStatusClass(room.status)}`}>
                                            {room.status}
                                        </span>
                                    </td>
                                    <td data-label="Current Guest / Checkout:">
                                        {room.currentGuest ? (
                                            <>
                                                {room.currentGuest}
                                                <br />
                                                <small>Checkout: {room.checkOutDate}</small>
                                            </>
                                        ) : 'N/A'}
                                    </td>
                                    <td data-label="Actions:">
                                        <button
                                            onClick={() => handleViewDetails(room)}
                                            className="action-button small-button secondary-button"
                                        >
                                            Details
                                        </button>
                                        {/* In a real app, more actions like Edit, Change Status etc. */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RoomOverview;