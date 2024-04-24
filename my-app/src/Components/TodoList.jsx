import React, { useState, useEffect } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);

  useEffect(() => {
    const storedTasks = sessionStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const allTasksCompleted =
      tasks.length > 0 && tasks.every((task) => task.completed);
    if (allTasksCompleted) {
      setShowCompletionMessage(true);
    } else {
      setShowCompletionMessage(false);
    }
  }, [tasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: newTask, completed: false },
      ]);
      setNewTask("");
      setShowCompletionMessage(false); // Hide completion message when a new task is added
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const toggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="todoList">
        <h1>Your Todolist</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your task.."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="addButton" onClick={addTask}>
            Add task
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="checked">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(index)}
                />
                <span
                  className={task.completed ? "completedTask" : ""}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
              </div>
              <button
                className="deleteButton"
                onClick={() => deleteTask(index)}
              >
                Delete Task
              </button>
            </li>
          ))}
        </ol>
        {showCompletionMessage && (
          <p>You've completed all tasks! Add new tasks :D</p>
        )}
      </div>
    </>
  );
};

export default Todo;
