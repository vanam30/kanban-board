import React from 'react';
import './Ticket.css';
const Ticket = ({ ticket }) => {
  const priorityLabel = (priority) => {
    switch (priority) {
      case 4:
        return 'Urgent';
      case 3:
        return 'High';
      case 2:
        return 'Medium';
      case 1:
        return 'Low';
      default:
        return 'No Priority';
    }
  };

  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {priorityLabel(ticket.priority)}</p>
    </div>
  );
};

export default Ticket;
