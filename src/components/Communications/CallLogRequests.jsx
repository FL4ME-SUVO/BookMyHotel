import React, { useState } from 'react';

const CallLogRequests = () => {
    const [newCallLog, setNewCallLog] = useState({
        roomNumber: '',
        guestName: '',
        callType: 'Incoming', // Incoming, Outgoing, Guest Request
        purpose: '',
        duration: '', // Optional: for actual calls
        status: 'Completed', // For logs
    });

    const [callHistory, setCallHistory] = useState([
        { id: 'CALL001', roomNumber: '101', guestName: 'John Doe', callType: 'Guest Request', purpose: 'Wake-up Call (7 AM)', status: 'Pending', timestamp: '2025-05-20 06:00 AM' },
        { id: 'CALL002', roomNumber: '205', guestName: 'Jane Smith', callType: 'Outgoing', purpose: 'Confirm late checkout', status: 'Completed', timestamp: '2025-05-19 09:30 AM', duration: '2 min' },
        { id: 'CALL003', roomNumber: 'N/A', guestName: 'Vendor Support', callType: 'Incoming', purpose: 'Maintenance scheduling', status: 'Completed', timestamp: '2025-05-18 02:00 PM', duration: '5 min' },
        { id: 'CALL004', roomNumber: '307', guestName: 'Robert Johnson', callType: 'Guest Request', purpose: 'Taxi Booking', status: 'In Progress', timestamp: '2025-05-20 04:00 PM' },
    ]);

    const handleNewCallLogChange = (e) => {
        const { name, value } = e.target;
        setNewCallLog(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogCall = (e) => {
        e.preventDefault();
        const logEntry = {
            ...newCallLog,
            id: `CALL${String(callHistory.length + 1).padStart(3, '0')}`,
            timestamp: new Date().toLocaleString(),
        };
        setCallHistory(prevHistory => [logEntry, ...prevHistory]); // Add to top
        alert('Call log/request added successfully!');
        setNewCallLog({ // Reset form
            roomNumber: '',
            guestName: '',
            callType: 'Incoming',
            purpose: '',
            duration: '',
            status: 'Completed',
        });
    };

    const handleUpdateCallStatus = (callId, newStatus) => {
        setCallHistory(prevHistory =>
            prevHistory.map(call =>
                call.id === callId ? { ...call, status: newStatus } : call
            )
        );
        alert(`Call/Request ${callId} status updated to ${newStatus}`);
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
        <div className="call-log-requests-section">
            <h3 className="section-title">Call Log & Requests</h3>
            <div className="communication-content-grid">
                <div className="call-log-form-card">
                    <h4>Log New Call / Request</h4>
                    <form onSubmit={handleLogCall} className="call-log-form">
                        <div className="form-group">
                            <label htmlFor="roomNumber">Room Number (Optional):</label>
                            <input
                                type="text"
                                id="roomNumber"
                                name="roomNumber"
                                value={newCallLog.roomNumber}
                                onChange={handleNewCallLogChange}
                                placeholder="e.g., 101"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guestName">Guest Name / Caller Name:</label>
                            <input
                                type="text"
                                id="guestName"
                                name="guestName"
                                value={newCallLog.guestName}
                                onChange={handleNewCallLogChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="callType">Call Type:</label>
                            <select
                                id="callType"
                                name="callType"
                                value={newCallLog.callType}
                                onChange={handleNewCallLogChange}
                                required
                            >
                                <option value="Incoming">Incoming Call</option>
                                <option value="Outgoing">Outgoing Call</option>
                                <option value="Guest Request">Guest Call Request</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="purpose">Purpose / Description:</label>
                            <textarea
                                id="purpose"
                                name="purpose"
                                value={newCallLog.purpose}
                                onChange={handleNewCallLogChange}
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        {newCallLog.callType !== 'Guest Request' && (
                            <div className="form-group">
                                <label htmlFor="duration">Duration (e.g., "5 min"):</label>
                                <input
                                    type="text"
                                    id="duration"
                                    name="duration"
                                    value={newCallLog.duration}
                                    onChange={handleNewCallLogChange}
                                />
                            </div>
                        )}
                         <div className="form-group">
                            <label htmlFor="status">Status:</label>
                            <select
                                id="status"
                                name="status"
                                value={newCallLog.status}
                                onChange={handleNewCallLogChange}
                                required
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                        <button type="submit" className="action-button primary-button">Log Call</button>
                    </form>
                </div>

                <div className="call-history-list-card">
                    <h4>Call History</h4>
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Call ID</th>
                                    <th>Room/Caller</th>
                                    <th>Type</th>
                                    <th>Purpose</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {callHistory.length > 0 ? (
                                    callHistory.map(call => (
                                        <tr key={call.id}>
                                            <td data-label="Call ID:">{call.id}</td>
                                            <td data-label="Room/Caller:">{call.roomNumber || call.guestName}</td>
                                            <td data-label="Type:">{call.callType}</td>
                                            <td data-label="Purpose:">{call.purpose}</td>
                                            <td data-label="Time:">{call.timestamp} {call.duration && `(${call.duration})`}</td>
                                            <td data-label="Status:">
                                                <span className={`status-badge ${getStatusClass(call.status)}`}>
                                                    {call.status}
                                                </span>
                                            </td>
                                            <td data-label="Actions:">
                                                {call.status === 'Pending' && (
                                                    <>
                                                        <button className="action-button small-button" onClick={() => handleUpdateCallStatus(call.id, 'In Progress')}>Start</button>
                                                        <button className="action-button small-button text-danger" onClick={() => handleUpdateCallStatus(call.id, 'Cancelled')}>Cancel</button>
                                                    </>
                                                )}
                                                {call.status === 'In Progress' && (
                                                    <button className="action-button small-button text-success" onClick={() => handleUpdateCallStatus(call.id, 'Completed')}>Complete</button>
                                                )}
                                                {(call.status === 'Completed' || call.status === 'Cancelled') && (
                                                    <span className="action-complete-text">{call.status}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="no-data-message">No call history or requests found.</td>
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

export default CallLogRequests;