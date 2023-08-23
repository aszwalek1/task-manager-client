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
      <p className='dashboard-name'>Dashboard</p>
      <button onClick={openModal}>New Task</button>
      <NewTask 
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
      <Link to="/admin" className="admin-button">Admin Page</Link>
      <Table tasks = {tasks} />
    </div>
  );
};

export default Dashboard;
