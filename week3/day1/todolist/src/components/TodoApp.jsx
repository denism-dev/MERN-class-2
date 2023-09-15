import React, { useState, useEffect } from 'react';

function TodoApp() {
  // Initialize the tasks state, initially with empty array
  const [tasks, setTasks] = useState([]);
  // Initialize the input state for new tasks
  const [newTask, setNewTask] = useState('');

  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to handle task completion toggle
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to handle task removal
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Todo List</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={addTask}
              >
                Add
              </button>
            </div>
          </div>
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`list-group-item ${
                  task.completed ? 'list-group-item-success' : ''
                }`}
              >
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={task.completed}
                    onChange={() => toggleTask(index)}
                  />
                  <label className="form-check-label">
                    <span
                      style={{
                        textDecoration: task.completed
                          ? 'line-through'
                          : 'none',
                      }}
                    >
                      {task.text}
                    </span>
                  </label>
                </div>
                <button
                  className="btn btn-danger btn-sm float-right"
                  onClick={() => removeTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
