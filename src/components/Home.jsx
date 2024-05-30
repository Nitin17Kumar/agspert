import React, { useState } from 'react';
import './Home.css';
import AddSalesOrder from './Addsales';
import CompletedOrders from './Completed';

const Home = () => {
  const [salesOrders, setSalesOrders] = useState([
    { id: 1, customerName: 'John Doe', price: '$100', lastModification: '2024-05-28', status: 'Active' },
    { id: 2, customerName: 'Jane Smith', price: '$200', lastModification: '2024-05-27', status: 'Active' },
  ]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showActiveOrders, setShowActiveOrders] = useState(true); // State to control the visibility of active orders
  const [darkMode, setDarkMode] = useState(false); // State to control dark mode

  const addSalesOrder = (newOrder) => {
    setSalesOrders([...salesOrders, { ...newOrder, status: 'Active' }]);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleComplete = (orderId) => {
    const completedOrder = salesOrders.find((order) => order.id === orderId);
    setCompletedOrders([...completedOrders, completedOrder]);
    setSalesOrders(salesOrders.filter((order) => order.id !== orderId));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header">
        <div className="buttons">
          <button onClick={() => setShowActiveOrders(true)}>Active Sales Order</button>
          <button onClick={() => setShowActiveOrders(false)}>Completed Sales Order</button>
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button className="add-order" onClick={toggleFormVisibility}>
          + Sales Order
        </button>
      </div>

      {isFormVisible && <AddSalesOrder addSalesOrder={addSalesOrder} onClose={toggleFormVisibility} />}

      {showActiveOrders && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Price</th>
              <th>Last Modification</th>
              <th>Edit/View</th>
            </tr>
          </thead>
          <tbody>
            {salesOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.price}</td>
                <td>{order.lastModification}</td>
                <td>
                  <button onClick={() => handleComplete(order.id)}>Completed</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!showActiveOrders && <CompletedOrders completedOrders={completedOrders} />}
    </div>
  );
};

export default Home;
