import React, { useEffect, useState } from 'react';
import Table from '../table/Table';


const Dashboard = ({tasks}) => {

  return (
    <div>
      Dashboard
      <Table tasks = {tasks} />
    </div>
  );
};

export default Dashboard;
