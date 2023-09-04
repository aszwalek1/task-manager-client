import React, { useEffect, useState } from 'react';
import Table from '../table/Table';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import './dashboard.css';
import NewTask from '../new-task/NewTask';


const Dashboard = ({tasks}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='dashboard-container'>
      <Navbar/>
      <br></br>
      <p className='dashboard-name'>Your Tasks</p>
      <button onClick={openModal} className="new-task-button">New Task</button>
      <NewTask 
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
      <Link to="/admin" className="admin-button">Admin Page</Link>
      <div className="filter-section">
        <p className="filter-by">Filter by:</p>
        <select className="filter-dropdown">
            <option value="option1">Priority</option>
            <option value="option2">Date</option>
            <option value="option3">Status</option>
            <option value="option4">Author</option>
        </select>
        <button className="filter-button">Filter</button>
      </div>
      <Table tasks = {tasks} />
      
    </div>
  );
};

export default Dashboard;
