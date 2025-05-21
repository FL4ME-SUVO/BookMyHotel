import React, { useState } from 'react';

const WalkinRegistration = () => {
    const [guestDetails, setGuestDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        roomType: '',
        checkinDate: '',
        checkoutDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGuestDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Walk-in Registration Details:', guestDetails);
        alert('Guest registered successfully (simulated)!');
        // In a real application, you would send this data to a backend API
        setGuestDetails({ // Clear form after submission
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            roomType: '',
            checkinDate: '',
            checkoutDate: '',
        });
    };

    const handleFaceRecognition = () => {
        alert('Initiating face recognition... (This would integrate with a facial recognition API/SDK)');
        // Placeholder for actual face recognition logic
        // Upon successful recognition, you might pre-fill some guest details if available
    };

    return (
        <div className="walkin-registration-section">
            <h3>Walk-in Guest Registration</h3>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={guestDetails.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={guestDetails.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={guestDetails.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={guestDetails.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={guestDetails.address}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="roomType">Desired Room Type:</label>
                    <select
                        id="roomType"
                        name="roomType"
                        value={guestDetails.roomType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Room Type</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="checkinDate">Check-in Date:</label>
                    <input
                        type="date"
                        id="checkinDate"
                        name="checkinDate"
                        value={guestDetails.checkinDate}
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
                        value={guestDetails.checkoutDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="face-recognition-section">
                    <h4>Face Recognition (Optional)</h4>
                    <button type="button" onClick={handleFaceRecognition} className="face-rec-button">
                        Start Face Recognition
                    </button>
                    <p className="face-rec-info">
                        Use face recognition to quickly identify returning guests or for secure check-in.
                    </p>
                </div>

                <button type="submit" className="submit-button">Register Guest</button>
            </form>
        </div>
    );
};

export default WalkinRegistration;