import React, { useState } from 'react';
import DailySummaryReport from './DailySummaryReport';
import OccupancyReport from './OccupancyReport';
import RevenueReport from './RevenueReport';
import './ReportsManagement.css'; // Import the CSS file

const ReportsManagement = () => {
    const [activeReport, setActiveReport] = useState('dailySummary'); // Default active report

    const renderReportComponent = () => {
        switch (activeReport) {
            case 'dailySummary':
                return <DailySummaryReport />;
            case 'occupancyReport':
                return <OccupancyReport />;
            case 'revenueReport':
                return <RevenueReport />;
            default:
                return <DailySummaryReport />;
        }
    };

    return (
        <div className="reports-management-container">
            <h2 className="reports-dashboard-title">Hotel Reports & Analytics</h2>

            <nav className="reports-navigation">
                <button
                    className={`nav-button ${activeReport === 'dailySummary' ? 'active' : ''}`}
                    onClick={() => setActiveReport('dailySummary')}
                >
                    Daily Summary
                </button>
                <button
                    className={`nav-button ${activeReport === 'occupancyReport' ? 'active' : ''}`}
                    onClick={() => setActiveReport('occupancyReport')}
                >
                    Occupancy Report
                </button>
                <button
                    className={`nav-button ${activeReport === 'revenueReport' ? 'active' : ''}`}
                    onClick={() => setActiveReport('revenueReport')}
                >
                    Revenue Report
                </button>
            </nav>

            <div className="report-content-display">
                {renderReportComponent()}
            </div>
        </div>
    );
};

export default ReportsManagement;