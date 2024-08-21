
const TaskItem = ({ task, handleDelete, handleToggleComplete }) => {

  return (
    <div>
      <li key={task.id} className='flex flex-row justify-between bg-blue-200 mb-4 p-4 rounded '>
        <div className="flex gap-4">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleComplete(task)}
          />
          <p className='mr-6'>{task.title}</p>
        </div>
        <button onClick={() => handleDelete(task.docId)} className='font-bold text-red-700'>Delete</button>
      </li>

    </div>
  );
};

export default TaskItem;
