import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import axios from 'axios';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sortOption, setSortOption] = useState(localStorage.getItem('sortOption') || 'priority');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem('sortOption', sortOption);
  }, [sortOption]);

  return (
    <div className="app">
      <div className="controls">
        <div className="select-container">
          <label>Grouping</label>
          <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
            <option value="status">Group by Status</option>
            <option value="user">Group by User</option>
            <option value="priority">Group by Priority</option>
          </select>
        </div>
        <div className="select-container">
          <label>Sorting</label>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="priority">Sort by Priority</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      {}
      <Board tickets={tickets} users={users} grouping={grouping} sortOption={sortOption} />
    </div>
  );
};

export default App;