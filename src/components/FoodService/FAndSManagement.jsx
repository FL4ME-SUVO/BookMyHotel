import React from 'react';
import FoodOrders from './FoodOrders';
import ServiceRequests from './ServiceRequests';
import './FAndSManagement.css'; // Import the new CSS file

const FAndSManagement = () => {
    return (
        <div className="fands-management-dashboard">
            <h2 className="fands-dashboard-title">Foods & Services Hub</h2>

            {/* Food Orders Section */}
            <section className="dashboard-section food-orders-section-container">
                <FoodOrders />
            </section>

            {/* Service Requests Section */}
            <section className="dashboard-section service-requests-section-container">
                <ServiceRequests />
            </section>
        </div>
    );
};

export default FAndSManagement