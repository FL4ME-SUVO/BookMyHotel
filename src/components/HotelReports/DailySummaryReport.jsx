import React, { useState, useEffect } from 'react';

const DailySummaryReport = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Today's date

    // Mock Data for a specific date
    const getMockDailyData = (date) => {
        // This would typically come from an API call based on the selected date
        if (date === '2025-05-20') {
            return {
                arrivals: 15,
                departures: 12,
                inHouseGuests: 85,
                newBookings: 7,
                cancelledBookings: 2,
                foodOrders: { count: 25, revenue: 12500 },
                serviceRequests: { total: 18, completed: 15, pending: 3 },
                totalRevenue: 250000,
                expenses: 80000,
            };
        } else if (date === '2025-05-19') {
            return {
                arrivals: 10,
                departures: 14,
                inHouseGuests: 80,
                newBookings: 5,
                cancelledBookings: 1,
                foodOrders: { count: 20, revenue: 10000 },
                serviceRequests: { total: 15, completed: 14, pending: 1 },
                totalRevenue: 220000,
                expenses: 75000,
            };
        }
        return {
            arrivals: 0,
            departures: 0,
            inHouseGuests: 0,
            newBookings: 0,
            cancelledBookings: 0,
            foodOrders: { count: 0, revenue: 0 },
            serviceRequests: { total: 0, completed: 0, pending: 0 },
            totalRevenue: 0,
            expenses: 0,
        };
    };

    const [dailyData, setDailyData] = useState(getMockDailyData(selectedDate));

    useEffect(() => {
        setDailyData(getMockDailyData(selectedDate));
    }, [selectedDate]);

    return (
        <div className="report-section">
            <h3 className="report-title">Daily Summary Report</h3>
            <div className="report-controls">
                <label htmlFor="report-date">Select Date:</label>
                <input
                    type="date"
                    id="report-date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="date-picker"
                />
            </div>

            {dailyData.arrivals === 0 && dailyData.departures === 0 && dailyData.inHouseGuests === 0 &&
             dailyData.newBookings === 0 && dailyData.totalRevenue === 0 ? (
                <div className="no-data-message">No data available for {selectedDate}.</div>
            ) : (
                <div className="summary-grid">
                    <div className="summary-card primary-card">
                        <span className="card-icon">🏨</span>
                        <h4>In-House Guests</h4>
                        <p className="card-value">{dailyData.inHouseGuests}</p>
                    </div>

                    <div className="summary-card info-card">
                        <span className="card-icon">⬆️</span>
                        <h4>Arrivals Today</h4>
                        <p className="card-value">{dailyData.arrivals}</p>
                    </div>

                    <div className="summary-card danger-card">
                        <span className="card-icon">⬇️</span>
                        <h4>Departures Today</h4>
                        <p className="card-value">{dailyData.departures}</p>
                    </div>

                    <div className="summary-card success-card">
                        <span className="card-icon">➕</span>
                        <h4>New Bookings</h4>
                        <p className="card-value">{dailyData.newBookings}</p>
                    </div>

                    <div className="summary-card warning-card">
                        <span className="card-icon">➖</span>
                        <h4>Cancelled Bookings</h4>
                        <p className="card-value">{dailyData.cancelledBookings}</p>
                    </div>

                    <div className="summary-card revenue-card">
                        <span className="card-icon">💰</span>
                        <h4>Total Revenue (INR)</h4>
                        <p className="card-value">INR {dailyData.totalRevenue.toLocaleString()}</p>
                    </div>

                    <div className="summary-card expense-card">
                        <span className="card-icon">💸</span>
                        <h4>Total Expenses (INR)</h4>
                        <p className="card-value">INR {dailyData.expenses.toLocaleString()}</p>
                    </div>

                    <div className="summary-card service-card">
                        <span className="card-icon">🍽️</span>
                        <h4>F&B Orders</h4>
                        <p className="card-value">{dailyData.foodOrders.count}</p>
                        <span className="card-sub-value">Revenue: INR {dailyData.foodOrders.revenue.toLocaleString()}</span>
                    </div>

                    <div className="summary-card service-card">
                        <span className="card-icon">🛎️</span>
                        <h4>Service Requests</h4>
                        <p className="card-value">{dailyData.serviceRequests.total}</p>
                        <span className="card-sub-value">Completed: {dailyData.serviceRequests.completed} | Pending: {dailyData.serviceRequests.pending}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DailySummaryReport;