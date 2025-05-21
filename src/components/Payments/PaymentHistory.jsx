import React from 'react';

const PaymentHistory = () => {
    // Dummy data for payment history
    const paymentHistory = [
        {
            transactionId: 'TRN98765',
            invoiceId: 'INV004',
            bookingId: 'BKG003',
            guestName: 'Peter Jones',
            amount: 3000,
            paymentDate: '2025-05-22',
            method: 'Credit Card',
            currency: 'INR'
        },
        {
            transactionId: 'TRN12345',
            invoiceId: 'INV005',
            bookingId: 'BKG004',
            guestName: 'Alice Brown',
            amount: 6000,
            paymentDate: '2025-05-18',
            method: 'Online Transfer',
            currency: 'INR'
        },
        {
            transactionId: 'TRN00010',
            invoiceId: 'INV006',
            bookingId: 'BKG006',
            guestName: 'Emily Clark',
            amount: 4500,
            paymentDate: '2025-05-10',
            method: 'Cash',
            currency: 'INR'
        },
    ];

    return (
        <div className="payment-history-section">
            <h3>Completed Payment History</h3>
            <div className="table-responsive">
                <table className="payments-table">
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Invoice ID</th>
                            <th>Booking ID</th>
                            <th>Guest Name</th>
                            <th>Amount Paid</th>
                            <th>Payment Date</th>
                            <th>Method</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.length > 0 ? (
                            paymentHistory.map(payment => (
                                <tr key={payment.transactionId}>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.invoiceId}</td>
                                    <td>{payment.bookingId}</td>
                                    <td>{payment.guestName}</td>
                                    <td>{payment.currency} {payment.amount.toLocaleString('en-IN')}</td>
                                    <td>{payment.paymentDate}</td>
                                    <td>{payment.method}</td>
                                    <td>
                                        <button className="action-button view-button">View Receipt</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="no-data-message">No payment history found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;