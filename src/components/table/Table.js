const Table = ({tasks}) => {
    return (
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Date of Creation</th>
                <th>Due Date</th>
                <th>Author</th>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                </tr>
            </thead>
            <tbody>
                {tasks?.map(task => (
                <tr key={task._id}>
                    <td>{task.taskId}</td>
                    <td>{task.status}</td>
                    <td>{task.dateOfCreation}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.author}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.priority}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};
export default Table;