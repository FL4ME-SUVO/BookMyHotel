import React, { useState, useEffect } from 'react';

const OccupancyReport = () => {
    const [startDate, setStartDate] = useState(() => {
        const d = new Date();
        d.setDate(1); // First day of current month
        return d.toISOString().split('T')[0];
    });
    const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);

    // Mock Data for Occupancy - simplified
    const getMockOccupancyData = (start, end) => {
        const data = [];
        const currentDate = new Date(start);
        const lastDate = new Date(end);

        const totalRooms = 100; // Example total rooms

        while (currentDate <= lastDate) {
            const dateString = currentDate.toISOString().split('T')[0];
            let occupiedRooms;
            let bookedRooms;

            // Simple mock logic: more occupied on weekends
            if (currentDate.getDay() === 0 || currentDate.getDay() === 6) { // Sunday or Saturday
                occupiedRooms = Math.floor(totalRooms * (0.8 + Math.random() * 0.15)); // 80-95%
                bookedRooms = Math.floor(totalRooms * (0.9 + Math.random() * 0.05)); // 90-95%
            } else {
                occupiedRooms = Math.floor(totalRooms * (0.6 + Math.random() * 0.2)); // 60-80%
                bookedRooms = Math.floor(totalRooms * (0.7 + Math.random() * 0.1)); // 70-80%
            }

            occupiedRooms = Math.min(occupiedRooms, totalRooms);
            bookedRooms = Math.min(bookedRooms, totalRooms);

            data.push({
                date: dateString,
                totalRooms: totalRooms,
                occupiedRooms: occupiedRooms,
                availableRooms: totalRooms - occupiedRooms,
                occupancyRate: ((occupiedRooms / totalRooms) * 100).toFixed(2),
                bookedRooms: bookedRooms, // Rooms with future bookings for the day
                bookingRate: ((bookedRooms / totalRooms) * 100).toFixed(2) // Booked vs Total
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return data;
    };

    const [occupancyData, setOccupancyData] = useState([]);
    const [averageOccupancy, setAverageOccupancy] = useState(0);
    const [peakOccupancy, setPeakOccupancy] = useState({ date: 'N/A', rate: 0 });

    useEffect(() => {
        const data = getMockOccupancyData(startDate, endDate);
        setOccupancyData(data);

        if (data.length > 0) {
            const totalRates = data.reduce((sum, item) => sum + parseFloat(item.occupancyRate), 0);
            setAverageOccupancy((totalRates / data.length).toFixed(2));

            const peak = data.reduce((max, item) => parseFloat(item.occupancyRate) > max.rate ? { date: item.date, rate: parseFloat(item.occupancyRate) } : max, { date: 'N/A', rate: 0 });
            setPeakOccupancy(peak);
        } else {
            setAverageOccupancy(0);
            setPeakOccupancy({ date: 'N/A', rate: 0 });
        }
    }, [startDate, endDate]);

    return (
        <div className="report-section">
            <h3 className="report-title">Occupancy Report</h3>
            <div className="report-controls date-range-controls">
                <div className="form-group">
                    <label htmlFor="start-date">Start Date:</label>
                    <input
                        type="date"
                        id="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="date-picker"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="end-date">End Date:</label>
                    <input
                        type="date"
                        id="end-date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="date-picker"
                    />
                </div>
            </div>

            {occupancyData.length === 0 ? (
                <div className="no-data-message">No occupancy data available for the selected date range.</div>
            ) : (
                <>
                    <div className="occupancy-summary-cards">
                        <div className="summary-card big-card primary-card">
                            <h4>Average Occupancy</h4>
                            <p className="card-value">{averageOccupancy}%</p>
                        </div>
                        <div className="summary-card big-card info-card">
                            <h4>Peak Occupancy</h4>
                            <p className="card-value">{peakOccupancy.rate}%</p>
                            <span className="card-sub-value">On: {peakOccupancy.date}</span>
                        </div>
                        <div className="summary-card big-card success-card">
                            <h4>Total Rooms</h4>
                            <p className="card-value">{occupancyData[0].totalRooms}</p>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Total Rooms</th>
                                    <th>Occupied</th>
                                    <th>Available</th>
                                    <th>Occupancy Rate</th>
                                    <th>Booked (Future)</th>
                                    <th>Booking Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {occupancyData.map((data, index) => (
                                    <tr key={index}>
                                        <td data-label="Date:">{data.date}</td>
                                        <td data-label="Total Rooms:">{data.totalRooms}</td>
                                        <td data-label="Occupied:">{data.occupiedRooms}</td>
                                        <td data-label="Available:">{data.availableRooms}</td>
                                        <td data-label="Occupancy Rate:">
                                            <span className={`status-badge ${data.occupancyRate > 80 ? 'status-completed-badge' : data.occupancyRate > 60 ? 'status-in-progress-badge' : 'status-pending-badge'}`}>
                                                {data.occupancyRate}%
                                            </span>
                                        </td>
                                        <td data-label="Booked (Future):">{data.bookedRooms}</td>
                                        <td data-label="Booking Rate:">
                                            <span className={`status-badge ${data.bookingRate > 80 ? 'status-completed-badge' : data.bookingRate > 60 ? 'status-in-progress-badge' : 'status-pending-badge'}`}>
                                                {data.bookingRate}%
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default OccupancyReport;