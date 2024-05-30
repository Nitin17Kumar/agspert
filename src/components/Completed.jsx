import React from 'react';
import './Completed.css';
const CompletedOrders = ({ completedOrders }) => {
  return (
    <div className="completed-section">
      <h2>Completed Sales Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Price</th>
            <th>Last Modification</th>
          </tr>
        </thead>
        <tbody>
          {completedOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.price}</td>
              <td>{order.lastModification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedOrders;
