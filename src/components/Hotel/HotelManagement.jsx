import React, { useState } from 'react';
import './HotelManagement.css';
import HotelFormModal from './HotelFormModal';
// import AdminCredentialsFormModal from './AdminCredentialsFormModal';
import axios from 'axios'; 

function HotelManagement() {
    const [hotels, setHotels] = useState([
        // Initial mock data with extended fields
        {
            id: 1,
            name: 'Grand Imperial Hotel',
            email: 'info@grandimperial.com',
            ph: '9876543210',
            state: 'Himachal Pradesh',
            city: 'Shimla',
            rating: '4-star',
            lisenceNo: 'HP-SH-12345',
            checkinTime: '14:00',
            checkoutTime: '11:00',
            facilities: 'Swimming Pool, Free Wi-Fi, Parking, Restaurant, Spa',
            timeStamp: '2024-01-15T10:30:00Z',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Mountain View Resort',
            email: 'contact@mountainview.com',
            ph: '9988776655',
            state: 'Uttarakhand',
            city: 'Manali',
            rating: '3-star',
            lisenceNo: 'UK-MA-67890',
            checkinTime: '15:00',
            checkoutTime: '10:00',
            facilities: 'Hiking Trails, Bonfire, Cafe, Pet-Friendly',
            timeStamp: '2023-11-20T12:00:00Z',
            status: 'Active'
        },
    ]);
    const [showHotelFormModal, setShowHotelFormModal] = useState(false);
    const [showAdminFormModal, setShowAdminFormModal] = useState(false);
    const [newHotelTempData, setNewHotelTempData] = useState(null); // Stores hotel data temporarily
    const [editingHotel, setEditingHotel] = useState(null); // For future edit functionality
    // const BASE_URL = 'http://localhost:8080/api/hotel'; // Replace with your actual API endpoint
    
    const handleAddHotelClick = () => {
        setEditingHotel(null); // Ensure we're adding, not editing
        setShowHotelFormModal(true);
    };
    const handleCloseModals = () => {
        setShowHotelFormModal(false);
        setShowAdminFormModal(false);
        setNewHotelTempData(null); // Clear temporary data if user cancels mid-process
    };



    const fetchHotels = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/hotels/all');
        setHotels(response.data);
    } catch (error) {
        console.error('Error fetching hotels:', error);
        alert('Failed to fetch hotel list.');
    }
};

const handleHotelFormSubmit = async (hotelData) => {
    try {
        if (editingHotel) {
            await axios.put(`http://localhost:8080/api/hotels/update/${editingHotel.id}`, hotelData);
            alert('Hotel updated successfully!');
        } else {
            await axios.post('http://localhost:8080/api/hotels/add', hotelData);
            alert(`Hotel "${hotelData.name}" added successfully with admin "${hotelData.adminEmail}"!`);
        }
        fetchHotels();
        setShowHotelFormModal(false);
    } catch (error) {
        console.error('Error saving hotel:', error);
        alert('Something went wrong while saving the hotel.');
    }
};

const handleDelete = async (id) => {
    if (window.confirm(`Are you sure you want to delete hotel ID ${id}?`)) {
        try {
            await axios.delete(`http://localhost:8080/api/hotels/delete/${id}`);
            fetchHotels();
            alert(`Hotel ID ${id} deleted successfully.`);
        } catch (error) {
            console.error('Failed to delete hotel:', error);
            alert('Failed to delete hotel.');
        }
    }
};



    // Helper to get status badge class
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'Active': return 'status-paid-badge'; // Using a green badge for active
            case 'Inactive': return 'status-failed-badge'; // Using a red badge for inactive
            case 'Under Renovation': return 'status-pending-badge'; // Using a yellow badge
            default: return 'status-default-badge';
        }
    };

    return (
        <div className="hotel-management__container">
            <h1 className="hotel-management__title">Hotel Management</h1>
            <button className="hotel-management__add-btn action-button primary-button" onClick={handleAddHotelClick}>
                Add New Hotel
            </button>
            <div className="hotel-management__table-wrapper">
                <table className="hotel-management__table modern-table">
                    <thead>
                        <tr>
                            <th className="hotel-management__th">ID</th>
                            <th className="hotel-management__th">Name</th>
                            <th className="hotel-management__th">Location</th>
                            <th className="hotel-management__th">Contact Email</th>
                            <th className="hotel-management__th">Phone</th>
                            <th className="hotel-management__th">License No.</th>
                            <th className="hotel-management__th">Status</th>
                            <th className="hotel-management__th">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.length > 0 ? (
                            hotels.map(hotel => (
                                <tr key={hotel.id} className="hotel-management__row">
                                    <td className="hotel-management__td" data-label="ID:">{hotel.id}</td>
                                    <td className="hotel-management__td" data-label="Name:">{hotel.name}</td>
                                    <td className="hotel-management__td" data-label="Location:">{hotel.location}, {hotel.city}, {hotel.state}</td>
                                    <td className="hotel-management__td" data-label="Contact Email:">{hotel.email}</td>
                                    <td className="hotel-management__td" data-label="Phone:">{hotel.ph}</td>
                                    <td className="hotel-management__td" data-label="License No.:">{hotel.lisenceNo}</td>
                                    <td className="hotel-management__td" data-label="Status:">
                                        <span className={`status-badge ${getStatusBadgeClass(hotel.status)}`}>
                                            {hotel.status}
                                        </span>
                                    </td>
                                    <td className="hotel-management__td-actions" data-label="Actions:">
                                        <button
                                            className="hotel-management__edit-btn action-button small-button secondary-button"
                                            onClick={() => {
                                            setEditingHotel(hotel);
                                            setShowHotelFormModal(true);
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="hotel-management__delete-btn action-button small-button danger-button"
                                            onClick={() => handleDelete(hotel.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="no-data-message">No hotels added yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Hotel Form Modal */}
            {showHotelFormModal && (
                <HotelFormModal
                    onClose={handleCloseModals}
                    onSubmit={handleHotelFormSubmit}
                    initialData={editingHotel} // Pass data if editing
                />
            )}

            {/* Admin Credentials Form Modal */}
            {showAdminFormModal && newHotelTempData && (
                <AdminCredentialsFormModal
                    onClose={handleCloseModals}
                    onSubmit={handleAdminFormSubmit}
                    hotelName={newHotelTempData.name}
                />
            )}
        </div>
    );
}

export default HotelManagement;