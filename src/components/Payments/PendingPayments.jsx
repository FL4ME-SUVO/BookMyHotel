import React from 'react';

const PendingPayments = () => {
    // Dummy data for pending payments
    const pendingPayments = [
        {
            invoiceId: 'INV001',
            bookingId: 'BKG001',
            guestName: 'John Doe',
            amount: 5000,
            dueDate: '2025-05-28',
            status: 'Due',
            currency: 'INR'
        },
        {
            invoiceId: 'INV002',
            bookingId: 'BKG002',
            guestName: 'Jane Smith',
            amount: 7500,
            dueDate: '2025-06-03',
            status: 'Due',
            currency: 'INR'
        },
        {
            invoiceId: 'INV003',
            bookingId: 'BKG005',
            guestName: 'Robert Johnson',
            amount: 2500,
            dueDate: '2025-05-21',
            status: 'Overdue',
            currency: 'INR'
        },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Due':
                return 'status-pending-due';
            case 'Overdue':
                return 'status-pending-overdue';
            case 'Partial':
                return 'status-pending-partial';
            default:
                return '';
        }
    };

    const handleMarkAsPaid = (invoiceId) => {
        console.log(`Marking invoice ${invoiceId} as paid (simulated).`);
        alert(`Invoice ${invoiceId} marked as paid!`);
        // In a real application, you'd update the backend and refresh the list
    };

    return (
        <div className="pending-payments-section">
            <h3>Pending and Due Payments</h3>
            <div className="table-responsive">
                <table className="payments-table">
                    <thead>
                        <tr>
                            <th>Invoice ID</th>
                            <th>Booking ID</th>
                            <th>Guest Name</th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingPayments.length > 0 ? (
                            pendingPayments.map(payment => (
                                <tr key={payment.invoiceId}>
                                    <td>{payment.invoiceId}</td>
                                    <td>{payment.bookingId}</td>
                                    <td>{payment.guestName}</td>
                                    <td>{payment.currency} {payment.amount.toLocaleString('en-IN')}</td>
                                    <td>{payment.dueDate}</td>
                                    <td>
                                        <span className={`payment-status ${getStatusClass(payment.status)}`}>
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="action-button pay-button"
                                            onClick={() => handleMarkAsPaid(payment.invoiceId)}
                                        >
                                            Mark as Paid
                                        </button>
                                        <button className="action-button view-button">View Invoice</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="no-data-message">No pending payments found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingPayments;