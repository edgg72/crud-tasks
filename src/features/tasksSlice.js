import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase';

const tasksCollectionRef = collection(db, "tasks");

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const data = await getDocs(tasksCollectionRef);
  return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      addDoc(tasksCollectionRef, action.payload);
      state.push(action.payload);
    },
    // deleteTask: (state, action) => {
    //   deleteDoc(doc(db, "tasks", action.payload.id));
    //   return state.filter(task => task.id !== action.payload.id);
    // },
    // updateTask: (state, action) => {
    //   updateDoc(doc(db, "tasks", action.payload.id), action.payload);
    //   const index = state.findIndex(task => task.id === action.payload.id);
    //   state[index] = action.payload;
    // }
  },
  extraReducers: builder => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
