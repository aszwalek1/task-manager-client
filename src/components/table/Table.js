import React, { useState } from 'react';
import './table.css'; 

const Table = ({ tasks }) => {
  
  return (
    <table>
      <thead className="thead">
        <tr>
          <th>Title</th>
          <th>Priority</th>
          <th>Description</th>
          <th>Status</th>
          <th>Date of Creation</th>
          <th>Due Date</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {tasks?.map(task => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>
              {task.priority === 'HIGH' ? (
                <span className="red-text">{task.priority}</span>
              ) : (
                task.priority
              )}
            </td>
            <td>{task.description}</td>
            <td>
                {task.status === 'TODO' ? 'To Do' :
                task.status === 'IN_PROGRESS' ? 'In Progress' :
                task.status === 'COMPLETED' ? 'Completed' :
                task.status}
            </td>
            <td>{task.dateOfCreation}</td>
            <td>{task.dueDate}</td>
            <td>{task.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
