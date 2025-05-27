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
        checkinTime: '14:00',
        checkoutTime: '11:00',
        facilities: '',
        status: 'Active',
        adminEmail: '',
        adminPassword: '',
        confirmAdminPassword: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            const { adminEmail, adminPassword, ...rest } = initialData;
            setHotelData({ 
                ...rest, 
                adminEmail: adminEmail || '', 
                adminPassword: '', 
                confirmAdminPassword: '',
                checkinTime: rest.checkinTime || '14:00',
                checkoutTime: rest.checkoutTime || '11:00'
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotelData(prevData => ({
            ...prevData,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Hotel information validation
        if (!hotelData.name.trim()) newErrors.name = 'Hotel name is required';
        if (!hotelData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(hotelData.email)) newErrors.email = 'Invalid email format';
        
        if (!hotelData.ph.trim()) newErrors.ph = 'Phone number is required';
        else if (!/^\d{10}$/.test(hotelData.ph)) newErrors.ph = 'Phone must be 10 digits';
        
        if (!hotelData.state.trim()) newErrors.state = 'State is required';
        if (!hotelData.city.trim()) newErrors.city = 'City is required';
        if (!hotelData.lisenceNo.trim()) newErrors.lisenceNo = 'License number is required';
        
        // Admin credentials validation (only for new hotels or when changing)
        if (!initialData || hotelData.adminEmail || hotelData.adminPassword || hotelData.confirmAdminPassword) {
            if (!hotelData.adminEmail.trim()) newErrors.adminEmail = 'Admin email is required';
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(hotelData.adminEmail)) newErrors.adminEmail = 'Invalid email format';
            
            if (!hotelData.adminPassword) newErrors.adminPassword = 'Password is required';
            else if (hotelData.adminPassword.length < 8) newErrors.adminPassword = 'Password must be at least 8 characters';
            
            if (!hotelData.confirmAdminPassword) newErrors.confirmAdminPassword = 'Please confirm password';
            else if (hotelData.adminPassword !== hotelData.confirmAdminPassword) {
                newErrors.confirmAdminPassword = 'Passwords do not match';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        const dataToSubmit = { ...hotelData };
        delete dataToSubmit.confirmAdminPassword;

        onSubmit(dataToSubmit);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content form-card">
                <h3 className="modal-title">{initialData ? 'Edit Hotel Details' : 'Add New Hotel'}</h3>
                <form onSubmit={handleSubmit} className="hotel-form-grid">
                    {/* Hotel Information Section */}
                    <h4 className="form-section-title full-width">Hotel Information</h4>
                    
                    <div className="form-group full-width">
                        <label htmlFor="hotelName">Hotel Name*</label>
                        <input
                            type="text"
                            id="hotelName"
                            name="name"
                            value={hotelData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error-input' : ''}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelEmail">Contact Email*</label>
                        <input
                            type="email"
                            id="hotelEmail"
                            name="email"
                            value={hotelData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error-input' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelPh">Phone Number*</label>
                        <input
                            type="tel"
                            id="hotelPh"
                            name="ph"
                            value={hotelData.ph}
                            onChange={handleChange}
                            placeholder="9876543210"
                            className={errors.ph ? 'error-input' : ''}
                        />
                        {errors.ph && <span className="error-message">{errors.ph}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelState">State*</label>
                        <input
                            type="text"
                            id="hotelState"
                            name="state"
                            value={hotelData.state}
                            onChange={handleChange}
                            className={errors.state ? 'error-input' : ''}
                        />
                        {errors.state && <span className="error-message">{errors.state}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelCity">City*</label>
                        <input
                            type="text"
                            id="hotelCity"
                            name="city"
                            value={hotelData.city}
                            onChange={handleChange}
                            className={errors.city ? 'error-input' : ''}
                        />
                        {errors.city && <span className="error-message">{errors.city}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelRating">Rating</label>
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
                        <label htmlFor="hotelLisenceNo">License Number*</label>
                        <input
                            type="text"
                            id="hotelLisenceNo"
                            name="lisenceNo"
                            value={hotelData.lisenceNo}
                            onChange={handleChange}
                            className={errors.lisenceNo ? 'error-input' : ''}
                        />
                        {errors.lisenceNo && <span className="error-message">{errors.lisenceNo}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelCheckinTime">Check-in Time</label>
                        <input
                            type="time"
                            id="hotelCheckinTime"
                            name="checkinTime"
                            value={hotelData.checkinTime}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelCheckoutTime">Check-out Time</label>
                        <input
                            type="time"
                            id="hotelCheckoutTime"
                            name="checkoutTime"
                            value={hotelData.checkoutTime}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="hotelFacilities">Facilities</label>
                        <textarea
                            id="hotelFacilities"
                            name="facilities"
                            value={hotelData.facilities}
                            onChange={handleChange}
                            rows="2"
                            placeholder="Swimming Pool, Free Wi-Fi, Parking, Restaurant"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelStatus">Status</label>
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

                    {/* Admin Credentials Section */}
                    <h4 className="form-section-title full-width">Admin Account</h4>
                    
                    <div className="form-group full-width">
                        <label htmlFor="adminEmail">Admin Email*</label>
                        <input
                            type="email"
                            id="adminEmail"
                            name="adminEmail"
                            value={hotelData.adminEmail}
                            onChange={handleChange}
                            className={errors.adminEmail ? 'error-input' : ''}
                        />
                        {errors.adminEmail && <span className="error-message">{errors.adminEmail}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="adminPassword">Password*</label>
                        <input
                            type="password"
                            id="adminPassword"
                            name="adminPassword"
                            value={hotelData.adminPassword}
                            onChange={handleChange}
                            className={errors.adminPassword ? 'error-input' : ''}
                        />
                        {errors.adminPassword && <span className="error-message">{errors.adminPassword}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmAdminPassword">Confirm Password*</label>
                        <input
                            type="password"
                            id="confirmAdminPassword"
                            name="confirmAdminPassword"
                            value={hotelData.confirmAdminPassword}
                            onChange={handleChange}
                            className={errors.confirmAdminPassword ? 'error-input' : ''}
                        />
                        {errors.confirmAdminPassword && <span className="error-message">{errors.confirmAdminPassword}</span>}
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