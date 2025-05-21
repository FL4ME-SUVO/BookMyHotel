import React, { useState } from 'react';

const AddNewRoom = () => {
    const [roomData, setRoomData] = useState({
        roomNumber: '',
        roomType: 'Standard King', // Default
        pricePerNight: '',
        capacity: '',
        amenities: [],
        status: 'Available', // Default for new room
        description: '',
    });

    const roomTypesOptions = ['Standard King', 'Standard Twin', 'Deluxe Queen', 'Deluxe Twin', 'Suite', 'Executive Suite'];
    const defaultAmenities = ['AC', 'TV', 'Wi-Fi', 'Ensuite Bathroom'];
    const roomStatusOptions = ['Available', 'Under Maintenance', 'Cleaning'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setRoomData(prevState => ({
                ...prevState,
                amenities: checked
                    ? [...prevState.amenities, value]
                    : prevState.amenities.filter(amenity => amenity !== value)
            }));
        } else {
            setRoomData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!roomData.roomNumber || !roomData.pricePerNight || !roomData.capacity) {
            alert('Please fill in all required fields (Room Number, Price, Capacity).');
            return;
        }

        // In a real application, send this data to a backend API
        console.log('Adding New Room:', roomData);
        alert(`Room ${roomData.roomNumber} added successfully! (Simulated)`);

        // Reset form
        setRoomData({
            roomNumber: '',
            roomType: 'Standard King',
            pricePerNight: '',
            capacity: '',
            amenities: [],
            status: 'Available',
            description: '',
        });
    };

    return (
        <div className="room-section add-new-room-section">
            <h3 className="section-title">Add New Room</h3>
            <div className="form-card">
                <form onSubmit={handleSubmit} className="add-room-form">
                    <div className="form-group full-width">
                        <label htmlFor="roomNumber">Room Number:</label>
                        <input
                            type="text"
                            id="roomNumber"
                            name="roomNumber"
                            value={roomData.roomNumber}
                            onChange={handleChange}
                            placeholder="e.g., 101, 203A"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="roomType">Room Type:</label>
                        <select
                            id="roomType"
                            name="roomType"
                            value={roomData.roomType}
                            onChange={handleChange}
                            required
                        >
                            {roomTypesOptions.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pricePerNight">Price Per Night (INR):</label>
                        <input
                            type="number"
                            id="pricePerNight"
                            name="pricePerNight"
                            value={roomData.pricePerNight}
                            onChange={handleChange}
                            placeholder="e.g., 5000"
                            min="0"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="capacity">Capacity (Guests):</label>
                        <input
                            type="number"
                            id="capacity"
                            name="capacity"
                            value={roomData.capacity}
                            onChange={handleChange}
                            placeholder="e.g., 2"
                            min="1"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Initial Status:</label>
                        <select
                            id="status"
                            name="status"
                            value={roomData.status}
                            onChange={handleChange}
                            required
                        >
                            {roomStatusOptions.map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group full-width">
                        <label>Amenities:</label>
                        <div className="amenities-checkboxes">
                            {defaultAmenities.map(amenity => (
                                <label key={amenity} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="amenities"
                                        value={amenity}
                                        checked={roomData.amenities.includes(amenity)}
                                        onChange={handleChange}
                                    />
                                    {amenity}
                                </label>
                            ))}
                            {/* You could add an "Other" text input for custom amenities */}
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="description">Description (Optional):</label>
                        <textarea
                            id="description"
                            name="description"
                            value={roomData.description}
                            onChange={handleChange}
                            placeholder="Brief description of the room, e.g., 'Corner room with city view.'"
                        ></textarea>
                    </div>

                    <div className="form-actions full-width">
                        <button type="submit" className="action-button primary-button">Add Room</button>
                        <button type="button" className="action-button secondary-button" onClick={() => setRoomData({ roomNumber: '', roomType: 'Standard King', pricePerNight: '', capacity: '', amenities: [], status: 'Available', description: '' })}>
                            Clear Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewRoom;