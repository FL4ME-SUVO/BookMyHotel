import React, { useState } from 'react';

const ServiceRequests = () => {
    const [newRequest, setNewRequest] = useState({
        roomNumber: '',
        guestName: '',
        requestType: '',
        description: '',
    });

    const [currentRequests, setCurrentRequests] = useState([
        { id: 'SR001', roomNumber: '101', guestName: 'John Doe', requestType: 'Housekeeping', description: 'Clean room, change towels', status: 'Pending', requestTime: '2025-05-20 11:00 AM' },
        { id: 'SR002', roomNumber: '305', guestName: 'Michael B.', requestType: 'Maintenance', description: 'AC not working', status: 'In Progress', requestTime: '2025-05-20 09:15 AM' },
        { id: 'SR003', roomNumber: '205', guestName: 'Jane Smith', requestType: 'Extra Amenities', description: 'Need extra pillow and blanket', status: 'Completed', requestTime: '2025-05-19 07:00 PM' },
    ]);

    const handleNewRequestChange = (e) => {
        const { name, value } = e.target;
        setNewRequest(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePlaceRequest = (e) => {
        e.preventDefault();
        const request = {
            ...newRequest,
            id: `SR${String(currentRequests.length + 1).padStart(3, '0')}`,
            status: 'Pending',
            requestTime: new Date().toLocaleString(),
        };
        setCurrentRequests(prevRequests => [...prevRequests, request]);
        alert('Service request placed successfully!');
        setNewRequest({ // Reset form
            roomNumber: '',
            guestName: '',
            requestType: '',
            description: '',
        });
    };

    const handleUpdateRequestStatus = (requestId, newStatus) => {
        setCurrentRequests(prevRequests =>
            prevRequests.map(request =>
                request.id === requestId ? { ...request, status: newStatus } : request
            )
        );
        alert(`Request ${requestId} status updated to ${newStatus}`);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Pending': return 'status-pending-badge';
            case 'In Progress': return 'status-in-progress-badge';
            case 'Completed': return 'status-completed-badge';
            case 'Cancelled': return 'status-cancelled-badge';
            default: return '';
        }
    };

    return (
        <div className="service-requests-section">
            <h3 className="section-title">Service Requests</h3>
            <div className="service-requests-content-grid">
                <div className="service-request-form-card">
                    <h4>Submit New Request</h4>
                    <form onSubmit={handlePlaceRequest} className="service-request-form">
                        <div className="form-group">
                            <label htmlFor="roomNumber">Room Number:</label>
                            <input
                                type="text"
                                id="roomNumber"
                                name="roomNumber"
                                value={newRequest.roomNumber}
                                onChange={handleNewRequestChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guestName">Guest Name:</label>
                            <input
                                type="text"
                                id="guestName"
                                name="guestName"
                                value={newRequest.guestName}
                                onChange={handleNewRequestChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="requestType">Request Type:</label>
                            <select
                                id="requestType"
                                name="requestType"
                                value={newRequest.requestType}
                                onChange={handleNewRequestChange}
                                required
                            >
                                <option value="">Select Type</option>
                                <option value="Housekeeping">Housekeeping</option>
                                <option value="Maintenance">Maintenance</option>
                                <option value="Extra Amenities">Extra Amenities</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Wake-up Call">Wake-up Call</option>
                                <option value="Luggage Assistance">Luggage Assistance</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                value={newRequest.description}
                                onChange={handleNewRequestChange}
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="action-button primary-button">Submit Request</button>
                    </form>
                </div>

                <div className="service-requests-list-card">
                    <h4>Current & Past Requests</h4>
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Req. ID</th>
                                    <th>Room</th>
                                    <th>Guest</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRequests.length > 0 ? (
                                    currentRequests.map(request => (
                                        <tr key={request.id}>
                                            <td>{request.id}</td>
                                            <td>{request.roomNumber}</td>
                                            <td>{request.guestName}</td>
                                            <td>{request.requestType}</td>
                                            <td>
                                                <span className={`status-badge ${getStatusClass(request.status)}`}>
                                                    {request.status}
                                                </span>
                                            </td>
                                            <td>
                                                {request.status === 'Pending' && (
                                                    <>
                                                        <button className="action-button small-button" onClick={() => handleUpdateRequestStatus(request.id, 'In Progress')}>Start</button>
                                                        <button className="action-button small-button text-danger" onClick={() => handleUpdateRequestStatus(request.id, 'Cancelled')}>Cancel</button>
                                                    </>
                                                )}
                                                {request.status === 'In Progress' && (
                                                    <button className="action-button small-button text-success" onClick={() => handleUpdateRequestStatus(request.id, 'Completed')}>Complete</button>
                                                )}
                                                {request.status === 'Completed' && (
                                                    <span className="action-complete-text">Resolved</span>
                                                )}
                                                {request.status === 'Cancelled' && (
                                                    <span className="action-complete-text text-danger">Cancelled</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="no-data-message">No service requests found.</td>
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

export default ServiceRequests;