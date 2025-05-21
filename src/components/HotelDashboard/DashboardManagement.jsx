import React, { useState, useEffect } from 'react';
import './DashboardManagement.css'; // Import the CSS file

const DashboardManagement = () => {
    const [overviewData, setOverviewData] = useState({
        totalRooms: 150,
        occupiedRooms: 95,
        availableRooms: 55,
        occupancyRate: 0,
        todayArrivals: 0,
        todayDepartures: 0,
        pendingServiceRequests: 0,
        upcomingBookings: 0, // Bookings for next 7 days
        totalRevenueToday: 0,
    });

    const [checkInsToday, setCheckInsToday] = useState([]);
    const [checkOutsToday, setCheckOutsToday] = useState([]);

    // Simulate fetching data
    useEffect(() => {
        const fetchDashboardData = () => {
            // Mock Data for Overview
            const totalRooms = 150;
            const occupied = Math.floor(Math.random() * (120 - 80 + 1)) + 80; // 80-120 occupied
            const available = totalRooms - occupied;
            const occupancy = ((occupied / totalRooms) * 100).toFixed(2);

            const arrivals = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
            const departures = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
            const pendingServices = Math.floor(Math.random() * (5 - 0 + 1));
            const upcoming = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // next 7 days
            const revenueToday = Math.floor(Math.random() * (300000 - 150000 + 1)) + 150000; // INR

            setOverviewData({
                totalRooms: totalRooms,
                occupiedRooms: occupied,
                availableRooms: available,
                occupancyRate: parseFloat(occupancy),
                todayArrivals: arrivals,
                todayDepartures: departures,
                pendingServiceRequests: pendingServices,
                upcomingBookings: upcoming,
                totalRevenueToday: revenueToday,
            });

            // Mock Data for Today's Check-ins
            setCheckInsToday([
                { id: 'R101', guestName: 'Alice Johnson', roomType: 'Deluxe Queen',arrivalTime: '11:00 AM', status: 'Confirmed' },
                { id: 'R102', guestName: 'Bob Williams', roomType: 'Standard King', arrivalTime: '12:30 PM', status: 'Confirmed' },
                { id: 'R103', guestName: 'Charlie Brown', roomType: 'Suite', arrivalTime: '02:00 PM', status: 'Confirmed' },
                { id: 'R104', guestName: 'Diana Prince', roomType: 'Deluxe Twin', arrivalTime: '03:00 PM', status: 'Pending' },
            ].slice(0, arrivals)); // Adjust based on mock arrivals count

            // Mock Data for Today's Check-outs
            setCheckOutsToday([
                { id: 'R201', guestName: 'Eva Green', roomType: 'Standard King', departureTime: '10:00 AM', status: 'Checked Out' },
                { id: 'R202', guestName: 'Frank White', roomType: 'Deluxe Queen', departureTime: '11:30 AM', status: 'Checked Out' },
                { id: 'R203', guestName: 'Grace Black', roomType: 'Suite', departureTime: '12:00 PM', status: 'Pending Payment' },
                { id: 'R204', guestName: 'Harry Red', roomType: 'Standard Twin', departureTime: '01:00 PM', status: 'Pending Housekeeping' },
            ].slice(0, departures)); // Adjust based on mock departures count
        };

        fetchDashboardData();

        // Optional: Refresh data every few minutes
        const interval = setInterval(fetchDashboardData, 300000); // 5 minutes
        return () => clearInterval(interval);
    }, []);

    const getStatusClass = (status) => {
        switch (status) {
            case 'Confirmed': return 'status-completed-badge';
            case 'Pending':
            case 'Pending Payment':
            case 'Pending Housekeeping': return 'status-pending-badge';
            case 'Checked Out': return 'status-default-badge'; // A new badge for checked out
            default: return '';
        }
    };

    return (
        <div className="dashboard-management-container">
            <h2 className="dashboard-title">Hotel Operations Dashboard</h2>

            {/* Overview Section */}
            <section className="dashboard-section overview-section">
                <h3 className="section-title">Overview</h3>
                <div className="overview-grid">
                    <div className="overview-card primary-card">
                        <span className="card-icon">🛏️</span>
                        <h4>Total Rooms</h4>
                        <p className="card-value">{overviewData.totalRooms}</p>
                    </div>
                    <div className="overview-card success-card">
                        <span className="card-icon"> 🛏️</span>
                        <h4>Occupied Rooms</h4>
                        <p className="card-value">{overviewData.occupiedRooms}</p>
                        <span className="card-sub-value">({overviewData.occupancyRate} % Occupancy)</span>
                    </div>
                    <div className="overview-card info-card">
                        <span className="card-icon"> 🛏️</span>
                        <h4>Available Rooms</h4>
                        <p className="card-value">{overviewData.availableRooms}</p>
                    </div>
                    <div className="overview-card warning-card">
                        <span className="card-icon">⬆️</span>
                        <h4>Today's Check-ins</h4>
                        <p className="card-value">{overviewData.todayArrivals}</p>
                    </div>
                    <div className="overview-card danger-card">
                        <span className="card-icon">⬇️</span>
                        <h4>Today's Check-outs</h4>
                        <p className="card-value">{overviewData.todayDepartures}</p>
                    </div>
                     <div className="overview-card service-card">
                        <span className="card-icon">🛎️</span>
                        <h4>Pending Service Requests</h4>
                        <p className="card-value">{overviewData.pendingServiceRequests}</p>
                    </div>
                    <div className="overview-card default-card">
                        <span className="card-icon">📅</span>
                        <h4>Upcoming Bookings (7 Days)</h4>
                        <p className="card-value">{overviewData.upcomingBookings}</p>
                    </div>
                    <div className="overview-card revenue-card">
                        <span className="card-icon">💰</span>
                        <h4>Revenue Today</h4>
                        <p className="card-value">INR {overviewData.totalRevenueToday.toLocaleString()}</p>
                    </div>
                </div>
            </section>

            {/* Today's Check-ins Section */}
            <section className="dashboard-section checkin-checkout-section">
                <h3 className="section-title">Today's Check-ins</h3>
                {checkInsToday.length > 0 ? (
                    <div className="table-responsive">
                        <table className="modern-table checkin-checkout-table">
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Guest Name</th>
                                    <th>Room Type</th>
                                    <th>Arrival Time</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {checkInsToday.map(guest => (
                                    <tr key={guest.id}>
                                        <td data-label="Booking ID:">{guest.id}</td>
                                        <td data-label="Guest Name:">{guest.guestName}</td>
                                        <td data-label="Room Type:">{guest.roomType}</td>
                                        <td data-label="Arrival Time:">{guest.arrivalTime}</td>
                                        <td data-label="Status:">
                                            <span className={`status-badge ${getStatusClass(guest.status)}`}>
                                                {guest.status}
                                            </span>
                                        </td>
                                        <td data-label="Actions:">
                                            <button className="action-button small-button primary-button">Assign Room</button>
                                            <button className="action-button small-button secondary-button">View Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="no-data-message">No check-ins scheduled for today.</div>
                )}
            </section>

            {/* Today's Check-outs Section */}
            <section className="dashboard-section checkin-checkout-section">
                <h3 className="section-title">Today's Check-outs</h3>
                {checkOutsToday.length > 0 ? (
                    <div className="table-responsive">
                        <table className="modern-table checkin-checkout-table">
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Guest Name</th>
                                    <th>Room Type</th>
                                    <th>Departure Time</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {checkOutsToday.map(guest => (
                                    <tr key={guest.id}>
                                        <td data-label="Booking ID:">{guest.id}</td>
                                        <td data-label="Guest Name:">{guest.guestName}</td>
                                        <td data-label="Room Type:">{guest.roomType}</td>
                                        <td data-label="Departure Time:">{guest.departureTime}</td>
                                        <td data-label="Status:">
                                            <span className={`status-badge ${getStatusClass(guest.status)}`}>
                                                {guest.status}
                                            </span>
                                        </td>
                                        <td data-label="Actions:">
                                            <button className="action-button small-button primary-button">Process Checkout</button>
                                            <button className="action-button small-button secondary-button">View Bill</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="no-data-message">No check-outs scheduled for today.</div>
                )}
            </section>
        </div>
    );
};

export default DashboardManagement;