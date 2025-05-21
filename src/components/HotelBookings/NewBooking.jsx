import React, { useState } from 'react';

const NewBooking = () => {
    const [bookingDetails, setBookingDetails] = useState({
        guestName: '',
        email: '',
        phone: '',
        roomType: '',
        numberOfGuests: 1,
        checkinDate: '',
        checkoutDate: '',
        specialRequests: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Booking Details:', bookingDetails);
        alert('New booking created successfully (simulated)!');
        // In a real application, you would send this data to a backend API
        setBookingDetails({ // Clear form after submission
            guestName: '',
            email: '',
            phone: '',
            roomType: '',
            numberOfGuests: 1,
            checkinDate: '',
            checkoutDate: '',
            specialRequests: '',
        });
    };

    return (
        <div className="new-booking-section">
            <h3>Create New Booking</h3>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="guestName">Guest Name:</label>
                    <input
                        type="text"
                        id="guestName"
                        name="guestName"
                        value={bookingDetails.guestName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Guest Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={bookingDetails.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Guest Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={bookingDetails.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="roomType">Room Type:</label>
                    <select
                        id="roomType"
                        name="roomType"
                        value={bookingDetails.roomType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Room Type</option>
                        <option value="single">Single Room</option>
                        <option value="double">Double Room</option>
                        <option value="suite">Suite</option>
                        <option value="deluxe">Deluxe Room</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfGuests">Number of Guests:</label>
                    <input
                        type="number"
                        id="numberOfGuests"
                        name="numberOfGuests"
                        min="1"
                        value={bookingDetails.numberOfGuests}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="checkinDate">Check-in Date:</label>
                    <input
                        type="date"
                        id="checkinDate"
                        name="checkinDate"
                        value={bookingDetails.checkinDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="checkoutDate">Check-out Date:</label>
                    <input
                        type="date"
                        id="checkoutDate"
                        name="checkoutDate"
                        value={bookingDetails.checkoutDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests:</label>
                    <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={bookingDetails.specialRequests}
                        onChange={handleChange}
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Create Booking</button>
            </form>
        </div>
    );
};

export default NewBooking;