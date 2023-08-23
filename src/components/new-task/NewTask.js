import React, { useState } from 'react';
import Modal from 'react-modal';

const NewTask = ({isOpen, closeModal}) => {
    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
        >
          <h2>Add New Task</h2>
          <button>Add Task</button>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
    );
};
  
export default NewTask;