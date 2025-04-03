import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Task, TasksState } from './types.ts';

const initialState: TasksState = {
  tasks: {},
  lastId: 0,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state: TasksState, action: PayloadAction<Omit<Task, 'id'>>) {
      let newId = state.lastId + 1;
      while (state.tasks[newId]) {
        newId++;
      }
      // Обновляем lastId
      state.lastId = newId;
      state.tasks[newId] = { ...action.payload, id: newId }
        },
    updateTask(state, action: PayloadAction<Task>) {
        const id = action.payload.id;
        if (state.tasks[id]) {
          state.tasks[id] = action.payload;
        }
      },
    deleteTask(state, action: PayloadAction<number>) {
        delete state.tasks[action.payload];
      },
    resetTasks(state) {
        state.tasks = {};
      },
  },
});

export const { addTask, updateTask, deleteTask, resetTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
