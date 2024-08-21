import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; 
import { doc, collection, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";

import AddTask from './AddTask';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleToggleComplete = async (task) => {
    try {
      await updateDoc(doc(db, 'tasks', `${task.docId}`), {
        completed: !task.completed
      }); 
      console.log("Task successfully updated");
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };


  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const fetchedTasks = snapshot.docs.map((doc) => ({
        docId: doc.id,      
        ...doc.data(),    
      }));
      setTasks(fetchedTasks);
      setLoading(false);
    });
  
    return () => unsubscribe(); 
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await deleteDoc(doc(db, 'tasks', `${taskId}`)); 
      console.log("Task successfully deleted");
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <AddTask />
      <h1 className='mb-4 font-bold'>Task List</h1>
      <ul>
        {tasks && tasks.length > 0 ? (
          
          tasks.map(task => (
            <TaskItem 
              task={task}
              handleDelete={handleDelete}
              handleToggleComplete={handleToggleComplete}
              key={task.id}
            />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
