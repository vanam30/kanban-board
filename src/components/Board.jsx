import React from 'react';
import Column from './Column';
import './Board.css';

const Board = ({ tickets, users, grouping, sortOption }) => {
  const groupTickets = (tickets, grouping) => {
    switch (grouping) {
      case 'status':
        return groupBy(tickets, 'status');
      case 'user':
        return groupBy(tickets, 'userId');
      case 'priority':
        return groupBy(tickets, 'priority');
      default:
        return tickets;
    }
  };

  const groupBy = (tickets, key) => {
    return tickets.reduce((result, ticket) => {
      (result[ticket[key]] = result[ticket[key]] || []).push(ticket);
      return result;
    }, {});
  };

  const sortTickets = (tickets, sortOption) => {
    return tickets.sort((a, b) => {
      if (sortOption === 'priority') return b.priority - a.priority;
      if (sortOption === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };
  
  const groupedTickets = groupTickets(tickets, grouping);
  const sortedGroupedTickets = Object.entries(groupedTickets).map(([key, group]) => ({
    key,
    tickets: sortTickets(group, sortOption),
  }));

  return (
    <div className="board">
      {sortedGroupedTickets.map(({ key, tickets }) => (
        <Column key={key} title={key} tickets={tickets} users={users} grouping={grouping} />
      ))}
    </div>
  );
};

export default Board;