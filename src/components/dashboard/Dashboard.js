import React, { useEffect, useState } from 'react';
import Table from '../table/Table';
import Navbar from '../navbar/Navbar';


const Dashboard = ({tasks}) => {

  return (
    <div className='dashboard-container'>
      <Navbar/>
      <Table tasks = {tasks} />
    </div>
  );
};

export default Dashboard;
