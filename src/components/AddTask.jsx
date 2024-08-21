import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title: task, completed: false, id: Date.now() }));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        required
        className="mr-6 mb-6 p-2"
      />
      <button type="submit"className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2">Add Task</button>
    </form>
  );
};

export default AddTask;
