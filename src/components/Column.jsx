import React from 'react';
import Ticket from './Ticket';
import './Column.css';

const Column = ({ title, tickets, users, grouping }) => {
    const getUserName = (userId) => {
      const user = users.find((user) => user.id === userId);
      return user ? user.name : 'Unknown User';
    };
  
    return (
        <div className="column">
        <h2>{grouping === 'user' ? getUserName(title) : title}</h2>
        <div className="tickets">
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Column;
