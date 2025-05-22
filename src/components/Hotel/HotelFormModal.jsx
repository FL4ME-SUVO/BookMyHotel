import React, { useState, useEffect } from 'react';
import './HotelManagement.css'; 

const HotelFormModal = ({ onClose, onSubmit, initialData }) => {
    const [hotelData, setHotelData] = useState({
        name: '',
        email: '',
        ph: '',
        state: '',
        city: '',
        rating: '',
        lisenceNo: '',
        checkinTime: '14:00', // Default check-in time
        checkoutTime: '11:00', // Default check-out time
        facilities: '',
        status: 'Active', // Default status for new hotel
        // New admin fields
        adminEmail: '',
        adminPassword: '',
        confirmAdminPassword: '',
    });

    // Populate form if editing existing hotel
    useEffect(() => {
        if (initialData) {
            // When editing, do not pre-fill password fields for security reasons
            const { adminEmail, adminPassword, ...rest } = initialData;
            setHotelData({ ...rest, adminEmail: adminEmail || '', adminPassword: '', confirmAdminPassword: '' });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotelData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation for required hotel fields
        if (!hotelData.name || !hotelData.email || !hotelData.ph || !hotelData.state || !hotelData.city || !hotelData.lisenceNo) {
            alert('Please fill in all required hotel details: Name, Email, Phone, State, City, License No.');
            return;
        }

        // Basic phone number validation (can be more robust with regex)
        if (isNaN(hotelData.ph) || hotelData.ph.length !== 10) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Validation for admin credentials (only if adding a new hotel or if admin fields are explicitly being changed during edit)
        if (!initialData || hotelData.adminEmail || hotelData.adminPassword || hotelData.confirmAdminPassword) {
            if (!hotelData.adminEmail || !hotelData.adminPassword || !hotelData.confirmAdminPassword) {
                alert('Please fill in all required admin credentials: Admin Email, Password, Confirm Password.');
                return;
            }
            if (hotelData.adminPassword !== hotelData.confirmAdminPassword) {
                alert('Admin Password and Confirm Password do not match!');
                return;
            }
            if (hotelData.adminPassword.length < 8) {
                alert('Admin Password must be at least 8 characters long!');
                return;
            }
        }
        
        // Prepare data for submission
        const dataToSubmit = { ...hotelData };
        // Remove confirmAdminPassword before submitting, as it's only for validation
        delete dataToSubmit.confirmAdminPassword;

        onSubmit(dataToSubmit);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content form-card">
                <h3 className="modal-title">{initialData ? 'Edit Hotel Details' : 'Add New Hotel'}</h3>
                <form onSubmit={handleSubmit} className="hotel-form-grid">
                    {/* Hotel Details Section */}
                    <h4 className="form-section-title full-width">Hotel Information</h4>
                    <div className="form-group full-width">
                        <label htmlFor="hotelName">Hotel Name:</label>
                        <input
                            type="text"
                            id="hotelName"
                            name="name"
                            value={hotelData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelEmail">Contact Email:</label>
                        <input
                            type="email"
                            id="hotelEmail"
                            name="email"
                            value={hotelData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelPh">Phone Number:</label>
                        <input
                            type="tel" // Changed to tel for phone numbers
                            id="hotelPh"
                            name="ph"
                            value={hotelData.ph}
                            onChange={handleChange}
                            placeholder="e.g., 9876543210"
                            required
                            pattern="[0-9]{10}" // HTML5 pattern for 10 digits
                            title="Please enter a 10-digit phone number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelState">State:</label>
                        <input
                            type="text"
                            id="hotelState"
                            name="state"
                            value={hotelData.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelCity">City:</label>
                        <input
                            type="text"
                            id="hotelCity"
                            name="city"
                            value={hotelData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelRating">Rating (e.g., 3-star):</label>
                        <input
                            type="text"
                            id="hotelRating"
                            name="rating"
                            value={hotelData.rating}
                            onChange={handleChange}
                            placeholder="e.g., 4-star"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelLisenceNo">License Number:</label>
                        <input
                            type="text"
                            id="hotelLisenceNo"
                            name="lisenceNo"
                            value={hotelData.lisenceNo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelCheckinTime">Check-in Time:</label>
                        <input
                            type="time"
                            id="hotelCheckinTime"
                            name="checkinTime"
                            value={hotelData.checkinTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelCheckoutTime">Check-out Time:</label>
                        <input
                            type="time"
                            id="hotelCheckoutTime"
                            name="checkoutTime"
                            value={hotelData.checkoutTime}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="hotelFacilities">Facilities (comma-separated):</label>
                        <textarea
                            id="hotelFacilities"
                            name="facilities"
                            value={hotelData.facilities}
                            onChange={handleChange}
                            rows="2"
                            placeholder="e.g., Swimming Pool, Free Wi-Fi, Parking, Restaurant"
                        ></textarea>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="hotelStatus">Status:</label>
                        <select
                            id="hotelStatus"
                            name="status"
                            value={hotelData.status}
                            onChange={handleChange}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Under Renovation">Under Renovation</option>
                        </select>
                    </div>

                    {/* Admin Credentials Section (only for new hotels or if actively editing) */}
                    {/* For simplicity, we show admin fields always. In a real app, you might hide them during edit
                        unless explicitly triggering an "update admin" action. */}
                    <h4 className="form-section-title full-width">Admin Account Setup</h4>
                    <div className="form-group full-width">
                        <label htmlFor="adminEmail">Admin Email:</label>
                        <input
                            type="email"
                            id="adminEmail"
                            name="adminEmail"
                            value={hotelData.adminEmail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adminPassword">Password:</label>
                        <input
                            type="password"
                            id="adminPassword"
                            name="adminPassword"
                            value={hotelData.adminPassword}
                            onChange={handleChange}
                            required
                            minLength="8"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmAdminPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmAdminPassword"
                            name="confirmAdminPassword"
                            value={hotelData.confirmAdminPassword}
                            onChange={handleChange}
                            required
                            minLength="8"
                        />
                    </div>

                    <div className="form-actions full-width">
                        <button type="submit" className="action-button primary-button">
                            {initialData ? 'Save Changes' : 'Add Hotel'}
                        </button>
                        <button type="button" className="action-button secondary-button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HotelFormModal;