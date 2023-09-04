import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import './new-task.css';

const NewTask = ({ isOpen, closeModal }) => {
  const [task, setTask] = useState({
    title: '',
    priority: '', 
    description: '',
    dueDate: null,
  });

  const priorityOptions = ['High', 'Medium', 'Low'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleDueDateChange = (date) => {
    setTask({
      ...task,
      dueDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className='modal-container'>
      <div className='modal-content'>
        <h2 className='modal-header'>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='modal-label'>Title:</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className='modal-label'>Priority:</label>
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Priority</option>
              {priorityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className='modal-label'>Description:</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className='modal-label'>Due Date:</label>
            <DatePicker
              selected={task.dueDate} 
              onChange={handleDueDateChange} 
              dateFormat="dd/MM/yyyy" 
              placeholderText="Select Due Date" 
            />
          </div>
          <button type="submit" className='add-task-button'>Add Task</button>
          <button onClick={closeModal} className='cancel-button'>Cancel</button>
        </form>
      </div>
    </Modal>
  );
};

export default NewTask;
