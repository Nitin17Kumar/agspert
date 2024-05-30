import React, { useState } from 'react';
import './Addsales.css';

const AddSalesOrder = ({ addSalesOrder }) => {
  const [id, setId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = { id, customerName, price, date, lastModification: new Date().toISOString().split('T')[0], status: 'Active' };
    addSalesOrder(newOrder);
    handleReset();
    hideForm();
  };

  const handleReset = () => {
    setId('');
    setCustomerName('');
    setPrice('');
    setDate('');
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="form-container">
      {!isFormVisible && (
        <button onClick={showForm} className="add-sales-button">Add Sales</button>
      )}
      {isFormVisible && (
        <div className="modal">
          <div className="modal-content">
            <div className="close">
              <button onClick={hideForm} className="close-button">×</button>
            </div>
            <h2>Add Sales Order</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>ID:</label>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Customer Name:</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset} className="reset-button">Reset</button>
              </div>
            </form>
          </div>
          <div className="modal-background"></div>
        </div>
      )}
    </div>
  );
};

export default AddSalesOrder;
