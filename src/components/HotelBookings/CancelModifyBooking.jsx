import React, { useState } from 'react';

const CancelModifyBooking = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [foundBooking, setFoundBooking] = useState(null);
    const [isModifying, setIsModifying] = useState(false);
    const [modifiedDetails, setModifiedDetails] = useState({});

    // Dummy booking data for search simulation
    const dummyBookings = [
        {
            bookingId: 'BKG001',
            guestName: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            roomType: 'double',
            numberOfGuests: 2,
            roomNumber: '101',
            checkinDate: '2025-05-25',
            checkoutDate: '2025-05-28',
            status: 'Confirmed'
        },
        {
            bookingId: 'BKG002',
            guestName: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '987-654-3210',
            roomType: 'suite',
            numberOfGuests: 1,
            roomNumber: '203',
            checkinDate: '2025-06-01',
            checkoutDate: '2025-06-05',
            status: 'Pending'
        },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        const found = dummyBookings.find(b =>
            b.bookingId.toLowerCase() === searchQuery.toLowerCase() ||
            b.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.email.toLowerCase() === searchQuery.toLowerCase()
        );

        if (found) {
            setFoundBooking(found);
            setModifiedDetails({ ...found }); // Initialize modify form with current details
            setIsModifying(false); // Reset modify state
        } else {
            setFoundBooking(null);
            setModifiedDetails({});
            alert('Booking not found!');
        }
    };

    const handleCancelBooking = () => {
        if (window.confirm(`Are you sure you want to cancel booking ${foundBooking.bookingId}?`)) {
            // In a real app, send cancellation request to API
            console.log(`Cancelling booking: ${foundBooking.bookingId}`);
            alert(`Booking ${foundBooking.bookingId} has been cancelled (simulated)!`);
            setFoundBooking(null); // Clear the found booking
            setSearchQuery(''); // Clear search query
        }
    };

    const handleModifyClick = () => {
        setIsModifying(true);
    };

    const handleModifyChange = (e) => {
        const { name, value } = e.target;
        setModifiedDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveModification = (e) => {
        e.preventDefault();
        // In a real app, send modification request to API
        console.log('Saving modifications for booking:', modifiedDetails);
        alert(`Booking ${foundBooking.bookingId} modified successfully (simulated)!`);
        setFoundBooking(modifiedDetails); // Update displayed booking with new details
        setIsModifying(false); // Exit modify mode
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Confirmed':
                return 'status-confirmed';
            case 'Pending':
                return 'status-pending';
            case 'Checked-out':
                return 'status-checkedout';
            case 'Cancelled':
                return 'status-cancelled';
            default:
                return '';
        }
    };

    return (
        <div className="cancel-modify-booking-section">
            <h3>Cancel or Modify Booking</h3>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search by Booking ID, Guest Name, or Email"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                    required
                />
                <button type="submit" className="search-button">Search Booking</button>
            </form>

            {foundBooking && (
                <div className="booking-details-card">
                    <h4>Booking Details:</h4>
                    {!isModifying ? (
                        <>
                            <p><strong>Booking ID:</strong> {foundBooking.bookingId}</p>
                            <p><strong>Guest Name:</strong> {foundBooking.guestName}</p>
                            <p><strong>Email:</strong> {foundBooking.email}</p>
                            <p><strong>Phone:</strong> {foundBooking.phone}</p>
                            <p><strong>Room No.:</strong> {foundBooking.roomNumber || 'Not Assigned'}</p>
                            <p><strong>Room Type:</strong> {foundBooking.roomType}</p>
                            <p><strong>Guests:</strong> {foundBooking.numberOfGuests}</p>
                            <p><strong>Check-in:</strong> {foundBooking.checkinDate}</p>
                            <p><strong>Check-out:</strong> {foundBooking.checkoutDate}</p>
                            <p><strong>Status:</strong>
                                <span className={`booking-status ${getStatusClass(foundBooking.status)}`}>
                                    {foundBooking.status}
                                </span>
                            </p>
                            <div className="booking-actions">
                                <button onClick={handleModifyClick} className="action-button modify-button">Modify</button>
                                {foundBooking.status !== 'Cancelled' && (
                                    <button onClick={handleCancelBooking} className="action-button cancel-button">Cancel Booking</button>
                                )}
                            </div>
                        </>
                    ) : (
                        <form onSubmit={handleSaveModification} className="modification-form">
                            <div className="form-group">
                                <label>Guest Name:</label>
                                <input
                                    type="text"
                                    name="guestName"
                                    value={modifiedDetails.guestName || ''}
                                    onChange={handleModifyChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={modifiedDetails.email || ''}
                                    onChange={handleModifyChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={modifiedDetails.phone || ''}
                                    onChange={handleModifyChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Room Type:</label>
                                <select
                                    name="roomType"
                                    value={modifiedDetails.roomType || ''}
                                    onChange={handleModifyChange}
                                >
                                    <option value="single">Single Room</option>
                                    <option value="double">Double Room</option>
                                    <option value="suite">Suite</option>
                                    <option value="deluxe">Deluxe Room</option>
                                </select>
                            </div>
                             <div className="form-group">
                                <label>Number of Guests:</label>
                                <input
                                    type="number"
                                    name="numberOfGuests"
                                    min="1"
                                    value={modifiedDetails.numberOfGuests || ''}
                                    onChange={handleModifyChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Check-in Date:</label>
                                <input
                                    type="date"
                                    name="checkinDate"
                                    value={modifiedDetails.checkinDate || ''}
                                    onChange={handleModifyChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Check-out Date:</label>
                                <input
                                    type="date"
                                    name="checkoutDate"
                                    value={modifiedDetails.checkoutDate || ''}
                                    onChange={handleModifyChange}
                                />
                            </div>
                             <div className="form-group">
                                <label>Status:</label>
                                <select
                                    name="status"
                                    value={modifiedDetails.status || ''}
                                    onChange={handleModifyChange}
                                >
                                    <option value="Confirmed">Confirmed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Checked-in">Checked-in</option>
                                    <option value="Checked-out">Checked-out</option>
                                </select>
                            </div>

                            <div className="modification-buttons">
                                <button type="submit" className="action-button save-button">Save Changes</button>
                                <button type="button" onClick={() => setIsModifying(false)} className="action-button cancel-mod-button">Cancel</button>
                            </div>
                        </form>
                    )}
                </div>
            )}

            {!foundBooking && searchQuery && <p className="no-data-message">No booking found for "{searchQuery}".</p>}
        </div>
    );
};

export default CancelModifyBooking;