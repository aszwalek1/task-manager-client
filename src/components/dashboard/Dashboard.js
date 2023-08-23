import React, { useEffect, useState } from 'react';
import Table from '../table/Table';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import './dashboard.css';


const Dashboard = ({tasks}) => {

  return (
    <div className='dashboard-container'>
      <Navbar/>
      <br></br>
      <p className='dashboard-name'>Dashboard</p>
      <Link to="/new-task" className="new-task-button">New Task</Link>
      <Link to="/admin" className="admin-button">Admin Page</Link>
      <Table tasks = {tasks} />
    </div>
  );
};

export default Dashboard;
