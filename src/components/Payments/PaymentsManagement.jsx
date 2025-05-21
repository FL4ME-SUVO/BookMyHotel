import React, { useState } from 'react';
import PendingPayments from './PendingPayments';
import PaymentHistory from './PaymentHistory';
import InvoiceGenerator from './InvoiceGenerator';
import './PaymentsManagement.css'; // Import the CSS file

const PaymentsManagement = () => {
    const [activeTab, setActiveTab] = useState('pendingPayments');

    const renderContent = () => {
        switch (activeTab) {
            case 'pendingPayments':
                return <PendingPayments />;
            case 'paymentHistory':
                return <PaymentHistory />;
            case 'invoiceGenerator':
                return <InvoiceGenerator />;
            default:
                return <PendingPayments />;
        }
    };

    return (
        <div className="payments-management-container">
            <h2 className="payments-management-title">Payments Management</h2>
            <div className="payments-management-tabs">
                <button
                    className={`tab-button ${activeTab === 'pendingPayments' ? 'active' : ''}`}
                    onClick={() => setActiveTab('pendingPayments')}
                >
                    Pending Payments
                </button>
                <button
                    className={`tab-button ${activeTab === 'paymentHistory' ? 'active' : ''}`}
                    onClick={() => setActiveTab('paymentHistory')}
                >
                    Payment History
                </button>
                <button
                    className={`tab-button ${activeTab === 'invoiceGenerator' ? 'active' : ''}`}
                    onClick={() => setActiveTab('invoiceGenerator')}
                >
                    Invoice Generator
                </button>
            </div>
            <div className="payments-management-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default PaymentsManagement;