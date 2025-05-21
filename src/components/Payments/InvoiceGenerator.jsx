import React, { useState } from 'react';

const InvoiceGenerator = () => {
    const [invoiceDetails, setInvoiceDetails] = useState({
        bookingId: '',
        guestName: '',
        roomNumber: '',
        checkinDate: '',
        checkoutDate: '',
        items: [{ description: 'Room Charges', quantity: 1, unitPrice: 0 }],
        discount: 0,
        taxRate: 18, // Example default tax rate for India (GST)
        notes: '',
    });

    const [generatedInvoice, setGeneratedInvoice] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoiceDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const newItems = [...invoiceDetails.items];
        newItems[index] = {
            ...newItems[index],
            [name]: name === 'quantity' || name === 'unitPrice' ? parseFloat(value) || 0 : value
        };
        setInvoiceDetails(prevState => ({ ...prevState, items: newItems }));
    };

    const handleAddItem = () => {
        setInvoiceDetails(prevState => ({
            ...prevState,
            items: [...prevState.items, { description: '', quantity: 1, unitPrice: 0 }]
        }));
    };

    const handleRemoveItem = (index) => {
        setInvoiceDetails(prevState => ({
            ...prevState,
            items: prevState.items.filter((_, i) => i !== index)
        }));
    };

    const calculateTotals = () => {
        let subtotal = invoiceDetails.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
        let discountAmount = invoiceDetails.discount;
        let taxableAmount = subtotal - discountAmount;
        let taxAmount = (taxableAmount * invoiceDetails.taxRate) / 100;
        let totalAmount = taxableAmount + taxAmount;

        return { subtotal, discountAmount, taxAmount, totalAmount };
    };

    const handleGenerateInvoice = (e) => {
        e.preventDefault();
        const { subtotal, discountAmount, taxAmount, totalAmount } = calculateTotals();
        const invoiceData = {
            ...invoiceDetails,
            invoiceDate: new Date().toISOString().split('T')[0],
            subtotal: subtotal.toFixed(2),
            discountAmount: discountAmount.toFixed(2),
            taxAmount: taxAmount.toFixed(2),
            totalAmount: totalAmount.toFixed(2),
            invoiceNumber: `INV-${Date.now()}` // Simple unique ID
        };
        setGeneratedInvoice(invoiceData);
        console.log('Generated Invoice:', invoiceData);
        alert('Invoice generated successfully!');
        // In a real app, you might send this to a backend for saving or PDF generation
    };

    return (
        <div className="invoice-generator-section">
            <h3>Generate Invoice</h3>
            <form onSubmit={handleGenerateInvoice} className="invoice-form">
                <div className="form-group">
                    <label htmlFor="bookingId">Booking ID (Optional):</label>
                    <input
                        type="text"
                        id="bookingId"
                        name="bookingId"
                        value={invoiceDetails.bookingId}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="guestName">Guest Name:</label>
                    <input
                        type="text"
                        id="guestName"
                        name="guestName"
                        value={invoiceDetails.guestName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="roomNumber">Room Number (Optional):</label>
                    <input
                        type="text"
                        id="roomNumber"
                        name="roomNumber"
                        value={invoiceDetails.roomNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="checkinDate">Check-in Date:</label>
                    <input
                        type="date"
                        id="checkinDate"
                        name="checkinDate"
                        value={invoiceDetails.checkinDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="checkoutDate">Check-out Date:</label>
                    <input
                        type="date"
                        id="checkoutDate"
                        name="checkoutDate"
                        value={invoiceDetails.checkoutDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h4>Invoice Items</h4>
                {invoiceDetails.items.map((item, index) => (
                    <div key={index} className="invoice-item-group">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) => handleItemChange(index, e)}
                            required
                        />
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Qty"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(index, e)}
                            min="1"
                            required
                        />
                        <input
                            type="number"
                            name="unitPrice"
                            placeholder="Unit Price"
                            value={item.unitPrice}
                            onChange={(e) => handleItemChange(index, e)}
                            min="0"
                            step="0.01"
                            required
                        />
                        <button type="button" onClick={() => handleRemoveItem(index)} className="remove-item-button">
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={handleAddItem} className="add-item-button">
                    Add Item
                </button>

                <div className="form-group">
                    <label htmlFor="discount">Discount (INR):</label>
                    <input
                        type="number"
                        id="discount"
                        name="discount"
                        value={invoiceDetails.discount}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="taxRate">Tax Rate (%):</label>
                    <input
                        type="number"
                        id="taxRate"
                        name="taxRate"
                        value={invoiceDetails.taxRate}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes:</label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={invoiceDetails.notes}
                        onChange={handleChange}
                        rows="3"
                    ></textarea>
                </div>

                <div className="invoice-summary">
                    <h4>Summary:</h4>
                    <p>Subtotal: INR {calculateTotals().subtotal.toFixed(2)}</p>
                    <p>Discount: INR {calculateTotals().discountAmount.toFixed(2)}</p>
                    <p>Tax ({invoiceDetails.taxRate}%): INR {calculateTotals().taxAmount.toFixed(2)}</p>
                    <p><strong>Total Amount: INR {calculateTotals().totalAmount.toFixed(2)}</strong></p>
                </div>

                <button type="submit" className="submit-button">Generate Invoice</button>
            </form>

            {generatedInvoice && (
                <div className="generated-invoice-preview">
                    <h4>Generated Invoice Preview:</h4>
                    <div className="invoice-card">
                        <p><strong>Invoice No:</strong> {generatedInvoice.invoiceNumber}</p>
                        <p><strong>Date:</strong> {generatedInvoice.invoiceDate}</p>
                        <p><strong>Guest:</strong> {generatedInvoice.guestName}</p>
                        {generatedInvoice.bookingId && <p><strong>Booking ID:</strong> {generatedInvoice.bookingId}</p>}
                        {generatedInvoice.roomNumber && <p><strong>Room No:</strong> {generatedInvoice.roomNumber}</p>}
                        <p><strong>Check-in:</strong> {generatedInvoice.checkinDate}</p>
                        <p><strong>Check-out:</strong> {generatedInvoice.checkoutDate}</p>

                        <h5>Items:</h5>
                        <table className="invoice-items-table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Qty</th>
                                    <th>Unit Price (INR)</th>
                                    <th>Total (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generatedInvoice.items.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.description}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.unitPrice.toFixed(2)}</td>
                                        <td>{(item.quantity * item.unitPrice).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="invoice-totals">
                            <p>Subtotal: INR {generatedInvoice.subtotal}</p>
                            <p>Discount: INR {generatedInvoice.discountAmount}</p>
                            <p>Tax ({generatedInvoice.taxRate}%): INR {generatedInvoice.taxAmount}</p>
                            <p><strong>Total: INR {generatedInvoice.totalAmount}</strong></p>
                        </div>
                        {generatedInvoice.notes && <p className="invoice-notes">Notes: {generatedInvoice.notes}</p>}
                        <button className="action-button print-button" onClick={() => alert('Simulating Print Invoice...')}>Print Invoice</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InvoiceGenerator;