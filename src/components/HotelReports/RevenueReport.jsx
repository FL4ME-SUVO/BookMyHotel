import React, { useState, useEffect } from 'react';

const RevenueReport = () => {
    const [startDate, setStartDate] = useState(() => {
        const d = new Date();
        d.setDate(1); // First day of current month
        return d.toISOString().split('T')[0];
    });
    const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);

    // Mock Data for Revenue Report
    const getMockRevenueData = (start, end) => {
        const data = {
            totalRevenue: 0,
            roomRevenue: 0,
            fbRevenue: 0,
            otherRevenue: 0,
            avgRevPerRoom: 0,
            avgRoomRate: 0,
            transactions: []
        };

        const currentDate = new Date(start);
        const lastDate = new Date(end);
        let totalRoomNights = 0;
        let totalRoomsSold = 0;

        while (currentDate <= lastDate) {
            const dateString = currentDate.toISOString().split('T')[0];
            const dailyRoomRevenue = Math.floor(Math.random() * (150000 - 80000 + 1)) + 80000; // 80k-150k
            const dailyFbRevenue = Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000; // 10k-25k
            const dailyOtherRevenue = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // 1k-5k
            const dailyTotal = dailyRoomRevenue + dailyFbRevenue + dailyOtherRevenue;

            const roomsSoldToday = Math.floor(Math.random() * (90 - 50 + 1)) + 50; // 50-90 rooms sold
            totalRoomsSold += roomsSoldToday;

            data.totalRevenue += dailyTotal;
            data.roomRevenue += dailyRoomRevenue;
            data.fbRevenue += dailyFbRevenue;
            data.otherRevenue += dailyOtherRevenue;
            totalRoomNights += roomsSoldToday; // Simplified: assuming roomsSoldToday is room-nights

            data.transactions.push({
                date: dateString,
                room: dailyRoomRevenue,
                fb: dailyFbRevenue,
                other: dailyOtherRevenue,
                total: dailyTotal
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }

        if (totalRoomsSold > 0) {
            data.avgRoomRate = (data.roomRevenue / totalRoomsSold).toFixed(2);
            data.avgRevPerRoom = (data.totalRevenue / totalRoomsSold).toFixed(2); // Simplified RevPAR for rooms sold
        }


        return data;
    };

    const [revenueData, setRevenueData] = useState({
        totalRevenue: 0,
        roomRevenue: 0,
        fbRevenue: 0,
        otherRevenue: 0,
        avgRevPerRoom: 0,
        avgRoomRate: 0,
        transactions: []
    });

    useEffect(() => {
        setRevenueData(getMockRevenueData(startDate, endDate));
    }, [startDate, endDate]);

    return (
        <div className="report-section">
            <h3 className="report-title">Revenue Report</h3>
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

            {revenueData.totalRevenue === 0 && revenueData.transactions.length === 0 ? (
                 <div className="no-data-message">No revenue data available for the selected date range.</div>
            ) : (
                <>
                    <div className="revenue-summary-cards">
                        <div className="summary-card big-card primary-card">
                            <h4>Total Revenue (INR)</h4>
                            <p className="card-value">INR {revenueData.totalRevenue.toLocaleString()}</p>
                        </div>
                        <div className="summary-card big-card success-card">
                            <h4>Room Revenue (INR)</h4>
                            <p className="card-value">INR {revenueData.roomRevenue.toLocaleString()}</p>
                        </div>
                        <div className="summary-card info-card">
                            <h4>F&B Revenue (INR)</h4>
                            <p className="card-value">INR {revenueData.fbRevenue.toLocaleString()}</p>
                        </div>
                        <div className="summary-card warning-card">
                            <h4>Other Revenue (INR)</h4>
                            <p className="card-value">INR {revenueData.otherRevenue.toLocaleString()}</p>
                        </div>
                        <div className="summary-card default-card">
                            <h4>Avg. Rev. Per Room (INR)</h4>
                            <p className="card-value">INR {revenueData.avgRevPerRoom}</p>
                        </div>
                        <div className="summary-card default-card">
                            <h4>Avg. Room Rate (INR)</h4>
                            <p className="card-value">INR {revenueData.avgRoomRate}</p>
                        </div>
                    </div>

                    <h4 className="sub-section-title">Daily Revenue Breakdown</h4>
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Room Revenue (INR)</th>
                                    <th>F&B Revenue (INR)</th>
                                    <th>Other Revenue (INR)</th>
                                    <th>Daily Total (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {revenueData.transactions.map((transaction, index) => (
                                    <tr key={index}>
                                        <td data-label="Date:">{transaction.date}</td>
                                        <td data-label="Room Revenue (INR):">{transaction.room.toLocaleString()}</td>
                                        <td data-label="F&B Revenue (INR):">{transaction.fb.toLocaleString()}</td>
                                        <td data-label="Other Revenue (INR):">{transaction.other.toLocaleString()}</td>
                                        <td data-label="Daily Total (INR):"><strong>{transaction.total.toLocaleString()}</strong></td>
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

export default RevenueReport;